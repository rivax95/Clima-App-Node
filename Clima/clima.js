const axios = require('axios');


let getclima = async(lat, ln) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${ln}&appid=6b2ba221f771fac61f70369f459a5910&units=metric`);
    return resp.data.main.temp;


};
module.exports = {
    getclima
}