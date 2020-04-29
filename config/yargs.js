const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        description: 'Direccion de la ciudad para obter el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}