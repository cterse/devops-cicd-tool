const chalk = require('chalk');
const { shellExecSync } = require('../exec/utils');
const path = require('path');
const { sshExec } = require('../exec/ssh')

const PropertiesReader = require('properties-reader');
const prop = PropertiesReader(path.resolve(path.join(__dirname, '..', 'config', 'app.properties')));

const CONTAINER_NAME = prop.get('container.name');
const CONTAINER_IMAGE = process.env.INTEL_VM_IMAGE_VERSION;
const CCONTAINER_REGISTRY = process.env.INTEL_VM_IMAGE_REGISTRY;
const ID_KEY_PATH = prop.get('ssh.identityfile');
const NCSU_GITHUB_USER_TOKEN = process.env.NCSU_GITHUB_PERSONAL_TOKEN
const SPRING_DB_PASS = process.env.SPRING_DB_PASS

exports.intelbuild = async () => {
    const myArray = sshinfo.split(" ");
    var config = {
        identifyFile: myArray[2].replaceAll('"',''),
        user: myArray[3].split("@")[0],
        host: myArray[3].split("@")[1],
        port: myArray[5]
    };

    sshExec(`ansible-playbook /bakerx/shared/build.yml -e \"usertoken=${NCSU_GITHUB_USER_TOKEN}\" -e \"db_pass=${SPRING_DB_PASS}\"` , config);
};