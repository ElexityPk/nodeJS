const mongoose = require("mongoose");
async function connectDatabase(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log("Mongo Error :", err);
    });
}
module.exports = { connectDatabase };
