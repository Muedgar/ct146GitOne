const User = require("../models/User");
const {UserRequests} = require("../models/userRequests");

// crud request

const addUserRequest = async (req,res) => {
    try {
        const {insurancefrom, insuranceto,scheduledate,hourschedule} = req.body;
        let user = await User.findOne({_id: req.params.id});
       
       if(user) {
        await UserRequests.create({userId: req.params.id,insurancefrom, insuranceto,scheduledate,hourschedule}).then(d=> {
            res.status(201).json({status: "request created"});
        });
       }
    }catch(error) {
        console.log(error.message);
        res.status(500).json({status: "Internal Server Error", error: error.message});
         
         
    }
}

// get all users
const getAllUsers = async (req,res) => {
    try {
        const users = await User.find({});

        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
    }
}

// get one user
const getOneUser = async (req,res) => {
    try {
        const user = await User.findOne({_id:req.params.id});

        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
    }
}
// get all userrequests
const getAllRequests = async (req,res) => {
    try {
        const requests = await UserRequests.find({});

        res.status(200).json(requests);
    } catch (error) {
        console.log(error.message);
    }
}

const approveRequest = async (req,res) => {
    try {
        const requests = await UserRequests.findOneAndUpdate({_id:req.params.id}, {status: "approved"});

        res.status(200).json(requests);
    } catch (error) {
        console.log(error.message);
    }
}

const rejectRequest = async (req,res) => {
    try {
        const requests = await UserRequests.findOneAndUpdate({_id:req.params.id}, {status: "rejected"});

        res.status(200).json(requests);
    } catch (error) {
        console.log(error.message);
    }
}

const createFeedBack = async (req,res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    addUserRequest,
    getAllUsers,
    getOneUser,
    getAllRequests,
    approveRequest,
    rejectRequest,
    createFeedBack
}