import React, { useState } from "react";
import "./Weather.css";
import "./FormattedDate";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ search: false });

  function showWeatherDescritption(response) {
    setWeather({
      search: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      precipitations: response.data.main.pressure,
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
                onChange={showCity}
              />
            </span>
            <span className="col-3">
              <input type="submit" value="search" />
            </span>
          </div>
        </form>
        <div className="row">
          <div className="col-4">
            <WeatherIcon code={weather.icon} />
          </div>
          <div className="col-7">
            <h1>{weather.city}</h1>
          </div>
          <FormattedDate date={weather.date} />
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>{weather.description}</li>
              <li>
                Temperature:{" "}
                <WeatherTemperature celsius={weather.temperature} /> C
              </li>
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
  } else {
    searchEngine();
    return "Loading...";
  }
}
