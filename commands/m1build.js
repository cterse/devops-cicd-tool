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




// function getVmIp(vmName) {

//     return shell.exec(`vm exec ${vmName} 'hostname -I | cut -d" " -f1'`);
// }

// function executeCommandInVM(cmd, vmName) {
//     shell.exec(`vm exec ${vmName} ${cmd}`, async=false);
//     // shell.exec("vm exec "+ vmName +" "+ cmd, async=false);
// }

// console.log(chalk.green(`Installing dependencies...`));
// // installDeps();
// console.log(chalk.green(`Dependencies installed.`));

// let ip = getVmIp(CONTAINER_NAME);
// console.log(chalk.green(`VM IPv4: ${ip}`));
// sshConfig.host = ip;

// await setVmJavaEnvironment();

// // console.log(chalk.green(`Transferring private key...`));
// shell.exec("scp ./keys/"+PRIVATE_KEY+" "+VM_USER+"@"+ip+":");
// executeCommandInVM(`"cp ${PRIVATE_KEY} .ssh"`, CONTAINER_NAME);
// console.log(chalk.green(`Private key transfer complete.`));

// // console.log(chalk.green(`Cloning GitHub Enterprise repo...`));
// // executeCommandInVM(`git clone ${APP_GITHUB_URL} app`, CONTAINER_NAME)
// // console.log(chalk.green(`Cloning GitHub Enterprise repo...`));

// // console.log(chalk.green(`Running Maven package`));
// // executeCommandInVM('"mvn package -X -f /home/ubuntu/app/iTrust2/"', CONTAINER_NAME);

// function installDeps() {
//     executeCommandInVM('sudo apt update', CONTAINER_NAME);
//     // executeCommandInVM('"sudo apt install nodejs -y"', CONTAINER_NAME);
//     // executeCommandInVM('"sudo apt install npm -y"', CONTAINER_NAME);
//     executeCommandInVM('"sudo apt install git -y"', CONTAINER_NAME);

//     console.log(chalk.green(`Installing Java 8...`));
//     executeCommandInVM('"sudo apt install openjdk-8-jdk-headless -y"', CONTAINER_NAME);
    
//     console.log(chalk.green(`Installing Maven...`));
//     executeCommandInVM('"sudo apt install maven -y"', CONTAINER_NAME);
// }

// // set JAVA_HOME=/usr/lib/jvm/java-8-openjdk-arm64/
// async function setVmJavaEnvironment() {

//     await sshExe("echo 'this is a test'", sshConfig);

//     // shell.exec( "vm exec "+ CONTAINER_NAME +" 'export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-arm64/'" );
//     // shell.exec( "vm exec "+ CONTAINER_NAME +" 'echo $JAVA_HOME'" );
// }


if (processor === "Arm64") {
    for(depend in this.data['setup']){
        child.execSync(`vm exec ${vmname} "ansible-playbook /home/ubuntu/shared/cwd/shared/play.yml -e \"choice=${this.data['setup'][depend]}\" -e \"token=${process.env.token}\" -e \"db_password=${process.env.db_password}\""`, {stdio: ['inherit', 'inherit', 'inherit']});
    }
    for( step in steps){
        child.execSync(`vm exec ${vmname} "ansible-playbook /home/ubuntu/shared/cwd/shared/play.yml -e \"choice=${steps[step]['run']}\" -e \"token=${process.env.token}\" -e \"db_password=${process.env.db_password}\""`, {stdio: ['inherit', 'inherit', 'inherit']});
    }
}