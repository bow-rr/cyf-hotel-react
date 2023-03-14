import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import FooterInfo from "./Footer";


import Bookings from "./Bookings";
import "./App.css";

const App = () => {
   
   const cardsInfo = [
     {
       image: "../images/glasgow.jpg",
       city: "Glasgow",
       description: "Glasgow is a port city on the River Clyde in Scotland's western Lowland. It's famed for its Victorian and art nouveau architecture...",
       buttonLink: "https://peoplemakeglasgow.com",
      },
      {
        image:
          "https://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg",
        city: "London",
        description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching...",
        buttonLink: "https://visitlondon.com",
      },
     {
       image:
         "../images/manchester.jpg",
       city: "Manchester",
       description: "Manchester is a major city in the northwest of England with a rich industrial heritage...",
       buttonLink: "https://visitmanchester.com",
     },
   ];

const footerMes = ["ADD.: 100 Upper Street, London, EC1 2CN", "E-MAIL:info@towerhotel.com", "TEL:010 23456789"]


  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cards = {cardsInfo}/>
      <Bookings />
      <FooterInfo footerMes = {footerMes}/>
    </div>
  );
};

export default App;
