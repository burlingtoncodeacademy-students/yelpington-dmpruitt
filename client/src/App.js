import "./App.css";
import Map from "./components/Map";
import Restaurant from "./components/Restaurant";
import GetRestaurantName from "./components/GetRestaurantName";
import React, { useState, useEffect } from "react";

// Initially, this page will display a map centered on Montpelier
// with pins for each of the restaurants 
// and a list of all of those.
// each pin and item in the list is a link to a dedicated page for that restaurant
// To visit a single restaurant, user would visit /restaurant/restaurant-ID(name)
// set a variable to the ID of the restaurant,
// On this individual restaurant page, I intend to put a map with a pin on the
// location zoomed to a level appropriate for the location and centered on that location


// This project does not work. I spent a very long time to get the json back in a usable form
// I had major issues getting the Lat and Lon to be in a form that I could use for the Map
// I am intending on starting over and re-submitting this project.



function App() {
  // mark is just a test marker to get it working
  // NEED TO : get all markers for the restaurants and add to map
  let center = [44.26009156484462, -72.57542535414994];

  
  return (
    <>
      {/* <div> */}
        {/* <Link to="/restaurant" >Restaurant</Link> */}
        {/* <GetRestaurantName /> */}
        {/* <Restaurant id="0" /> */}

        {/* <Restaurant id="the-mad-taco" /> */}

      {/* </div> */}

      <div>
        <h1>Yelpington</h1>
        <a href="http://localhost:5000/api">API link *testing*</a>
        <Map center={center} zoom={15} marker={center} /> 
      </div> 
    </>
  );
}

export default App;
