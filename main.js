import express from "express";
const app = express();

import { login } from "./services/functions.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  let user = { email: req.body.email, password: req.body.password };

  let result = await login(user);

  console.log(result);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
