import React from "react";

export default function Weather() {
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
      <p>end</p>
    </div>
  );
}
