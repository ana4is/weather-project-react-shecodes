import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeatherDescritption(response) {
    console.log(response.data);
    setSearch(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      precipitations: response.data.main.pressure,
      description: response.data.weather.description,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
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

  return (
    <div className="Weather">
      <form onSubmit={searchEngine}>
        <div className="row">
          <span className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              autoFocus="on"
              onChange={showCity}
            />
          </span>
          <span className="col-3">
            <input type="submit" value="search" />
          </span>
        </div>
      </form>
      <div className="row">
        <div className="col-4">icon</div>
        <div className="col-7">
          <h1>{weather.city}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>{weather.description}</li>
            <li>Temperature: {weather.temperature} C</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Today´s Details</li>
            <li>Precipitations: {weather.precipitations}</li>
            <li>Wind: {weather.wind}</li>
            <li>Humidity: {weather.humidity}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
