#!/bin/bash
# Echo commands run
set -x

# exit when any command fails
set -e
# Force time to sync
sudo timedatectl set-ntp off
sudo timedatectl set-ntp on

sudo apt-get update
sudo add-apt-repository ppa:ansible/ansible
sudo apt-get install ansible -y

