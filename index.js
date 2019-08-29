#!/usr/bin/env node
//! TerminalVCard By Valden for BeCode
// Clear the terminal at launch :
const clear = require('clear');
// text colors :
const chalk = require('chalk');
// Boxes in terminal :
const boxen = require('boxen');
// Options for Boxen :
const options = {
    borderColor : 'red',
    backgroundColor : 'black',
    padding : {
        left : 5,
        right : 5
    },
    margin : {
        top : 2,
        bottom : 2
    },
    borderStyle : 'double',
    align : 'center',
    float : 'center',
};
// UserData for the VCard :
const data ={
    name : 'Fabian Pirghaye',
    pseudo : 'Valden',
    status : 'Junior Web developer @ Becode',
    github : chalk.blue('https://github.com/' + chalk.yellow('ValdenBE')),
    linkedin : chalk.blue('www.linkedin.com/in/' + chalk.yellow('ValdenBE')),
    npm : chalk.blue('https://www.npmjs.com/' + chalk.yellow('~valdenbe')),
    card : chalk.white('- ') + chalk.blue('My Vcard : ' + chalk.yellow('npx valden')) + chalk.white(' -'),
} 
// Merge name & pseudo in one line :
const title = chalk.yellow(`${data.name }`+ chalk.white(' ♦ ') + `${data.pseudo}`)
// Return to line :
const newLine = '\n'
//  Merge all data in one Const :
const allData = title + newLine + newLine +`${data.status}` + newLine + newLine + `${data.github}` + newLine + `${data.linkedin}` + newLine + `${data.npm}` + newLine + newLine + `${data.card}`
// Clear the terminal before console.log() :
clear();
// Output :
console.log(boxen(allData , options));