
//    I tried to connect mySQL database here but I did it after I styled my whole page so I commented it all outerHeight.
const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecom",
});

app.listen(3000, () => {
  console.log("Yay, your server is running");
});

