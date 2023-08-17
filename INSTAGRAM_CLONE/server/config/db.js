const { error } = require("console");
const mongoose = require("mongoose");
require("dotenv").config()

const connectDatabase = () =>{
    mongoose.connect(process.env.MONGODB_URL)
    .then((data)=>{
        console.log(`mongodb connected with server: ${data.connection.host}`);
    }).catch((error)=>{
        console.log('Error while connecting to DB',error.message);
    })

}

module.exports = connectDatabase