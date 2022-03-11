const chalk = require('chalk');
const { shellExecSync, vmSSHExecSync } = require('../exec/utils');
const path = require('path');
require('dotenv').config({path:path.join( path.dirname(require.main.filename), '.env')});
const yaml = require('js-yaml');
const fs = require('fs');

const PropertiesReader = require('properties-reader');
const prop = PropertiesReader(path.resolve(path.join(__dirname, '..', 'config', 'app.properties')));

const CONTAINER_NAME = prop.get('container.name');
const CONTAINER_IMAGE = process.env.M1_VM_IMAGE_VERSION;
const ID_KEY_PATH = prop.get('ssh.identityfile');
const NCSU_GITHUB_USER_TOKEN = process.env.NCSU_GITHUB_PERSONAL_TOKEN
const SPRING_DB_PASS = process.env.SPRING_DB_PASS

exports.m1build = async argv => {
    const { jobName, buildFile, processor } = argv;

    let fileContents = fs.readFileSync(path.resolve(__dirname, `../shared/${buildFile}`), 'utf8');
    data = yaml.load(fileContents);

    let setup = data['setup'];
    let job = data['jobs'].filter(d => d.name === jobName)[0];
    let steps = job['steps'];

    // vmSSHExecSync(`'ansible-playbook /home/ubuntu/shared/cwd/shared/build2.yml --tags \\"other-build\\" --extra-vars \\"usertoken=${NCSU_GITHUB_USER_TOKEN} db_pass=${SPRING_DB_PASS}\\"'`, CONTAINER_NAME);

    for (setupRole in setup) {
        vmSSHExecSync(`'ansible-playbook /home/ubuntu/shared/cwd/shared/playbook.yml  \
                            --extra-vars \\"choice=${data['setup'][setupRole]}  \
                            usertoken=${NCSU_GITHUB_USER_TOKEN} db_pass=${SPRING_DB_PASS}\\"'` 
                            , CONTAINER_NAME);
    }
    
    for (buildRole in steps) {
        vmSSHExecSync(`'ansible-playbook /home/ubuntu/shared/cwd/shared/playbook.yml  \
                        --extra-vars \\"choice=${steps[buildRole]['run']}  \
                        usertoken=${NCSU_GITHUB_USER_TOKEN} db_pass=${SPRING_DB_PASS}\\"'`, CONTAINER_NAME);
    }

    // vmSSHExecSync(`'sudo mvn -f /home/ubuntu/iTrust/iTrust2/pom.xml -B -U clean test'`, CONTAINER_NAME);
};
