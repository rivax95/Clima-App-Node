let argv = require('./yargs/yargs').argv;
const lugar = require('./LUGAR/lugar.js');
const tiempo = require('./Clima/clima');

let getinfo = async(direccion) => {
    try {
        let coordenadas = await lugar.getlugarLatLng(direccion);

        let temperatura = await tiempo.getclima(coordenadas.lat, coordenadas.lon);

        console.log(`El tiempo en ${coordenadas.direccion} es de ${temperatura}`);
    } catch (error) {
        console.log(`No se pudo determinar el clima de: ` + direccion);
    }


}
getinfo(argv.direccion);

/* lugar.getlugarLatLng(argv.direccion)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
tiempo.getclima(40.75000, -75.00000).then(resp => console.log(resp)).catch(err => console.log(err)); */