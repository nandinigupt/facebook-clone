const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// 👇 MUST INCLUDE src
const connectDB = require("./src/config/db");

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

// 👇 MUST INCLUDE src
app.use("/api/auth", require("./src/routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("Auth API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
