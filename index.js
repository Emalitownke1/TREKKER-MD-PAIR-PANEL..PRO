// index.js
const { execSync } = require("child_process");
const path = require("path");

// Install dependencies first
console.log("Installing dependencies...");
try {
  execSync("npm install", { stdio: "inherit" });
  console.log("Dependencies installed successfully!");
} catch (error) {
  console.error("Failed to install dependencies:", error.message);
  process.exit(1);
}

// Now require express after installation
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend running at http://0.0.0.0:${PORT}`);
});
