import express from "express";
import cors from "cors";
import postRouts from "./routes/posts.js";
import authRouts from "./routes/auth.js";
import userRouts from "./routes/users.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/posts", postRouts);
app.use("/api/auth", authRouts);
app.use("/api/user", userRouts);
app.get("/test", (req, res) => {
  res.json("hello there");
});

app.listen(8800, () => {
  console.log("Connected");
});
