import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";

export default function GetRestaurantName() {
  const [restaurant, setRestaurant] = useState({});

  // this was intended to get the list of restaurants
  // then, output that list as a group of links
  // that go to a page that fills in the information
  // about that restaurant
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setRestaurant(json);
      });
  }, [setRestaurant]);

  let totalnum = restaurant.length - 1; // list of ids for the restaurants

  return (
    <>
      <h1>GetRestaurantName</h1>
      <p>{JSON.stringify(restaurant)}</p>
      {/* <Restaurant id={totalnum} /> */}
    </>
  );
}
