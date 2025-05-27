const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.error("Mongo connection error:", err));
