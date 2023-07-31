const { log } = require('node:console')
const fs = require('node:fs')

fs.appendFileSync("Nodejs_architecture.txt"," Node.js server, most of the time, requires fewer resources and memory due to the way it handles the incoming requests. Since the requests are processed one at a time, the overall process becomes less taxing on the memory. All of these advantages contribute to making the servers developed using Node.js much faster and responsive when compared to those developed using other server development technologies.Check out the video below that will help you understand all about the Node.js architecture. ","utf-8"
)

data = fs.readFileSync("Nodejs_architecture.txt","utf-8")
console.log(data);
