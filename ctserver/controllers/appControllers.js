

const getUserDashboard = async(req, res) => {
    
    try {
       res.status(200).json({page: "permission granted", userDashboard: true});
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({errors});
    }
}


const getInsuranceDashboard = async(req, res) => {
    
    try {
       res.status(200).json({page: "permission granted", insuranceDashboard: true});
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({errors});
    }
}

module.exports = {
    getUserDashboard,
    getInsuranceDashboard
}