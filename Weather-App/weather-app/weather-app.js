
import {WeatherAPI} from "./weather-api.js"

class WeatherApp {

  init(){

    const searchTextfieldElement = document.querySelector(".search-box")

    searchTextfieldElement.addEventListener(
      "keypress", this.handleAPIInvocation)

    // Add keypress listener
    // event-handler implementation
      // Enter key
        // event.key == 'Enter'
  }

  async handleAPIInvocation(event){

    if (event.key == "Enter"){

      console.log("Enter key pressed")

      // Text-field
      const eventTarget = event.target;

      const locationSuppliedByUser = eventTarget.value;

      const weatherAPIObj = new WeatherAPI();
      weatherAPIObj.constructURL(locationSuppliedByUser);
    
      const responseJSON = await weatherAPIObj.invokeURL();
      console.log(responseJSON)
    
      // Location
      const locationElement = document.querySelector(".location .city")
      locationElement.innerText 
        = `${responseJSON.name}, ${responseJSON.sys.country}`
      
      // Date

      const today = new Date();
      const todayAsString = today.toLocaleDateString("en-US", {
        year : 'numeric',
        month: 'long',
        weekday: 'long',
        day : 'numeric'
      })
      const dateElement = document.querySelector(".location .date")
      dateElement.innerText = `${todayAsString}`

      // Temperature
      const temperatureElement = document.querySelector(".current .temp")
      temperatureElement.innerText = `${responseJSON.main.temp} °C`

      // Temperature Type
      const temperatureTypeElement = document.querySelector(".current .weather")
      temperatureTypeElement.innerText = `${responseJSON.weather[0].main}`

      // Min / Max
      const minMaxTempElement = document.querySelector(".current .hi-low")
      minMaxTempElement.innerText = `${responseJSON.main.temp_min}°C / ${responseJSON.main.temp_max} °C`
    }
  }
}

export {WeatherApp}