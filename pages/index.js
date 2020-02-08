import React, { useEffect, useState } from "react";

import HeaderWrap from "../components/HeaderWrap.js";
import Positions from "../components/Positions.js";
import Development from "../components/Development.js";
import Numbers from "../components/Numbers.js";
import Philosophy from "../components/Philosophy.js";
import History from "../components/History.js";

import "./index.css";

const Index = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    async function getPositions() {
      const res = await fetch("/api/positions");
      const data = await res.json();
      setPositions(data);
    }
    getPositions();
  }, []);

  return (
    <div className="app">
      <HeaderWrap />
      <Development />
      <Positions positions={positions} />
      <Philosophy />
    </div>
  );
};

export default Index;
