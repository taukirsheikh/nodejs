const fs= require('fs')

// file path and callback function
fs.readFile('./files/starter.txt',(err, data)=>{
    if (err) throw err;
    console.log(data) // output: <Buffer 68 65 6c 6c 6f 77 20 69 20 61 6d 20 61 20 68 75 6d 61 6e 20 62 65 69 6e 67>
    console.log(data.toString()) // output : hellow i am a human being
})

//alternative
fs.readFile('files/starter.txt','utf-8',(err, data)=>{
    if (err) throw err;
    console.log(data) // output: hellow i am a human being
})
console.log('hello world') // this will log first as file read is asynchronous
//catching the error with callback
process.on("uncaughtException", (err) => {
    console.error("there was an uncaught exception", err);
    process.exit(1);
})

// process.on("uncaughtException", err => {
//     console.error("there was an uncaught exception", err);
//     process.exit(1);
// })

const path = require('path');

// using path makes independetn file system of os used as some have \ and some / to read file system
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})