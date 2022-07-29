const {Router} = require("express");



const {userAllRequests,userRequest, feedBackToUser} = require("../controllers/insuranceDashboard");
const {userRequestToInsurance, userFeedBackFromInsurance} = require("../controllers/userDashboard");

const problemSolving = Router();

// user routes
problemSolving.route('/userDashboard/:id').get(userFeedBackFromInsurance).put(userRequestToInsurance);

// insurance routes
problemSolving.route('/insuranceDashboard/').get(userAllRequests);
problemSolving.route('/insuranceDashboard/userRequest/:id').put(userRequest);

problemSolving.route('/insuranceDashboard/feedBackToUser/:id').put(feedBackToUser);



module.exports = problemSolving;