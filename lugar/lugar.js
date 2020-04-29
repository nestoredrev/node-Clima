const axios = require('axios'); //axios es el paquete que permite hacer peticiones http desde node mediante promesas
//request (actualmente deprecated) es el paquete que permite hacer peticiones http desde node mediante callbacks


let getLugar = async ( dir ) => {

    let location = encodeURI(dir); // para tratar los espacios en blanco al hacer la peticion
    let url = `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${location}`
    let apiKey = '38573a9f0fmshcc31f7c9452a762p166945jsn7265be4d92db';

    const instance = axios.create({
        baseURL: url,
        headers: {'x-rapidapi-key': apiKey}
    });

    const respuesta  = await instance.get();

    if(respuesta.data.Results.length === 0)
    {
        throw new Error('Error en la peticion');
    }
    else
    {
        const data = respuesta.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;
        
        return {
            direccion,
            lat,
            lng
        }
    }
}

module.exports = {
    getLugar
}

