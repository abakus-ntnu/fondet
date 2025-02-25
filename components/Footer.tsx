import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        fontSize: '15px',
        marginTop: '50px',
      }}
    >
      Med <span role="img">☕</span> av Webkom | for <strong>Abakus</strong>
    </div>
  );
}

export default Footer;
