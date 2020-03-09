const express = require("express"); //import express
const shortid = require("shortid"); //import for randome id
const CORS = require("cors");

const server = express(); //so we can use express
server.use(express.json()); //add this line so that express knows of json
server.use(CORS());

const PORT = 8000; //this is our port on which we listen

let users = [];
server.post("/api/users", (req, res) => {
  const userInfo = req.body;
  if (!userInfo.name || !userInfo.bio) {
    res.status(422).send("you need name and a bio !");
  }
  userInfo.id = shortid();
  users.push(usersInfo);
  res.status(201).json(users);
});

server.get("/api/users", (req, res) => {
  res.status(200).json(users);
});
server.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

server.get("/", (req, res) => {
  res.status(200).json({ success: "app is running..." });
});
