#!/bin/bash
# Echo commands run
set -x

# exit when any command fails
set -e

apt-get update
add-apt-repository ppa:ansible/ansible
apt-get install ansible -y

