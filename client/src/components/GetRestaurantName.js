import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";

export default function GetRestaurantName() {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setRestaurant(json);
        // console.log(restaurant);
      });
  }, [setRestaurant]);

  let totalnum = restaurant.length - 1;
  // console.log(totalnum)

  return (
    <>
      <h1>GetRestaurantName</h1>
      <p>{JSON.stringify(restaurant)}</p>
      {/* <Restaurant id={totalnum} /> */}
    </>
  );
}
