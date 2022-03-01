const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const scp2 = require('scp2');
const { stdout, stderr } = require('process');
const { e } = require('virtcrud/providers/hyperv/cmdlets');
const sshExe = require('../exec/ssh');
const { vmSSHExec, shellExec, shellExecSyncm, vmSSHExecSync, shellExecSync } = require('../exec/utils');
const { sshExec } = require('virtcrud/providers/util');

exports.command = 'init';
exports.desc = 'Provision VM';
exports.builder = yargs => {
    yargs.options({
    });
};

const CONTAINER_NAME = 'DEVOPS30'
const CONTAINER_IMAGE = 'ubuntu:focal'
const PRIVATE_KEY = 'id_ed25519';
const VM_USER = 'ubuntu';
const APP_GITHUB_URL = 'git@github.ncsu.edu:engr-csc326-staff/iTrust2-v10.git';
const ID_KEY_PATH = '~/Library/Application Support/basicvm/key';



exports.handler = async argv => {
    const { processor } = argv;
    let lastCmdStatus = 0;

    console.log(chalk.green("Preparing computing environment..."));

    // Start container, stop if container with same name is already up.
    console.log(chalk.green(`Starting ubuntu:focal instance with name: ${CONTAINER_NAME}`));
    
    lastCmdStatus = shellExecSync(`vm pull ${CONTAINER_IMAGE}`);

    if (lastCmdStatus !== 0) {
        throw new Error('Failed to pull image...');
    }
    console.log(chalk.green(`Image pull successful.`));

    shellExecSync(`vm stop ${CONTAINER_NAME}`);
    lastCmdStatus = shellExecSync(`vm start ${CONTAINER_NAME} ${CONTAINER_IMAGE}`);
    
    if (lastCmdStatus !== 0) {
        throw new Error('Failed to start VM...');
    }
    console.log(chalk.green(`Started successfully...`));

    console.log(chalk.green(shell.exec(`vm ssh-config ${CONTAINER_NAME}`)));

    console.log(chalk.green(shell.cat(`Identity File: ${ID_KEY_PATH}`)));
    
};



