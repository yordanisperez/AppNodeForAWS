const express =require("express");

const app=express();

app.get('/',(req,res)=>res.send('Hello world with Express'));

app.listen(80);

console.log('server on port 80');