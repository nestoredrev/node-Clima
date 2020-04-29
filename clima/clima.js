const axios = require('axios'); //axios es el paquete que permite hacer peticiones http desde node mediante promesas

const getClima = async (lat, lng) => {

    let apiKey = 'd59154e51ffab5b63734f4744769d201';
    respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);

    return respuesta.data.main.temp;

}

module.exports = {
    getClima
}