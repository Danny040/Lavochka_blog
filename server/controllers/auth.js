import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  console.log("From client to register");
  // check existing user
  const query_ = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(query_, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists.");

    // hashing the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const query_ =
      "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];
    db.query(query_, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created!");
    });
  });
};

export const login = (req, res) => {
  //check if user exists or not
  const query_ = "SELECT * FROM users WHERE username = ?";
  db.query(query_, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found.");

    //check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password.");
  });
};

export const logout = (req, res) => {};
