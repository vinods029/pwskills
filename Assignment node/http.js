const https = require("http");

server = https.createServer((req,res) =>{
    if (req.url=="/"){
        
        res.write("<h1>I am happy to Learn  Full Stack development From PW Skills</h1>")
    }
})

server.listen(5005)
console.log("Server is running on port 5005");