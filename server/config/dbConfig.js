const mongoose = require("mongoose");

const dbConnection = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/chat-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));
};

module.exports = dbConnection;
