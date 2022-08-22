import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
        <div className="col-7">
          <ul>
            <li>
              <h1>{props.data.city}</h1>
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>"{props.data.description}"</li>
            <li>
              <WeatherTemperature celsius={props.data.temperature} />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <strong>Today´s Details</strong>
            </li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Humidity: {props.data.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
