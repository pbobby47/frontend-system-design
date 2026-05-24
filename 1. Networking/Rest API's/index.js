import express from "express";

const app = express();

app.all("/", (req, res) => {
  console.log("Request >", req);
  console.log("Response >", res);

  res.send("I am Bobby!!!");
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log("Server is running on the port ", PORT);
  console.log(`127.0.0.1:${PORT}`);
});
