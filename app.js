const express = require('express');
const app = express();
const path=require('path');
app.use(express.static("public"))

let port = process.env.PORT || 3000;
app.listen(port,()=>console.log("servidor funcionando"))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/homee.html'))
})


app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})
