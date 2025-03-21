import React from "react";
import "../Style/WindCompass.css";
export default function WindCompass({ windSpeed, windDeg }) {
  return (
    <div className="wind-wrapper">
      <div className="wind-header">
        <span className="wind-title">💨 Wind:</span>
        <span className="wind-speed">{Math.round(windSpeed)} m/s</span>
      </div>
      <div className="compass-container">
        <div className="compass">
          <div
            className="needle"
            style={{ transform: `rotate(${windDeg}deg)` }}
          ></div>
          <div className="center-dot"></div>
          <div className="dir n">N</div>
          <div className="dir e">E</div>
          <div className="dir s">S</div>
          <div className="dir w">W</div>
        </div>
      </div>
    </div>
  );
}