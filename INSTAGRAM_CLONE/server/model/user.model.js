const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true,
        select:false
    },
    bio: {
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    }
})


userSchema.methods = {
    jwtToken() {
        return JWT.sign({id:this._id, username: this.username}, process.env.SECRET,{
            expiresIn:"24d"
        })
    }
    
}


userSchema.pre("save", async function (next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,12)
    return next();
})

const UserModel = mongoose.model("user",userSchema)

module.exports = {UserModel}