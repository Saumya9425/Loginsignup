const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://saumya:saumya@cluster0.zzogw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',(err , next)=>{
    if(err){
        console.log('connection failed')
    }
    else{
        console.log('connected to db');
    }    
})
