const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const cors = require("cors");
const pg = require("pg-promise")();
require("dotenv").config();
const db = pg(process.env.CONNECTION_STRING);

app.use(cors());
app.use(express.json());

// Get all events
app.get("/", async (req, res) => {
  try {
    const allEvents = await db.query("SELECT * FROM events");
    console.log(allEvents);
    res.json(allEvents);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
