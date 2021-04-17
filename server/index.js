import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import csgoRoutes from "./routes/csgo.js";
import steamRoutes from "./routes/steam.js";

const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use("/csgo", csgoRoutes);
app.use("/steam", steamRoutes);

app.use(express.static("public"));

const CONNECTION_URL =
  "mongodb+srv://benHur:1234@cluster0.oyyi2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
app.listen(PORT, () => {
  console.log(`Connection is established and running on port: ${PORT}`);
});
//     )
//   )
//   .catch((err) => console.log(err.message));

// mongoose.set("useFindAndModify", false);
