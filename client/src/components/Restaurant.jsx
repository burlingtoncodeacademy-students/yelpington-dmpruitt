import "../App.css";
import React, { useState, useEffect } from "react";

function Restaurant(props) {
  let [restaurantInfo, setRestaurantInfo] = useState({});
  let location;
  let lat = 0;
  let lon = 0;

  useEffect(() => {
    fetch("http://localhost:5000/api/" + props.id)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setRestaurantInfo(json);
        console.log(restaurantInfo);
      });
  }, [setRestaurantInfo]);

  let name = restaurantInfo["name"];
  let address = restaurantInfo["address"];

  lat = restaurantInfo["lat"];
  lon = restaurantInfo["lon"];
  location = [lat, lon];
  location = Object.values(location); // This was an attempt to correct the [NaN,NaN] error, as was the if statement below
  console.log(location);

  return (
    <>
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
