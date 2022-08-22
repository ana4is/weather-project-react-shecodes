import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ search: false });

  function showWeatherDescritption(response) {
    setWeather({
      coordinates: response.data.coord,
      search: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function submitForm(event) {
    event.preventDefault();
    searchEngine();
  }

  function showCity(event) {
    setCity(event.target.value);
  }

  function searchEngine() {
    let apiKey = "2f9f2231f1186119c9fd6df5c383a288";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeatherDescritption);
  }
  if (weather.search) {
    return (
      <div className="Weather">
        <form onSubmit={submitForm}>
          <div className="row">
            <span className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                autoFocus="on"
                className="formSearch"
                onChange={showCity}
              />
            </span>
            <span className="col-3">
              <input type="submit" value="search" className="formButton" />
            </span>
          </div>
        </form>
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    searchEngine();
    return "Loading...";
  }
}
