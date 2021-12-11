const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

// This file was renamed to server.js so there would be less confusion as to it's purpose.

app.use(express.static("./public")); // using the statiic directory for the served folders

app.get("/api/:restaurantId", (req, res) => {
  // When the user visits the route /api, this will display a list of all availabnle resaurant IDs in JSON format.
  res.sendFile(__dirname + "/api/" + req.params.restaurantId + ".json");
});
// When the user visits the route /api, this will display a list of all availabnle resaurant IDs in JSON format.
app.get("/api", (req, res) => {
  // When the user visits the route /api, this will display a list of all availabnle resaurant IDs in JSON format.
  res.sendFile(__dirname + "/api/directory.json");
});

// default page served
app.get("/", (req, res) => {  
  res.sendFile(__dirname + "/client/public/index.html");
});

// standard setup for the listening port
app.listen(port, () => {
  console.log(`Server on listening port ${port}...`);
});
