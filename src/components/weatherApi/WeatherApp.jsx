import { useState, useEffect } from "react"; 
import WeatherMainInfo from "../weatherApi/WeatherMainInfo";

import styles from "../weatherApi/weatherApp.module.css";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);



  async function loadInfo(city = "tucuman") {
    console.log(
      `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
    );
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      console.log(json);

      setTimeout(() => {
        setWeather({ ...json });
      }, 2000);
    } catch (e) {
      console.error(e);
    }
  }



  return (
    <div className={styles.weatherContainer}>
      
      {<WeatherMainInfo weather={weather} /> }
    </div>
  );
}