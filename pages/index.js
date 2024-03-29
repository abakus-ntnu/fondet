import React, { useEffect, useState } from 'react';
import {
  Development,
  Apply,
  Positions,
  Philosophy,
  History,
  Header,
  Footer,
} from '../components';

function Index() {
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
        <Apply />
        <Positions positions={positions} />
        <History />
        <Footer />
      </div>
    </>
  );
}

export default Index;
