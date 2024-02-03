// require("dotenv").config({ path: "./env" });  //improved version for module.js

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB()  //it will return a promise
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONGO DB CONNECT failed`, err);
  });
