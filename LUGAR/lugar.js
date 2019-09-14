const axios = require('axios');

const getlugarLatLng = async(direccion) => {
        const instace = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
            headers: { 'x-rapidapi-key': '020a3c3fe3msh7bd2e7cac403219p166368jsn19f23257e757' }

        })

        /*   instace.get().then(resp => {
              console.log(resp.data.Results[0].type);
          }).catch(err => console.log(err)); */

        const resp = await instace.get();

        if (resp.data.Results.length == 0) {
            throw new Error(console.log('No ahi respuesta para esa ciudad'));
            return;
        }
        const data = resp.data.Results[0];

        return {
            direccion: data.name,
            lat: data.lat,
            lon: data.lon

        }
    }
    //console.log(argv);
module.exports = {
    getlugarLatLng
}