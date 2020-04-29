const colors = require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;


let direccion = argv.direccion;





const getInfo = async ( direccion ) => {

    try {
        const coords = await lugar.getLugar(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}ºC`;
    } catch (error) {
        return `No se pudo encontrar clima para ${direccion} `;
    }
    
}

getInfo(direccion).then( info => {
    console.log(info);
}).catch(err => {
    console.log(err);
})




