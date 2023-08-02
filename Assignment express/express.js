const express = require('express');
var counter = 0;

const app = express();

HOSTNAME = "localhost"
PORT = 3000;


app.get("/",(req,res)=>{
    res.send({counter:counter})
})

app.get("/increment",(req,res)=>{
    counter ++
    res.send({counter:counter})

})

app.get("/decrement",(req,res)=>{
    counter --
    res.send({counter:counter})

})


app.listen(PORT,()=>{
    console.log(`server running at ${HOSTNAME}:${PORT}`);
})