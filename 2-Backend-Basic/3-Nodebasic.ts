import validator from 'validator';
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// 1. Chalk Styling
console.log(chalk.blue("Kirtan"));
console.log(chalk.bgBlue("error"));
console.log(chalk.green.bgBlue.bold("Chaining demo"));

// 2. Validation
console.log(validator.isEmail('kirtan@practice.com')); // true
console.log(validator.isURL('http://kirtan.com'));    // Corrected the URL (needs //)

// 3. Raw Process Arguments
// Note: process.argv[0] is the Node path, [1] is the File path. 
// The actual command starts at [2].
const command = process.argv[2]; 

if (command === 'add') {
    console.log(chalk.green('Adding...'));
} else {
    console.log(chalk.red('Hala Madrid'));
}

// 4. Yargs (The better way)
// We cast to any or a custom interface to avoid type errors on dynamic properties
const argv = yargs(hideBin(process.argv)).parseSync() as any;

console.log('Yargs Output:', argv);

if (argv._.includes('add')) {
    console.log('Action: Add detected by Yargs');
}