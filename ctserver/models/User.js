const mongoose = require("mongoose");

const {isEmail} = require("validator");

const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
        validate: [isEmail,'Please enter valid email']
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Minimum password length is 6 characters"]
    },
    name: {
        type: String,
        required: true
    },
    nationalId: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        enum: ['user','insurance'],
        default: 'user'
    },
    hqaddress: {
        type: String
    }
});

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email});
    if(user) {
       const auth = await bcrypt.compare(password, user.password);
       if(auth) {
        return user;
       }else {
           throw Error('incorrect password'); 
       }
    }
    throw Error('incorrect email');
}

const User = mongoose.model('user', userSchema);

module.exports = User;