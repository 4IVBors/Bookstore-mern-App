const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const App = express();
require("dotenv").config();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

App.use(express.json());
App.use(cors());
App.use("/api/users", userRoutes);
App.use("/api/auth", authRoutes);
App.use("/books", router); 

mongoose
  .connect(
    "mongodb+srv://hizarsajjad632:25HvZHMsrBPPsDrW@cluster0.wu0gahs.mongodb.net/"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    App.listen(5000);
  })
  .catch((err) => console.log(err));



// routes


const port = process.env.PORT || 8080;
App.listen(port, console.log(`Listening on port ${port}...`));


