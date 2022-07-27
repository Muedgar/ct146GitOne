const jwt = require("jsonwebtoken");

require("dotenv").config();
const protect = async (req, res, next) => {
    
    console.log(req.params.jwt);
    if(!req.params.jwt) throw new Error("no token present");
    const token = req.params.jwt;
    const userInfo = jwt.verify(token, process.env.JWT_SECRET);
    console.log(userInfo);
    req.user = userInfo;
    next();
}

module.exports = {protect};