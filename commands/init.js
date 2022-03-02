const { getProcessor } = require('../exec/utils');
const m1init = require('./m1init');
const intelinit = require('./intelinit');

exports.command = 'init';
exports.desc = 'Provision VM';
exports.builder = yargs => {
    yargs.options({
    });
};

exports.handler = async () => {
    let processor = getProcessor();
    console.log(processor);
    if (processor == 'Arm64')
    {
        m1init.m1init() 
    }
    else if(processor == 'Intel/Amd64')
    {
        intelinit.intelinit();
    }
    else
    {
        throw new Error("Unidentified Architecture");
    }
}
