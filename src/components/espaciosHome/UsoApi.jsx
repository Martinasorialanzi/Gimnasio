import React from "react";
import WeatherApp from "../weatherApi/WeatherApp";

import "../espaciosHome/usoApi.css";



const usoApi = () => {
  return (
    <>
      <div className="climaApi" id="clima">
        <div className="leftR">
          
            <h4>Cómo estará el clima para el entrenamiento de hoy?</h4>
        </div>
        <div className="rightR">
            <div className="laApi">
              <WeatherApp/>
            </div>
        </div>
      </div>
    </>
  );
};

export default usoApi;