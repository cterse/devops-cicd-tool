#!/bin/bash
# Echo commands run
set -x

# exit when any command fails
set -e

sudo apt-get update
sudo add-apt-repository ppa:ansible/ansible
sudo apt-get install ansible -y

