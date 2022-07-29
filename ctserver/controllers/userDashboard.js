const User = require('../models/User');

const userRequestToInsurance = async (req,res) => {
    try {
        console.log(typeof req.params.id, req.params.id);
        const user = await User.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.status(201).json(user);
    }catch(e) {
        console.log(e.message);
        res.status(400).json({message: e.message});
    }
}

const userFeedBackFromInsurance = async (req,res) => {
    try {
        try {
            const user = await User.findOne({_id: req.params.id});
            res.status(200).json(user);
        }catch(e) {
            console.log(e.message);
            res.status(500).json({message: e.message});
        }
    }catch(e) {
        console.log(e.message);
    }
}

module.exports = {
    userRequestToInsurance,
    userFeedBackFromInsurance
}