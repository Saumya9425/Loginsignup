const { json } = require('express')
const bcrypt = require('bcrypt')
const express= require('express');
const userModel = require('../model/userModel');
const validator = require('email-validator');

exports.postlsd = async(req ,res ,next)=>{
    const email = req.body.email;
    if(!validator.validate(email)){
        return res.json('Invalid email');
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
                pass:hpass,
                name:req.body.name,
                phone:req.body.phone
            })
            add.save();
            res.status(200);
            res.json(add);
        }
    })
}
exports.putlsd = async(req,res,next)=>{
    const email = req.body.email;
    if(!validator.validate(email)){
        return res.json('Invalid email');
    }
    const pass = req.body.pass;
    const hpass = await bcrypt.hash(pass ,10);
    const add = new userModel({
        email:email,
        pass:hpass,
        name:req.body.name,
        phone:req.body.phone
    })
    add.save();
    res.status(200);
    res.json(add);
}
exports.deletelsd=(req,res,next)=>{
    const email = req.body.email;
    if(!validator.validate(email)){
        return res.json('Invalid email');
    }
    const pass = req.body.pass;
    userModel.findOneAndDelete({email:email}).then(result => {
       if(result)
        res.status(200).json('Account deleted');
        else
        req.status(500).json('user does not exist');
    })
    
}