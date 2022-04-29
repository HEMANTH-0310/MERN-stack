require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
// const mongoString = process.env.DATABASE_URL;

// `mongoose.connect(mongoString)`
// const database = mongoose.connection;
//DB Connection

mongoose
  .connect(
    `mongodb+srv://hemanth:123ethan@cluster0.xezla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )

  .then(() => {
    console.log("MogoDB CONNECTED");
  });

// database.on("error", (error) => {
//   console.log(error);
// });

// database.once("connected", () => {
//   console.log("Database Connected");
// });
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

const routes = require("./routes/routes");

app.use("/api", routes);

