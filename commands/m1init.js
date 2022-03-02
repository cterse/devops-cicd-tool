const chalk = require('chalk');
const { shellExecSync } = require('../exec/utils');
const path = require('path');

const PropertiesReader = require('properties-reader');
const prop = PropertiesReader(path.resolve(path.join(__dirname, '..', 'config', 'app.properties')));

const CONTAINER_NAME = prop.get('container.name');
const CONTAINER_IMAGE = prop.get('m1.image.name');
const ID_KEY_PATH = prop.get('ssh.identityfile');

exports.m1init = async () => {

    console.log(chalk.green("Preparing computing environment..."));

    // Start container, stop if container with same name is already up.
    console.log(chalk.green(`Starting ${CONTAINER_IMAGE} instance with name: ${CONTAINER_NAME}`));

    if (prop.get('init.pull_image')) {
        shellExecSync(`vm pull ${CONTAINER_IMAGE}`);
        console.log(chalk.green(`Image pull successful.`));
    }

    if (prop.get('init.restart_container')) {
        shellExecSync(`vm stop ${CONTAINER_NAME}`);
        shellExecSync(`vm start ${CONTAINER_NAME} ${CONTAINER_IMAGE}`);

        console.log(chalk.green(`Started successfully...`));
    }

    shellExecSync(`vm ssh-config ${CONTAINER_NAME}`);

    console.log(chalk.green(`Identity File: ${ID_KEY_PATH}\n`));
    
    console.log(chalk.green(`Shared dirs:`));
    console.log(chalk.green(`.:~/shared/cwd`));
    console.log(chalk.green(`~:~/shared/home`));
};