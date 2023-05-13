const express = require("express");
const { seq, client } = require("./config/db");
const { adminRouter } = require("./router/admin.router");
const { professionalRouter } = require("./router/professional.router");
const { userRouter } = require("./router/user.router");
const cors = require("cors");
const path = require("path");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.use("/users", userRouter);
app.use("/professions", professionalRouter);
app.use("/admin", adminRouter);

// For any other route, serve the relevant file from the build directory
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Connected to server
const port = process.env.port || 3000;
seq.sync().then(() => {
  app.listen(port, () => {
    console.log(`server is running on port ${port}\nhttp://localhost:${port}/`);
  });
});
