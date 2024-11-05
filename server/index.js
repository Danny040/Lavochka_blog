import express from "express";
import postRouts from "./routes/posts.js";
import authRouts from "./routes/auth.js";
import userRouts from "./routes/users.js";

const app = express();

app.use(express.json());
app.use("/api/posts", postRouts);
app.use("/api/auth", authRouts);
app.use("/api/user", userRouts);

app.listen(8800, () => {
  console.log("Connected");
});
