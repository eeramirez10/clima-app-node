const axios = require('axios');

const getClima = async ( lat, lng ) => {

const appid ="7ba0714c6d4f139f953a43287343603b";

  const resp = await  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${appid}&units=metric`) 
  
  return resp.data.main.temp
}

module.exports = {
    getClima
}