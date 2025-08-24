
const express = require("express");
const Expense = require("../models/Expense");
const auth = require("../middleware/auth");
const router = express.Router();

// Add Expense
router.post("/", auth, async (req, res) => {
  const { amount, category, description } = req.body;
  try {
    const newExpense = new Expense({ user: req.user, amount, category, description });
    await newExpense.save();
    res.json(newExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Expenses
router.get("/", auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user }).sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
