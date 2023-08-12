const mongoose = require("mongoose");

const DB_URL ="mongodb+srv://rti:rti@cluster0.nbelp.mongodb.net/?retryWrites=true&w=majority";

function db_connect() {
  mongoose.connect(DB_URL).then(() => {
    console.log("Connected to database");
  });
}

module.exports = db_connect;


// "mongodb+srv://rti:rti@cluster0.kfdfnlr.mongodb.net/?retryWrites=true&w=majority"