const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: `direccion de la ciudad para obtener el clima`,
        demand: false
    }
}).argv;
module.exports = {
    argv
}