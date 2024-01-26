const fs = require("fs");


//Synchronous 
fs.writeFileSync("./test.txt","Hey There\n");
// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);
fs.appendFileSync("./test.txt",`${Date.now()} Hey there \n`);
fs.cpSync("./test.txt","./copy.txt");
console.log(fs.statSync("./test.txt"));
fs.unlinkSync("./test.txt");


//Asynchronous
// fs.writeFile("./test.txt","Hey There Async",(err)=>{}); 
// fs.readFile("./contacts.txt","utf-8",(err,data) => {console.log(err?err:data);});


