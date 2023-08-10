const { error } = require('console')
const {UserModel} = require('../model/userModel')

exports.home = (req,res) =>{
    res.send("<h1>Welcome to the home page of cread</h1><ul><li>Use /register to signup</li><li>Use /login to login into your account </li></ul>")
}


exports.register = async (req,res) =>{

    const {name,username,password} = req.body;

    try {
        await UserModel.create({name,username,password})
        res.status(100).send({msg: "User create successfully"})
        
    } catch (error) {
        res.status(501).send({msg:error.message})
        
    }

}

exports.login = async (req,res)=>{

   const {email, password} = req.body;

   try {
    const userData = await UserModel.findOne({email})

    if (userData){
        if(userData.password ==password){
            res.status(100).send({msg:"You're logged in successfully!"})
        }else {
            res.status(401).send({msg:"you have entered a wrong password please try again"})
        }
    }else{
        res.send(404).send({msg:"No account was found with the username provided , please try again"})
    }
    
   } catch (error) {
    res.status(501).send({msg:error.message})
    
   }
}