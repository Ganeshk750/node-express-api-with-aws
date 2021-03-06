const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 1.0</p>"
  );
});

app.get("/products", (req, res) => {
  res.send([
    {
      productId: "101",
      price: 100,
      name: "Cap",
    },
    {
      productId: "102",
      price: 150,
      name: "Book",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
