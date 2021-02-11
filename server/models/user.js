const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'allUser'
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true 
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user',UserSchema);