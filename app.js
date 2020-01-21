
const argv = require('yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

argv.options({
    direccion:{
        alias:'d',
        desc:'Direccion de la ciudad para obtener el clima',
        demand: false
    }
}).argv;

const direccion = argv.argv.direccion;

const getInfo = async ( direccion ) => {

    try {

        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `La temperatura de ${coordenadas.direction} es de ${temp}`; 
    } catch (error) {
        return `No se pudo determinar ${error}`;
    }


}


getInfo(direccion).then( resp => console.log(resp))
                    .catch(err => console.log(err))





