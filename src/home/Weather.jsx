import React from "react";
import useFetchData from "../hooks/useFetchData";
import styles from "./weather.module.css";
import { convertFahrenheitToCelsius, getCurrentDateTime } from "../helper";
import clearDay from "../assets/clear-day.svg";
import clearNight from "../assets/clear-night.svg";
import cloudy from "../assets/cloudy.svg";
import fog from "../assets/fog.svg";
import partlyCloudyDay from "../assets/partly-cloudy-day.svg";
import partlyCloudyNight from "../assets/partly-cloudy-night.svg";
import rain from "../assets/rain.svg";
import snow from "../assets/snow.svg";
import wind from "../assets/wind.svg";
import temp from "../assets/temp.svg";
import blow from "../assets/blow.svg";
import humidity from "../assets/humidity.svg";

const Weather = () => {
  const data = useFetchData(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/meerut?unitGroup=us&key=BULR4GUF5EGU6C9FDNG7UDWFA"
  );

  const displayData = data.data?.currentConditions;

  if (!displayData) {
    return null;
  }

  const paths = {
    "clear-day": clearDay,
    "clear-night": clearNight,
    rain: rain,
    "partly-cloudy-day": partlyCloudyDay,
    "partly-cloudy-night": partlyCloudyNight,
    cloudy: cloudy,
    fog: fog,
    snow: snow,
    wind: wind,
  };

  return (
    <div className={styles.box}>
      <div className={styles.date}>
        <h2>{getCurrentDateTime().date}</h2>
        <h2>{getCurrentDateTime().time}</h2>
      </div>
      <div className={styles.weather}>
        <div className={styles.sky}>
          <img src={paths[displayData.icon]} alt="" />
          <h2>{displayData.conditions}</h2>
        </div>
        <span></span>
        <div className={styles.temp}>
          <h1>
            {convertFahrenheitToCelsius(displayData.temp).toFixed(1) + " °C"}
          </h1>
          <div className={styles.pressure}>
            <img src={temp} alt="" />
            <p>
              {displayData.pressure + " mbar"} <br /> pressure
            </p>
          </div>
        </div>
        <span></span>
        <div className={styles.wind}>
          <div>
            <img src={blow} alt="" />
            <p>
              {displayData.windspeed + " km/h"} <br /> wind
            </p>
          </div>
          <div>
            <img src={humidity} alt="" />
            <p>
              {displayData.humidity + " %"} <br /> humidity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
