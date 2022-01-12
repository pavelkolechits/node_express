const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const router = require("./router/index");

const app = express();
const PORT = process.env.PORT;



app.use(express.json());
app.use(cookieParser());

const corsOptions ={
  origin: process.env.CLIENT_URL, 
  credentials:true,            
  optionSuccessStatus:200,
}


app.use(cors({
  corsOptions
}));
app.use("/api", router);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, console.log(`Start ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
