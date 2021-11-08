import "../App.css";
import React, { useState, useEffect } from "react";
import Map from "./Map";

function Restaurant(props) {
  let [restaurantInfo, setRestaurantInfo] = useState({});
  let location
  let lat = 0;
  let lon = 0;

  useEffect(() => {
    fetch("http://localhost:5000/api/" + props.id)
      .then((response) => {
       return  response.json();
      })
      .then((json) => {
        setRestaurantInfo(json);
        console.log(restaurantInfo);
      });
  }, [setRestaurantInfo]);

  // console.log(restaurantInfo);
  let name = restaurantInfo["name"];
  // console.log(restaurantInfo["name"]);
  let address = restaurantInfo["address"];
  // let location = [restaurantInfo["lat"], restaurantInfo["lon"]];

  lat = restaurantInfo["lat"];
  // console.log(restaurantInfo["lat"])
  lon = restaurantInfo["lon"];
  location = [lat, lon];
  location = Object.values(location); // This was an attempt to correct the [NaN,NaN] error, as was the if statement below
  console.log(location)

  // if (location === undefined) {
  //   // do nothing
  // } else if (location === typeof Array) {
  //   // do nothing
  // } else {
  //   // convert to Array
  //   lat = parseFloat(location[0]);
  //   lon = parseFloat(location[1]);
  //   location = [lat, lon];
  //   location = Object.values(location);
  //   console.log(Object.values(location));
  // }
  // let center = location;
  return (
    <>
      <h1>you have reached restaurant.js</h1>
      <p>{name}</p>
      <p>{address}</p>
      {/* <p>{location}</p> */}
      <p>{}</p>
      <p>{}</p>
      <p>{}</p>
      <p>{}</p>
      <p>{}</p>
      {/* <Map center={location} zoom={15} marker={location} /> */}
    </>
  );
}
export default Restaurant;
