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

exports.intelbuild = async () => {
    let sshinfo = shellExecSync(`bakerx ssh-info ${CONTAINER_NAME}`);

    const myArray = sshinfo.split(" ");
    var config = {
        identifyFile: myArray[2].replaceAll('"',''),
        user: myArray[3].split("@")[0],
        host: myArray[3].split("@")[1],
        port: myArray[5]
    };

    sshExec(`ansible-playbook /bakerx/shared/build.yml`, config);
};