import React from "react";
import axios from "axios";

export default function Weather() {
  function searchEngine() {
    let apiKey = "2f9f2231f1186119c9fd6df5c383a288";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeatherDescritption);
  }
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Type a city..." />
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
}
