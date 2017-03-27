import express from "express";
app = express();

app.use("/", express.static(__dirname))
