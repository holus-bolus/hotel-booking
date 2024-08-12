const express = require("express");
const router = express.Router();
const room = require("../models/room");

router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await room.find({});
    return res.json({ rooms });
  } catch (err) {
    return res.status(400).json({ error: "Something went wrong" });
  }
});

router.get("/getroombyid/:id", async (req, res) => {
  try {
    const rooms = await room.find({});
    const filteredRoom = rooms.find((r) => r._id.toString() === req.params.id);

    if (!filteredRoom) {
      return res.status(404).json({ error: "Room not found" });
    }

    return res.json({ room: filteredRoom });
  } catch (err) {
    console.error("Error fetching room by ID:", err.message);
    return res.status(400).json({ error: "Something went wrong" });
  }
});

module.exports = router;
