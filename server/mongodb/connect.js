const mongoose = require("mongoose");
const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.log("An Error Occured", err);
    });
};

module.exports = connectDB;
