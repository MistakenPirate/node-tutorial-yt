const express = require('express');

const {connectToMongoDB} = require('./connect');

const urlRoute = require("./routes/url");
const app = express();
const port = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url")
    .then(()=>console.log("MongoDB connected"));

app.listen(port, ()=> console.log(`Server started at port ${port}\n`))