const express = require("express");
const Income = require("../models/Income");
const auth = require("../middleware/auth");
const router = express.Router();

// Add Income
router.post("/", auth, async (req, res) => {
  const { amount, source, description } = req.body;
  try {
    const newIncome = new Income({ user: req.user, amount, source, description });
    await newIncome.save();
    res.json(newIncome);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Incomes
router.get("/", auth, async (req, res) => {
  try {
    const incomes = await Income.find({ user: req.user }).sort({ date: -1 });
    res.json(incomes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
