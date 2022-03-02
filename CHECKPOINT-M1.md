# Checkpoint-M1
Due Date - 02-March-2021 before class

## Tasks Completed
We have completed the “init” job part and ensured that it can be run on Windows, Mac (Intel Chip) and Mac (M1 chip). 
We have created a [Project Board](https://github.ncsu.edu/CSC-DevOps-S22/DEVOPS-30/projects/1) which is connected with the [Issues](https://github.ncsu.edu/CSC-DevOps-S22/DEVOPS-30/issues) created on the github project. 

The tasks which we have completed till now are mentioned below which can also be found at [Closed Issues](https://github.ncsu.edu/CSC-DevOps-S22/DEVOPS-30/issues?q=is%3Aissue+is%3Aclosed) and on our [Project Board](https://github.ncsu.edu/CSC-DevOps-S22/DEVOPS-30/projects/1) as well.
- Make pipeline command executable
- Create project board
- [M1] Create a Virtual Machine
- [M1] Extract running VM's IPv4
- [M1] Install required 1Trust dependencies in the VM
- [M1] Clone 1Trust in VM 
- [M1] Output SSH Config info for provisioned VM
- [Intel]Create Init file for Intel Chips
- [Intel] Get ssh info through bakerx
- Modify init.js to check architecture and call the corresponding init file. 
- Create .env file and add variables
- [M1-init] Output path of SSH key requirement 

## In-Progress
At this checkpoint stage, We are working on creating the build script and the yaml file which will configure our build environment. 

The tasks which are in progress now are stated in the [Project Board](https://github.ncsu.edu/CSC-DevOps-S22/DEVOPS-30/projects/1) 
- Configure the VM to contain the tools and files necessary for the build server.
- [M1] Confirm how to setup NCSU GitHub with SSH in VM
- Create YAML build file

## Remaining Tasks 
We have completed the “init” part of the project.
We will be working on the “build” job tasks. Some tasks have been added on the project board. We will be adding more tasks as we progress.

- Read YAML file and install requirements
- [M1] Build script to configure the environment
- [Intel] Build script to configure the environment

## Issues faced
While working in the initial phase of our project we didn't face much issues. Few of the issues we faced are mentioned below:

- While working on the project we realized that we need a SSH key from git as we are using the Enterprise version of the git. So we have to figure a way to setup NCSU GitHub with SSH in VM.
- Correctly passing a command to the `vm exec` command from the Node.js app. We have to be careful about the use of quotes and escape any special characters that can be interpreted by the shell. 
- Handling code for different architectures as well as different operating systems. It is still a work in progress and we need to find a Windows machine that will test our code. 
- Determining how basicvm works. Like the location of the key and the seed and the functionality of setting up shared dirs. It would help if we have access to the basicvm code or have better documentation. 

## Project Board Snapshot

Below are the snapshots of our [Project Board](https://github.ncsu.edu/CSC-DevOps-S22/DEVOPS-30/projects/1) that contains the list of issues. There are three categories of issues, namely Completed, To-Do and InProgress.
More issues will be added as we proceed further with our project.

<img width="1440" alt="Screen Shot 2022-03-02 at 4 02 42 AM" src="https://media.github.ncsu.edu/user/21059/files/3e60b457-fbc9-43db-9f28-795b53cff1de">

<img width="1440" alt="Screen Shot 2022-03-02 at 4 02 53 AM" src="https://media.github.ncsu.edu/user/21059/files/1e71398e-609b-4d71-9bba-bd230489db5f">



