const fs = require("fs");

fs.writeFile("Nodejs_architecture.txt","Node.js uses the “Single Threaded Event Loop” architecture to handle multiple concurrent clients. Node.js Processing Model is based on the JavaScript event-based model along with the JavaScript callback mechanism.", function(err){
if (err){
    console.log("Error: ". err);
}console.log("File craeted successfully");
})

