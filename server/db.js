const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://ustinovoleksij:ZR1wntUlfpGaeuTA@cluster0.vxudy.mongodb.net/mern-rooms?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });

module.exports = mongoose;
