import React from 'react';

const Philosophy = () => (
  <div className="section">
    <h2>Slik er fondet investert</h2>
    <p>
      Fondet består i dag av en fondsportefølje i Nordnet og en høyrentekonto i
      DNB. Frem til sommeren 2020 blir pengene på kontoen investert gradvis –
      litt hver måned – i åtte ulike fond, spredd over hele verden. For å
      bestemme hvor mye som blir investert hver måned, tas value averaging i
      bruk.
    </p>
    <p>
      Value averaging vil si at man fordeler ut risikoen ved å investere en
      månedlig sum som blir beregnet ut fra et avkastningsmål på fem prosent.
      Ligger vi foran målet blir en mindre sum investert, og ligger vi bak blir
      en større sum investert. Dette reduserer risikoen for at vi taper penger
      ved å investere i en 'topp', men det reduserer også sannsynligheten for at
      vi tjener penger på å investere i en 'bunn'. Denne metoden blir
      hovedsakelig brukt fordi vi i Fondstyret ikke tror vi kan slå markedet
      over tid, og dermed foretrekker forutsigbarhet.
    </p>
    <p>
      <a
        href="https://abakus.no/pages/generelt/46-fondstyret"
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#eee',
          padding: '10px',
          borderRadius: '10px',
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Fondet styres av fondstyret</p>
        <img
          alt="fondstyret"
          width="30px"
          src="fond.png"
          style={{ padding: '10px' }}
        />
        <p>
          Les mer på
          <span style={{ color: '#e20d13' }}> abakus.no</span>
        </p>
      </a>
    </p>
  </div>
);

export default Philosophy;
