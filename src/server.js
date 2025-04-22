const express       = require("express");
const bodyParser    = require("body-parser");
const cors          = require("cors");
const helmet        = require("helmet");
const morgan        = require("morgan");
const authRoutes    = require("./routes/authRoutes")
const productRoutes = require("./routes/productRoutes");
const app           = express();

require("dotenv").config({ path: "./config/.env" });
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//Routes
app.get("/", (req,res) => {
    res.send("Welcome to the API");
})
app.use("/auth", authRoutes);
app.use("/products", productRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});