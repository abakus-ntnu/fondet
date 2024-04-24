import React from 'react';

function Apply() {
  return (
    <div className="section" style={{ textAlign: 'center' }}>
      <h2> Hvordan søke? </h2>
      <p>
        For å kunne få støtte fra fondet, må man sende en søknad til
        Fondsstyret. Medlemmene av Fondsstyret avgjør så om søknaden kan
        godkjennes. Bruk søknadsmalen og send den til
        <a href="mailto:fondsstyret@abakus.no">
          <span style={{ color: '#c0392b' }}> fondsstyret@abakus.no</span>
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1ZyQRF0qssg2RBYV608A6kvzEqjnbuvl9zggH2Vwy-Sw/edit?usp=sharing"
        >
          Her finner du vår
          <span style={{ color: '#c0392b' }}> Søknadsmal</span>
        </a>
      </p>
    </div>
  );
}

export default Apply;
