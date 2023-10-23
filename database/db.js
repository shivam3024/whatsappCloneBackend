const mongoose = require("mongoose");

const Connection = async (DBURL) => {
  const URL = DBURL;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database error", error);
  }
};
module.exports = Connection;
