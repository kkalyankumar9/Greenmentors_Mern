const express = require("express");
const { connection } = require("./db");
const { userRoutes } = require("./routes/userRoutes");
const { crudRoutes } = require("./routes/crudRoutes");
const jwt = require("jsonwebtoken");
const { CrudModel } = require("./models/crudModel");
const { Usermodel } = require("./models/userModel");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/userauth", userRoutes);
app.use("/crud", crudRoutes);

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("DB connected");
    console.log(`Server is running  port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
