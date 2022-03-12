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

## Issues


## Screencast
Please refer to [Google Drive](https://drive.google.com/drive/folders/1veky1RZ7qmJp3X8gCbBitJR3gtkJYAb6) for the screencast video of Milestone 1.

