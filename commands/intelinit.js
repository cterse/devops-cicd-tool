const chalk = require('chalk');
const { shellExecSync } = require('../exec/utils');
const path = require('path');

const PropertiesReader = require('properties-reader');
const prop = PropertiesReader(path.resolve(path.join(__dirname, '..', 'config', 'app.properties')));

const CONTAINER_NAME = prop.get('container.name');
const CONTAINER_IMAGE = prop.get('image.name');
const ID_KEY_PATH = prop.get('ssh.identityfile');