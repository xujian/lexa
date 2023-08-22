import chalk from 'chalk';
import boxen from 'boxen';
import yargs from 'yargs';
import { Command } from 'commander';
export function cli() {
    var program = new Command();
    program
        .version('1.0.0')
        .description('Dictioanry manager for web apps.')
        .option('-c, --config [value]', 'Config to input')
        .option('-o, --output [value]', 'Output file')
        .parse(process.argv);
    var options = program.opts();
    chalk.cyan([
        'Lexa\n',
        boxen(chalk.green('Welcome'), {
            padding: 1,
            borderColor: 'blue',
            dimBorder: true
        }),
        '\n'
    ].join(''));
    var argv = yargs().argv;
    console.info('Usage:', options);
}
function usage() {
}
//# sourceMappingURL=index.js.map