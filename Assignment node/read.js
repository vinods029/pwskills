const fs = require('node:fs')

fs.readFile("Nodejs_architecture.txt","utf-8", function(err,data){
    if (err){
        console.log("Error: ", err);
    }
    console.log(data);
})