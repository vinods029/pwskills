const fs = require('node:fs')

fs.unlink("Nodejs_architecture.txt",function(err){
    if(err){
        console.log("Error: ",err);
    }console.log("File has been deleted!");
})