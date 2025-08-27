// index.js
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
