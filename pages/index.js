import React, { Component } from "react";

import HeaderWrap from "../components/header/HeaderWrap.js";
import Positions from "../components/positions/Positions.js";
//import Development from "../components/development/Development.js";
import Numbers from "../components/numbers/Numbers.js";
import Philosophy from "../components/philosophy/Philosophy.js";
import History from "../components/history/History.js";

class App extends Component {
  render() {
    return (
      <div className="app">
        Test
        <HeaderWrap />
        {/*
        <Development />
        <Positions />
        <Philosophy />
        <History />
        */}
        <style jsx>{`
          html{
            background: linear-gradient(0deg,#f4f4f4,#eae9e8);
          }

          .development {
            border-style: solid;
            border-width: thin;
            border-color: beige;
            width:100%;
            text-align:center;
            align-items: center;
            justify-content: center;
          }
          .iframeDev{
              width: 80%;
          }

          .positions {
            margin-top: 30px;
            border-style: solid;
            border-color: beige;
            border-width: 1px;
            overflow: hidden;
            height: auto;
            display: flex;
            width: 100%;
            justify-content: center;
          }

          .markets {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
          }

          .markets h2 {
            font-size: 35px;
            color: #394b59;
            font-family: Raleway,Helvetica Neue,Arial,sans-serif;
            text-align: center;
          }

          h2 {
            font-size: 35px;
            color: #394b59;
            font-family: Raleway,Helvetica Neue,Arial,sans-serif;
            text-align: center;
          }

          p {
            color: #394b59;
            font-size: 20px;
            font-family: Raleway,Helvetica Neue,Arial,sans-serif;
            line-height: 1.4em;
          }


          .history {
            width: 80%;
          }

          .philosophy {
            width: 80%;
          }

          .namesList p,a,td,th{
            height: 100%;
            font-family: Raleway,Helvetica Neue,Arial,sans-serif;
            text-decoration: none;
            color:#394b59;
          }

          .redText{
            color:rgb(255,25,0);
          }
          .greenText{
            color:#00d200;
          }

          table{
            border-spacing: 0 15px;
            margin: 0 auto;
              border-collapse: separate;
          }
          th{
            background-color:#c0392b;
            color: white;
          }
          th,td{
            text-align: center;
            padding: 5px;
          }
          tr{
            width: 60%;
          }
          a.name {
            margin-top: 10px;
            margin-bottom: 10px;
          }

          .pieChart {
            height: auto;
          }

          .headerWrap {
            background: #758586;
            width:100%;
            height: 100%;
            padding: 0;
            margin: auto;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            justify-content: space-between;
          }
          .stretch {
            width: 100%;
            display: inline-block;
            font-size: 0;
            line-height: 0
          }
          .header a{
            display: flex;
            align-items: center;
            font-size: 40px;
            color: white;
            height: 100px;
            width: 100%;
            font-family: Raleway,Helvetica Neue,Arial,sans-serif;
          }
          .header.left{
            padding-left: 50px;
            justify-content: left;
          }
          .header.center{
            justify-content: center;
          }
          .header.right{
            text-align: end;
            justify-content: right;
            margin-left:auto;
          }
          a.header.right{
            text-align:right;
          }

          iframe{
            border:none;
          }

          .number {
            background: grey;
            color: white;
            border-radius: 5px;
            width: 50px;
            height: 75px;
            text-align: center;
            font-size: 75px;
            margin: 5px;
            line-height: 75px;
            font-family: "VT323", monospace;
            float: left;
          }

          .numbers {
            display: flex;
            justify-content: center;
            align-items: top;
            padding: 84px;
            width: 100%;
            margin-left: 5px;
            margin-top: 5px;
            float: left;
            border-style: solid;
            border-color: beige;
            border-width: 1px;
            height: 182px;
          }

          .app {
            overflow: hidden;
            width: 80vw;
            background-color: white;
            margin:auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 60px;
            margin-top:20px;
          }

          .name {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          /*Ekstra for tilpassning til mobil*/
          @media only screen and (max-width: 1000px) {
              .app{
                  width: 100vw;
              }
              .iframeDev{
                  width:100%;
              }
          }%          
        `}</style>
      </div>
    );
  }
}

export default App;
