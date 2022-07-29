const createUser = require("./create-user");
const signInUser = require("./signin-user");
const getAllRequest = require("./getAllRequests");
const userRequestToInsurance = require("./userRequestToInsurance");
const userRequestManagement = require("./userRequestManagement");
const feedBack = require("./feedBack");
module.exports = {
    paths: {
        '/signup': {
            ...createUser
        },
        '/login': {
            ...signInUser
        },
        '/insuranceDashboard': {
            ...getAllRequest
        },
        '/userDashboard/{id}': {
            ...userRequestToInsurance
        },
        '/insuranceDashboard/userRequest/{id}': {
            ...userRequestManagement
        },
        '/insuranceDashboard/feedBackToUser/{id}': {
            ...feedBack
        }
    }
}