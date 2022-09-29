const axios = require("axios");
const express = require("express");
const cors = require('cors')
const PORT = 8080;

const app = express();
app.use(cors())
// METHOD:GET

app.get("/", (req, res) => {
  axios
    .get(`https://fakestoreapi.com/products`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((e) => {
      res.send(e);
    });

  // res.send("Hello There");
});


// METHOD:GET by ID

app.get("/:id", (req, res) => {
  let { id } = req.params;
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((e) => {
      res.send(e);
    });

  // res.send("Hello There");
});


// Listening on PORT 8080

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
