require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./mongodb/connect");
const apiRouter = require("./routes/apiRoutes");
const postRouter = require("./routes/postRoutes");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.get("/", async (req, res) => {
  res.send("Hello From Friday");
});

app.use("/api/apiRoutes", apiRouter);
app.use("/api/post", postRouter);
connectDB(process.env.MONGO_URL);

app.listen(process.env.PORT, () => {
  console.log("Server has Been Started on Port 8090");
});
