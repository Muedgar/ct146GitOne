//check for roles

const authorize = (...rolesArray) => {
    return (req, res, next) => {
        if(!rolesArray.includes(req.params.role)) {
            return next(new Error(`User role ${req.params.role} is not authorized to access this route`));
        }
        next();
    };
}
module.exports = {authorize};