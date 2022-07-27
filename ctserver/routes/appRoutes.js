const {Router} = require("express");



const {getUserDashboard,getInsuranceDashboard} = require("../controllers/appControllers");
const {authorize} = require("../middlewares/authorize");
const {protect}  = require("../middlewares/protect");
const appRouter = Router();

// user routes
appRouter.get('/userDashboard/:jwt/:role',  protect, authorize('user'), getUserDashboard);

// insurance routes
appRouter.get('/insuranceDashboard/:jwt/:role',  protect, authorize('insurance'), getInsuranceDashboard);



module.exports = appRouter;