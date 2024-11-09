import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated.");
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid.");
    const query_ =
      "INSERT INTO posts(`title`, `desc`, `img`, `date`, `id_user`, `cat`) VALUES (?)";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.date,
      userInfo.id_user,
      req.body.cat,
    ];
    db.query(query_, [values], (err, data) => {
      if (err) return res.status(500).send(err);
      return res.json("Post has been created");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated.");
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid.");
    const postId = req.params.id;
    const query_ = "DELETE FROM posts WHERE `id_post` = ? AND `id_user` = ?";
    db.query(query_, [postId, userInfo.id_user], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post");
      return res.status(200).json("Post has been deleted.");
    });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated.");
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid.");
    const postId = req.params.id;
    const query_ =
      "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id_post` = ? AND `id_user` = ?";
    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];
    db.query(query_, [...values, postId, userInfo.id_user], (err, data) => {
      if (err) return res.status(500).send(err);
      return res.json("Post has been updated");
    });
  });
};

export const getPosts = (req, res) => {
  const query_ = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";
  db.query(query_, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const query_ =
    "SELECT p.id_post, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id_user = p.id_user WHERE p.id_post = ?";
  db.query(query_, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data[0]);
  });
};
