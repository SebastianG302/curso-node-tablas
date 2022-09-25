
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check((argv) => {
        if (isNaN(argv.b))
            throw 'La base tiene que ser un numero'.red;
        else
            return true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Hasta que número se multiplicará la base'
    })
    .check((argv) => {
        if(isNaN(argv.h))
            throw 'Hasta debe ser un número'.red;
        else
            return true
    })
    .argv;

module.exports = argv;