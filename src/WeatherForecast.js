import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
