import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Stats.css";

const BASE_URL = "https://finnhub.io/api/v1/quote";
const API_KEY = "bunv1qv48v6vd0a6tq8g";

function Stats() {
  const [stockData, setStockData] = useState([]);

  const getStockData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${API_KEY}`)
      .catch((error) => {
        alert("Error", error.message);
      });
  };

  console.log(getStockData);
  useEffect(() => {}, []);

  return (
    <div className="stats">
      <div className="stats-container">
        <div className="stats-header">
          <p>stocks</p>
        </div>
        <div className="stats-content">
          <div className="stats-rows">{/* for adding stocks */}</div>
        </div>
        <div className="stats-header">
          <p>Lists</p>
        </div>
        <div className="stats-content">
          <div className="stats-rows">{/* stock to buy */}</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
