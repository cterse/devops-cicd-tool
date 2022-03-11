const chalk = require('chalk');
const { shellExecSync, vmSSHExecSync } = require('../exec/utils');
const path = require('path');
require('dotenv').config({path:path.join( path.dirname(require.main.filename), '.env')});

const PropertiesReader = require('properties-reader');
const prop = PropertiesReader(path.resolve(path.join(__dirname, '..', 'config', 'app.properties')));

const CONTAINER_NAME = prop.get('container.name');
const CONTAINER_IMAGE = process.env.M1_VM_IMAGE_VERSION;
const ID_KEY_PATH = prop.get('ssh.identityfile');
const NCSU_GITHUB_USER_TOKEN = process.env.NCSU_GITHUB_PERSONAL_TOKEN
const SPRING_DB_PASS = process.env.SPRING_DB_PASS

exports.m1build = async () => {

    vmSSHExecSync(`'ansible-playbook /home/ubuntu/shared/cwd/shared/build2.yml --extra-vars \\"usertoken=${NCSU_GITHUB_USER_TOKEN} db_pass=${SPRING_DB_PASS}\\"'`, CONTAINER_NAME);
    
};
