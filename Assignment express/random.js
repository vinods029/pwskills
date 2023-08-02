express = require("express")

app = express()

app.get("/random",(req,res)=>{
    res.send({"counter":Math.floor(Math.random()*100)})

})


app.listen(3000,()=>{
    console.log("Server running on 300 port");
})