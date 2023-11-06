const mongoose = require("mongoose");

async function dataBaseConnection(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log(`DataBase Connected`);
    })
    .catch((err) => {
      console.log(`ERROR : ${err}`);
    });
}
module.exports = { dataBaseConnection };
