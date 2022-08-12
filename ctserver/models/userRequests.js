const mongoose = require("mongoose");


const userRequests = new mongoose.Schema({
    userId: {
        type: String
    },
    insurancefrom: {
        type: String
    },
    insuranceto: {
        type: String
    },
    scheduledate: {
        type: String
    },
    hourschedule: {
        type: String
    },
    status: {
        type: String,
        enum: ['approved','pending','rejected'],
        default: 'pending'
    }
});

const UserRequests = mongoose.model('UserRequests',userRequests);

module.exports = {UserRequests};