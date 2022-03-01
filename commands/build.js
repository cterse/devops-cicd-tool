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