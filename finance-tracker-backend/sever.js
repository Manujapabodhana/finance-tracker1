const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON body

// Connect to DB
connectDB();

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/incomes", require("./routes/income"));
app.use("/api/expenses", require("./routes/expenses"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
