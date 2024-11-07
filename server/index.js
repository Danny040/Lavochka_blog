import express from "express";
import cors from "cors";
import postRouts from "./routes/posts.js";
import authRouts from "./routes/auth.js";
import userRouts from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/posts", postRouts);
app.use("/api/auth", authRouts);
app.use("/api/user", userRouts);
app.get("/test", (req, res) => {
  res.json("hello there");
});

app.listen(8800, () => {
  console.log("Connected");
});
