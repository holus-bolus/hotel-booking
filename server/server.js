const express = require("express");
const app = express();
const mongoose = require("mongoose");
const roomsRoute = require("./routes/roomsRoute");
const bookingsRoute = require("./routes/bookingsRoute");

const PORT = process.env.PORT || 5000;
const dbConfig = require("./db");
app.use(express.json());

app.use("/api/rooms", roomsRoute);
app.use("/api/bookings", bookingsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
