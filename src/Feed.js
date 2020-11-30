import React from "react";
import "./Feed.css";
import LineGraph from "./LineGraph";

function Feed() {
  return (
    <div className="feed">
      <div className="feed-content">
        <div className="feed-chart">
          <div className="feed-price">
            <h1>$140,656</h1>
            <p>$142.90 (-0,12) Today</p>
          </div>
          <div className="feed-graph">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
