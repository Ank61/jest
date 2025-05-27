const app = require("./src/app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/test-app")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => console.log("Server started on port 3000"));
  });
