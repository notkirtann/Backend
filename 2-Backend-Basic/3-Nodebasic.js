import validator from 'validator';
import chalk from 'chalk';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
// import notes from 'notes.js'



console.log(chalk.blue("Kirtan"));
console.log(chalk.bgBlue("error"));
console.log(chalk.green.bgBlue.bold("Chaing demo"));
console.log(chalk.bgRed.blue.bold("Chaing demo"));


console.log(validator.isEmail('kirtan@practice.com'));

console.log(validator.isURL('http:/kirtan.com'));

console.log(process.argv); // to take argument from cmd  
const cmdOutput = process.argv[0];//first two are useless so we can use as it returns array
if(cmdOutput=='add'){
    console.log('Adding');
}
else {
    console.log('Hala Madrid');
    
}
//can be done using npm much better option
//yargs
const argv = yargs(hideBin(process.argv)).argv;
console.log(argv);
