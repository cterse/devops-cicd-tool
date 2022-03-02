const chalk = require("chalk");
const shell = require("shelljs");
const child  = require("child_process");

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

exports.getProcessor = function getProcessor() {
    
    let processor = "Intel/Amd64";

    try { 
        let output = child.execSync("uname -a").toString();
        if( output.match(/Darwin.*arm64/) ) {
            
            processor = "Arm64";
        }

    } catch ( err ) {
        console.log( chalk.red( err.message ));
        process.exit(1);
    }

    return processor;
}
