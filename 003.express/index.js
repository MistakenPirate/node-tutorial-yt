const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");

const app = express();

// function myHandler(req,res){
//     if (req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);
//     fs.appendFile("log.txt", log, (err,data)=>{
    //         switch(myUrl.pathname){
        //             case '/': 
        //                 if (req.method === "GET") res.end("Homepage");
        //                 break;
        //             case '/about':
        //                 const username = myUrl.query.myname;
        //                 res.end("Hi "+username);
        //                 break;
        //             case '/search':
        //                 const search = myUrl.query.search_query;
        //                 res.end("Here are your results : "+search);
        //                 break;
        //             case '/signup':
        //                 if(req.method === "GET") res.end("This is a signup form");
        //                 else if(req.method ==="POST") {
            //                     //DB Query
            //                     res.end("Success");
            //                 }
            //             default:
            //                 res.end("404 not found");
            //                 break;
            
            //         }
            //     });
            // }

// const myServer = http.createServer(myHandler);

app.get("/", (req,res)=>{
    return res.send("Hello from home page");
});

app.get("/about", (req,res)=>{
    return res.send("Hello from about page  to "+req.query.myname+" and you are "+req.query.age);
});


// const myServer = http.createServer(app);
// myServer.listen(8000,()=>console.log("Server Started"));

app.listen(8000,()=>console.log("Server Started"));









