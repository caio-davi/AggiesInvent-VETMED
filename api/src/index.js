require("dotenv").config({ path: "../.env" });

const express = require("express");

const pet = require("./routes/Pet");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const port = 3000;

console.log(process.env);

app.get("/", (req, res) => res.send("Express up!"));

app.use("/pet", pet);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
