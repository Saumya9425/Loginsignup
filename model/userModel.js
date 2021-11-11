const mongoose = require('mongoose');
const user = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    pass:{
        type:String,
        require:true
    },
    name:{
        type:String
    },
    phone:{
        type:Number
    }
});
module.exports = mongoose.model('account',user);