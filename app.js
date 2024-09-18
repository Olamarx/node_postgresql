import express from "express";

const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the API!",
  });
});

app.listen(port, () => {
  console.log("Server listening on port");
});
