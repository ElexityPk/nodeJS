const express = require("express");
const userRouter = require("./routes/user");
const app = express();
const { connectDatabase } = require("./db_connection");
const { logReqRes } = require("./middlewears");
const dbUrl = "mongodb://127.0.0.1:27017/app";
connectDatabase(dbUrl);
const port = 8000;
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Server listning on Port: ${port}`);
});
