import { db } from "../db.js";

export const addPost = (req, res) => {
  res.json("Controller is wokring!");
};

export const deletePost = (req, res) => {
  res.json("Controller is wokring!");
};

export const updatePost = (req, res) => {
  res.json("Controller is wokring!");
};

export const getPosts = (req, res) => {
  const query_ = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";
  db.query(query_, [req.query.cat], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const query_ =
    "SELECT `username`, `title`, `desc`, p.img, `cat`, `date` FROM users u JOIN posts p ON u.id_user = p.id_user WHERE p.id_post = ?";
  db.query(query_, [req.params.id], (err, data) => {
    if (err) return res.send(err);
    console.log(data);
    return res.status(200).json(data[0]);
  });
};
