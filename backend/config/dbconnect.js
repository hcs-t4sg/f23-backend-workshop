require("dotenv").config();
const mongoose = require("mongoose").set("strictQuery", false);
const url = process.env.MONGO_URI;

const dbConnection = () => {
  try {
    const resp = mongoose.connect(url, {
      useUnifiedTopology: true,
    });

    mongoose.set("useNewUrlParser", true);
    mongoose.set("useUnifiedTopology", true);


    console.log("mongoose connected to database successfully!");

    return resp;
  } catch (error) {
    return new Error({ dbError: error.message });
  }
};

module.exports = { dbConnection };
