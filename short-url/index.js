const express = require("express");
const { dataBaseConnection } = require("./db_connection");
const urlROute = require("./routes/short_url");
const URL = require("./models/shortURLModel");
const PORT = 8001;
const app = express();
app.use(express.json());
app.use("/url", urlROute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

const dbUrl = "mongodb://127.0.0.1:27017/short-url";
dataBaseConnection(dbUrl);

app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
