
const express = require('express');
const cors = require('cors');
const {userRoute} = require('./routers/userRouters');
require("dotenv").config()

const app = express()

app.use(cors());
app.use(express.json())

app.use("/",userRoute)

app.listen(process.env.PORT,()=>{
    console.log("Server started working on port 3000");
})