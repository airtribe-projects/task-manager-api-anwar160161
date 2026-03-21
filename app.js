const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const authRoutes = require("./src/routes/auth.routes");
const userRoutes = require("./src/routes/user.routes");
const newsRoutes = require("./src/routes/news.routes");

app.use("/users", authRoutes);
app.use("/users", userRoutes);
app.use("/", newsRoutes);

module.exports = app;

const { fetchNews } = require("./src/services/news.service");

setInterval(async () => {
  try {
    console.log("Refreshing news cache...");
    await fetchNews({ categories: ["general"] });
  } catch (err) {
    console.log("Cache refresh failed");
  }
}, 10 * 60 * 1000); // every 10 minutes