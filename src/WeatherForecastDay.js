import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function tempMax() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function tempMin() {
    let temperature = Math.reound(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="ForecastTemperatures">
        <span className="ForecastTemp-max">{tempMax()}</span>
        <span className="ForecastTemp-min">{tempMin()}</span>
      </div>
    </div>
  );
}
