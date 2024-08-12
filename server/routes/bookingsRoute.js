const express = require("express");
const router = express.Router();
const bookingModel = require("../models/booking");
const roomModel = require("../models/room");

router.post("/bookroom", async (req, res) => {
  const {
    roomId,
    userId,
    fromDate,
    toDate,
    totalAmount,
    totalDays,
    transactionId,
  } = req.body;

  try {
    const room = await roomModel.findById(roomId);

    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    const newBooking = new bookingModel({
      room: roomId,
      user: userId,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      transactionId,
    });

    await newBooking.save();

    res
      .status(201)
      .json({ message: "Room booked successfully", booking: newBooking });
  } catch (err) {
    console.error("Error booking room:", err.message);
    res
      .status(500)
      .json({ error: "Something went wrong during the booking process" });
  }
});

module.exports = router;
