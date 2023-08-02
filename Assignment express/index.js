const http = require("http");
const { json } = require("stream/consumers");

const menProducts = [
    {id: 1 , name: "Men product 1", category:"Men" , price: 30},
    {id: 2 , name: "Men product 2", category:"Men" , price: 40}
]

const womenmenProducts = [
    {id: 1 , name: "women product 1", category:"women" , price: 80},
    {id: 2 , name: "women product 2", category:"women" , price: 50}
]

const server = http.createServer((req,res)=>{

    if (req.url==="/"){
        res.statusCode =200;
        res.setHeader('Content-Type',"text/plain");
        res.end("Welcome to men & Women Dummy Data")
    }
    else if (req.url==="/men"){
        res.statusCode =200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(menProducts))
    }
    else if (req.url==="/women"){
        res.statusCode =200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(womenmenProducts))
    }

    else{
        res.statusCode =404;
        res.setHeader('Content-Type',"text/plain");
        res.end('page not found')
    }
    

})

PORT = 3000

server.listen(PORT,()=>{
    console.log(`Server started running on ${PORT}`);
});
