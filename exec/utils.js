const chalk = require("chalk");
const shell = require("shelljs");

exports.shellExec = function shellExec(cmd) {
    return new Promise( (resolve, reject) => {
        shell.exec(`${cmd}`, (code, stdout, stderr) => {
            // console.log(chalk.grey(stdout));
            // console.log(chalk.red(stderr));
            if (stderr) reject(code); else resolve(code);
        });
    } );
}

exports.shellExecSync = function shellExecSync(cmd) {
    return shell.exec(`${cmd}`);
}

exports.vmSSHExec = function vmSSHExec(cmd, vmName) {
    return new Promise( (resolve, reject) => {
        shell.exec(`vm exec ${vmName} ${cmd}`, (code, stdout, stderr) => {
            // console.log(chalk.grey(stdout));
            // console.log(chalk.red(stderr));
            if (stderr) reject(code); else resolve(code);
        });
    } );
}

exports.vmSSHExecSync = function vmSSHExecSync(cmd, vmName) {
    return shell.exec(`vm exec ${vmName} ${cmd}`);
}