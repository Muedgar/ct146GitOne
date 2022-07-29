const User = require('../models/User');

const userAllRequests = async (req,res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    }catch(e) {
        console.log(e.message);
        res.status(500).json({message: e.message});
    }
}

const userRequest = async (req,res) => {
    try {
        // 
        const user = await User.findOne({_id: req.params.id});
        user.status = req.body.status;
        console.log(user);
        const newUser = await User.findByIdAndUpdate({_id: req.params.id},user, {new: true});
        res.status(200).json(newUser);
    }catch(e) {
        res.status(500).json({message: e.message});
        console.log(e.message);
    }
}

const feedBackToUser = async (req,res) => {
    try {
        // 
        const user = await User.findByIdAndUpdate({_id: req.params.id},{feedBack: req.body.feedBack}, {new: true});
        res.status(200).json(user);
    }catch(e) {
        res.status(500).json({message: e.message});
        console.log(e.message);
    }
}

module.exports = {
    userAllRequests,
    userRequest,
    feedBackToUser
}