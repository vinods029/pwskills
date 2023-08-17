const {UserModel} = require("../model/user.model")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose") 
const JWT = require("jsonwebtoken")
const express = require("express")

// To register

exports.userSignUp = async(req,res) => {
    try {
        const newUser = await UserModel.create(req.body);
        res.status(200).send({
            meg:"signup Success"
        })
        
    } catch (error) {
        res.status(501).send({msg:error.message})
        
    }
} 

// to login user 

exports.userLogin = async (req,res) =>{
    const {username,password}= req.body;

    try {
        const getuserData = await UserModel.findOne({username}).select("+password");

        if (getuserData && getuserData.username){
            const result = await bcrypt.compare(password,getuserData.password)

            if (result) {
                const token = await getuserData.jwtToken()
                const cookieOption = {
                    maxAge: 24 * 60 * 60 *1000,
                    httpOnly: true
                };

                res.cookie("token", token, cookieOption);
                res.status(200).json({
                    success:true,
                    data:getuserData
                })
            }else {
                res.status(404).send({meg:"Password is Incorrect , Try again"})
            }
        }else {
            res.status(404).send({meg:"No account was found with the username provided"})
        }
        
    } catch (error) {
        res.status(501).send({msg:error.message})
        
    }
}

//get user Details

exports.getUserDetails = async(req,res) =>{
    const {id,username} = req.user;
}

try {
    const userData = await UserModel.findOne({username});
    res.status(200).send({
        msg:"success",
        data:userData
    })
    
} catch (error) {
    res.status(501).send({msg:error.message})
    
}