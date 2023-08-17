const express = require("express");
require ("dotenv").config()
const connectDatabase =require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connect } = require("http2");
const app = express();


app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))

app.use(cookieParser())


app.listen(process.env.PORT, async ()=>{
    connectDatabase()
    console.log("Server started on port no ", process.env.PORT);
})