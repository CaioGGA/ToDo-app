require("dotenv").config();
const cors = require("cors");

const express = require("express");
const { use } = require("react");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

const data = [];

app.get("/tasks", (req, res) => {
  res.send(data);
});

app.post("/tasks", (req, res) => {
  if (req.body.id) {
    data.push(req.body);
  } else {
    data.push({
      id: data.length === 0 ? 1 : data[data.length - 1].id + 1,
      task: req.body.task,
    });
  }
  console.log(data);

  res.json(data);
});

app.delete("/tasks/:id", (req, res) => {
  const userId = req.params.id;
  data.splice(userId, 1);

  res.json(data);
});

app.put("/tasks/:id", (req, res) => {
  data[req.params.id] = req.body;
  console.log(data[req.params.id]);
  res.json(data);
});
app.listen(PORT, () => {
  console.log("Server is running");
});
