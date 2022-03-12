# Team 30 Devops Project

## Team Members
- Himanshu Gupta (hgupta6)
- Chinmay Terse (cterse)
- FNU Jayaty (jjayaty)

## .env File Structure

```
# pipeline init properties
INIT_PULL_IMAGE=false   # pull a new image file on pipeline init
INIT_RESTART_CONTAINER=false    # restart container on pipeline init

# Test app properties
TESTAPP_URL=git@github.ncsu.edu:engr-csc326-staff/iTrust2-v10.git
TESTAPP_URL_HTTPS=https://github.ncsu.edu/engr-csc326-staff/iTrust2-v10.git
NCSU_GITHUB_PERSONAL_TOKEN=<NCSU-GITHUB-PERSONAL-TOKEN>

# M1 props
M1_VM_IMAGE_VERSION=ubuntu:jammy

# Intel props
INTEL_VM_IMAGE_REGISTRY=cloud-images.ubuntu.com
INTEL_VM_IMAGE_VERSION=focal

# iTrust props
SPRING_DB_PASS=root

```


# Milestone 1 Report
Due - March 11th 

## Execution Steps 
Steps to test Milestone 1:

1. Set the variables in the .env file as shown above.
2. Run the “pipeline init” command.
3. Run the command “pipeline build itrust-build build.yml” 


The aim of this milestone is to make a Virtual machine and automate the installation of initial requirements such as JDK, Maven and SQL. We successfully achieved this target and automated the process of installation using Ansible. We used ansible roles to differentiate  between the different tasks and make our code more scalable. We can easily add new tasks such as installing pandas by adding a new role using ansible galaxy and updating the main.yml file in the tasks file of that particular role. The new role needs to be added in the build.yml file in order for it to execute.

All the [Tasks and Issues](https://github.ncsu.edu/CSC-DevOps-S22/DEVOPS-30/issues?q=is%3Aissue+is%3Aclosed) for the [Project](https://github.ncsu.edu/CSC-DevOps-S22/DEVOPS-30/projects/1) which the team has worked on. 

## Issues

1. The Ubuntu focal image for M1 got corrupted due to some nightly updates, so we added a variable INIT_PULL_IMAGE  in the .env file to stop the image pull by setting its value as false. Also, to avoid running into this issue we started using Jammy image for our code.

2. While running apt update in the VM, sometimes the following issue is encountered. This is potentially caused due to a mismatch in the BIOS time and the system time, between the host and the VM. To fix this issue we used the below commands in setup.sh before installing dependencies in the VM.
  
3. While executing the build command several times, we were getting an error as the iTrust repository had already been cloned in our VM. So, to overcome this error we modified our code in iTrust role as shown below.


## Result Snapshot
Below is the snapshot of our final result with all the test cases passed successfully.

<img width="917" alt="Screen Shot 2022-03-11 at 9 13 32 PM" src="https://media.github.ncsu.edu/user/21059/files/81e6fa82-91d3-475d-bf89-8d0bed906680">


## Screencast
Please refer to [Google Drive](https://drive.google.com/drive/folders/1veky1RZ7qmJp3X8gCbBitJR3gtkJYAb6) for the screencast video of Milestone 1.

