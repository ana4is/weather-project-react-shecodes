import React, { useState } from "react";
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
  if (search) {
    return (
      <div className="Weather">
        <form onSubmit={searchEngine}>
          <div className="row">
            <span className="col-9">
          <input type="search" placeholder="Type a city..." />
          </span>
          <input type="submit" value="search" />
        </form>
        <h1>SEVILLA</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">Temperature: 20 C</div>
            <div className="col-6">
              <ul>
                <li>Precipitations :</li>
                <li>Wind:</li>
                <li>Humidity</li>
              </ul>
            </div>
          </div>
        </div>
        <p>new react</p>
        <button type="button" class="btn btn-info">
          Info
        </button>
      </div>
    );
  } else {
    searchEngine();
    return "Loading...";
  }
}
