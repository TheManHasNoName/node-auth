const express = require('express');
const app = express();

const mongoose = require('mongoose');

const dotenv = require('dotenv');

//Import Routes
const authRoute = require("../node-auth/routes/auth");

dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to DB")
})

//MiddleWares
app.use(express.json());


//Route Middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("server running"));