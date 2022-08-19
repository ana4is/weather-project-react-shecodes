import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "2f9f2231f1186119c9fd6df5c383a288";
  let unit = "metric";
  let longitude = "props.coordinates.lon";
  let latitude = "props.coordinates.lat";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Sat</div>
          <WeatherIcon code="01d" size={32} />
          <div className="ForecastTemperatures">
            <span className="ForecastTemp-max">20°</span>
            <span className="ForecastTemp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
