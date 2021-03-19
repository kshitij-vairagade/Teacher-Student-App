import React from "react";

const Weather = props => (
  <div className="info1">
    { props.city && 
      <div>
        <p>
          Location : {props.city}, {props.country}
        </p>
        <p>Description : {props.description}</p>
        <p>Temperature : {props.temp}°С</p>
        <p>Humidity : {props.humidity} %</p>
        <p>Windspeed : {props.windspeed} m/s</p>
      </div>
    }
    <p className="error">{props.error}</p>
  </div>
);

export default Weather;
