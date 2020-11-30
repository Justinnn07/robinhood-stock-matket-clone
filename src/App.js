import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Stats from "./Stats";

function App() {
  return (
    <div className="app">
      <div className="app-header">
        {/* header */}
        <Header />
      </div>
      <div className="app-body">
        {/* Body */}
        <div className="app-container">
          {/* Feed */}
          <Feed />
          {/* Stats */}
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
