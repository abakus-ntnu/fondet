import React from 'react';

import {
  Apply,
  Philosophy,
  History,
  Header,
  Footer,
} from '../components';

function Index() {
  return (
    <>
      <Header />
      <div className="container">
        <Philosophy />
        <Apply />
        <History />
        <Footer />
      </div>
    </>
  );
}

export default Index;
