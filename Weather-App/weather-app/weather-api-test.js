
import { WeatherAPI } from "./weather-api.js";

function testConstructURL(){

  const weatherAPIObj = new WeatherAPI();

  weatherAPIObj.constructURL("France");

}

async function testInvokeURL(){

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("Japan");

  const responseJSON = await weatherAPIObj.invokeURL();
  console.log(responseJSON)

}

// testConstructURL();

testInvokeURL();