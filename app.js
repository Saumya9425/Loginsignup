const express = require('express');
const app= express();
 
const userroute = require(/route/user);
app.use('/user',(req,res,next) => {
    res.status(200).json({
        message: 'It works!'
    });
});

module.exports = app;