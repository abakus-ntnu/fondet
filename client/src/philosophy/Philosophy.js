import React, { Component } from "react";


class Philosophy extends Component {
  render() {
    return <div className="philosophy">
        <h2>Slik er fondet investert</h2>
        <p>
           Fondet består i dag av en fondsportefølje i Nordnet og en høyrentekonto i DNB. Frem til sommeren 2020 blir pengene på kontoen investert gradvis – litt hver måned – i åtte ulike fond, spredd over hele verden. 
            For å bestemme hvor mye som blir investert hver måned, tas value averaging i bruk. 
            Value averaging vil si at man fordeler ut risikoen ved å investere en månedlig sum som blir beregnet ut fra et avkastningsmål på fem prosent. Ligger vi foran målet blir en mindre sum investert, og ligger vi bak blir en større sum investert. 
            Dette reduserer risikoen for at vi taper penger ved å investere i en 'topp', men det reduserer også sannsynligheten for at vi tjener penger på å investere i en 'bunn'. 
            Denne metoden blir hovedsakelig brukt fordi vi i Fondstyret ikke tror vi kan slå markedet over tid, og dermed foretrekker forutsigbarhet. 
        </p>
        </div>;
  }
}

export default Philosophy;