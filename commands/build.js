const { getProcessor } = require('../exec/utils');
const m1build = require('./m1build');
const intelbuild = require('./intelbuild');

exports.command = 'build';
exports.desc = 'Build VM and execute jobs';
exports.builder = yargs => {
    yargs.options({
    });
};

exports.handler = async () => {
    let processor = getProcessor();
    console.log(processor);
    if (processor == 'Arm64')
    {
        m1build.m1build() 
    }
    else if(processor == 'Intel/Amd64')
    {
        intelbuild.intelbuild();
    }
    else
    {
        throw new Error("Unidentified Architecture");
    }
    
}
