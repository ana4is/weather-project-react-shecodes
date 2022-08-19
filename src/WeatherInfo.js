import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-7">
          <h1>{props.data.city}</h1>
        </div>
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>{props.data.description}</li>
            <li>
              Temperature:{" "}
              <WeatherTemperature celsius={props.data.temperature} /> C
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Today´s Details</li>
            <li>Precipitations: {props.data.precipitations}</li>
            <li>Wind: {props.data.wind}</li>
            <li>Humidity: {props.data.humidity}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
