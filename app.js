import express from "express";
import router from "./routes/authRoute.js";

const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the API!",
  });
});

app.use("/api/v1/auth", router);

app.use("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

app.listen(port, () => {
  console.log("Server listening on port");
});
