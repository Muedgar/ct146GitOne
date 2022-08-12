const {Router} = require("express");


const problemSolving = Router();

const {addUserRequest,getAllUsers,
    getOneUser,
    getAllRequests,
    approveRequest,
    rejectRequest,
    createFeedBack
    } = require("../controllers/userRequest");
// user routes
problemSolving.route('/user/makeRequest/:id').post(addUserRequest);
problemSolving.get('/user/makeRequest/getAllUsers',getAllUsers);
problemSolving.get('/user/makeRequest/getAllRequests',getAllRequests);
problemSolving.get('/user/makeRequest/getOneUser/:id',getOneUser);

// approve or reject

problemSolving.put('/user/makeRequest/approve/:id',approveRequest);
problemSolving.put('/user/makeRequest/reject/:id',rejectRequest);

// handle feedback
problemSolving.post('/user/makeRequest/createFeedback',createFeedBack);

module.exports = problemSolving;