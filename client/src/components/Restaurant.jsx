import "../App.css";
import React, { useState, useEffect } from "react";

function Restaurant(props) {
  let [restaurantInfo, setRestaurantInfo] = useState({});
  let location;
  let lat = 0;
  let lon = 0;

  // The purpose of this component is to render the page for each restaurant
  // The props needed is the id = number, of the restaurant sent through
  // this pulls the json of the id sent via props and renders the page with that info

  useEffect(() => {
    fetch("http://localhost:5000/api/" + props.id)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setRestaurantInfo(json);
        console.log(restaurantInfo);
      });
  }, []);

  let name = restaurantInfo["name"];
  let address = restaurantInfo["address"];

  lat = restaurantInfo["lat"];
  lon = restaurantInfo["lon"];
  location = [lat, lon];
  location = Object.values(location); // This was an attempt to correct the [NaN,NaN] error, as was the if statement below
  console.log(location);

  return (
    <>
      {/* default text to test if the data is coming in */}
      <h1>you have reached restaurant.js</h1>
      <h1>here is where the Restaurant info would be displayed</h1>
      <p>{name}</p>
      <p>{address}</p>
      {/* <p>{location}</p> */}
      {/* this area was intended to be where the reviews for the restaurant would be */}
      <p>{}</p>
      <p>{}</p>
      <p>{}</p>
      <p>{}</p>
      <p>{}</p>
      {/*  */}
      {/* <Map center={location} zoom={15} marker={location} /> */}
    </>
  );
}
export default Restaurant;
