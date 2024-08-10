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

module.exports = router;
