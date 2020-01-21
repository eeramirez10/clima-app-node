const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    const encodeUlr = encodeURI( direccion )
 
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr} `,
        headers: { 'x-rapidapi-key': '588d28323cmsh4a099a08a7b2fd4p17d601jsn73f1271f24a2' }
    });

    const resp = await instance.get();

    if ( resp.data.Results.length == 0 ){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];

    const direction = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direction,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}


