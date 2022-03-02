const chalk = require('chalk');
const { shellExecSync } = require('../exec/utils');
const path = require('path');
const { sshcommand } = require('../exec/ssh')

const PropertiesReader = require('properties-reader');
const prop = PropertiesReader(path.resolve(path.join(__dirname, '..', 'config', 'app.properties')));

const CONTAINER_NAME = prop.get('container.name');
const CONTAINER_IMAGE = process.env.INTEL_VM_IMAGE_VERSION;
// const CONTAINER_IMAGE = prop.get('intel.image.name');
const CCONTAINER_REGISTRY = process.env.INTEL_VM_IMAGE_REGISTRY;
// const CONTAINER_REGISTRY = prop.get('intel.image.registry');
const ID_KEY_PATH = prop.get('ssh.identityfile');

exports.intelinit = async () => {

    console.log(chalk.green("Preparing computing environment..."));

    // Start container, stop if container with same name is already up.
    console.log(chalk.green(`Starting ${CONTAINER_IMAGE} instance with name: ${CONTAINER_NAME}`));

    if (process.env.INIT_PULL_IMAGE === 'true') {
        shellExecSync(`bakerx pull ${CONTAINER_IMAGE} ${CONTAINER_REGISTRY}`);
        console.log(chalk.green(`Image pull successful.`));
    }

    if (process.env.INIT_RESTART_CONTAINER === 'true') {
        shellExecSync(`bakerx run ${CONTAINER_NAME} ${CONTAINER_IMAGE}`);

        console.log(chalk.green(`Started successfully...`));
    }

    shellExecSync(`bakerx ssh-info ${CONTAINER_NAME}`);

    console.log(chalk.green(`Identity File: ${ID_KEY_PATH}`));
    
};