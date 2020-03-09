const express = require("express"); //import express
const shortid = require("shortid"); //import for randome id
const CORS = require("cors");

const server = express(); //so we can use express
server.use(express.json()); //add this line so that express knows of json
server.use(CORS());

const PORT = 8000; //this is our port on which we listen

let users = [];
server.post("/api/users", (req, res) => {
  const usersInfo = req.body;
  if (!usersInfo.name || !usersInfo.bio) {
    res.status(422).send("you need name and a bio !");
  }
  usersInfo.id = shortid.generate();
  users.push(usersInfo);
  res.status(201).json(usersInfo);
});

server.get("/api/users", (req, res) => {
  res.status(200).json(users);
});
server.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

server.get("/", (req, res) => {
  res.status(200).json({ success: "app is running..." });
});
