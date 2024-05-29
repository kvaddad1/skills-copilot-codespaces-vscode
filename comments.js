// Create web server
    // Define routes
// Define route handlers
// Start server
// Listen for requests

const express = require("express");
const comments = require("./comments.json");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((comment) => comment.id === +id);
  res.send(comment);
});

app.post("/comments", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  fs.writeFileSync("./comments.json", JSON.stringify(comments));
  res.send(comments);
});

app.put("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body;
  const index = comments.findIndex((comment) => comment.id === +id);
  comments[index] = newComment;
  fs.writeFileSync("./comments.json", JSON.stringify(comments));
  res.send(comments);
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComments = comments.filter((comment) => comment.id !== +id);
  fs.writeFileSync("./comments.json", JSON.stringify(newComments));
  res.send(newComments);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});