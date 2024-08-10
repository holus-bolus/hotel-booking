const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

const roomsRoute = require("./routes/roomsRoute");
const dbConfig = require("./db");
app.use("/api/rooms", roomsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
