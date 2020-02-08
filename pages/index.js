import React, { useEffect, useState } from 'react';
import {
  Development,
  Positions,
  Philosophy,
  History,
  Header,
} from '../components';

import './index.css';

const Index = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    async function getPositions() {
      const res = await fetch('/api/positions');
      const data = await res.json();
      setPositions(data);
    }
    getPositions();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Development />
        <Philosophy />
        <Positions positions={positions} />
        <History />
      </div>
    </>
  );
};

export default Index;
