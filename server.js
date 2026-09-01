const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const productRoutes = require("./src/routes/productRoutes");

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Server running, go check");
});

app.use("/api/products", productRoutes);

// Database
connectDB();

// Server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});