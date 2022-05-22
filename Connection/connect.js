const mongoose = require("mongoose");
require('dotenv').config()

const con = mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pj5m8.mongodb.net/manshadDB?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err, "error iss");
  });

module.exports = con;
