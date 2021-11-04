const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("./public"))

app.get("/api/:name", (req, res) => {
  res.sendFile(__dirname + "/api/data.json");
  
});

app.get("/api", (req, res) => {
    res.sendFile(__dirname + "/api/directory.json");
    
  });
  
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/client/public/index.html");
  });


app.listen(port, () => {
    console.log(`Server on listening port ${port}...`);
  });