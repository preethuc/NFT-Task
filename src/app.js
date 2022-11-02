import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import collectionRoute from "./routes/collectionRoute";
import nftRoute from "./routes/nftRoute";
import userRoute from "./routes/userRoute";

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("middleware working");
  next();
});

app.use("/api/collection/", collectionRoute);
app.use("/api/nft/", nftRoute);
app.use("/api/user/", userRoute);

module.exports = app;
