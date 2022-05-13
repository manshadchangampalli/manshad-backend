const mongoose = require("mongoose");

const con = mongoose
  .connect(
    "mongodb+srv://manshad:kq2wBbptBmvAJDWs@cluster0.pj5m8.mongodb.net/manshadDB?retryWrites=true&w=majority",
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
