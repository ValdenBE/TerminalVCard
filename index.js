#!/usr/bin/env node
// TerminalVCard By Valden for BeCode
const boxen = require('boxen');
//
var clear = require('clear');
//
const chalk = require('chalk');
//
const data ={
    name : 'Fabian Pirghaye',
    pseudo : 'Valden',
    status : 'Junior Web developper @ Becode',
    github : chalk.blue('https://github.com/' + chalk.yellow('ValdenBE')),
    linkedin : chalk.blue('www.linkedin.com/in/' + chalk.yellow('ValdenBE')),
    npm : chalk.blue('https://www.npmjs.com/' + chalk.yellow('~valdenbe')),
}
const newline = '\n'
const title = chalk.yellow(`${data.name } ♦ ${data.pseudo}`)
const allData = title + newline + newline +`${data.status}` + newline + newline + `${data.github}` + newline + `${data.linkedin}` + newline + `${data.npm}`
//Options for Boxen package
const options = {
    borderColor : 'red',
    backgroundColor : 'black',
    padding : 2,
    margin : 5,
    borderStyle : {
        topLeft: '█',
        topRight: '█',
        bottomLeft: '█',
        bottomRight: '█',
        horizontal: '█',
        vertical: '█'
    },
    align : 'center',
};
clear();

// Output :
console.log(boxen(allData , options))