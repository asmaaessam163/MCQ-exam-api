//@ts-ignore
const express = require("express");
//@ts-ignore
const mongoose = require("mongoose");
const routes = require("./routers");
var cors = require("cors");

const port = process.env.PORT || "8000";
const username = "asmaa_essam";
const password = "Asmaa312411";
const cluster = "cluster0";
const dbname = "default";

const uri = `mongodb+srv://${username}:${password}@${cluster}.tqhsf.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// Connect to MongoDB database
mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
  const app = express();
  app.use(cors());
  app.use("/", routes);

  app.listen(port, () => {
    console.log("Server has started!");
  });
});
