const express = require("express");

const {connectMongoDb} = require('./connections');
const {logReqRes} = require('./middlewares/index')
const {userRouter} = require("./routes/user");

const app = express();
const port = 8000;

//Connection
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1')

//Middleware - Plugin
app.use(express.urlencoded({ extended: false}));
app.use(logReqRes);

//Routes
app.route("/api/users",userRouter);

app.listen(port,()=> console.log("Server is running"));
