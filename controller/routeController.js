const { json } = require('express')
const bcrypt = require('bcrypt')
const express= require('express');
const userModel = require('../model/userModel');
const validator = require('email-validator');
exports.lsd = (req , res , next)=>{
    res.status(201);
    res.json('this is user');
}

exports.postlsd = async(req ,res ,next)=>{
    const email = req.body.email;
    if(!validator.validate(email)){
        return res.json('Invalid input');
    }
    const pass = req.body.pass;
    const hpass = await bcrypt.hash(pass ,10);
    userModel.findOne({email:email}).then(result =>{
        if(result){
            res.json('already exist')
        }
        else{
            const add = new userModel({
                email:email,
                pass:hpass
            })
            add.save();
            res.json(add);
        }
    })
}