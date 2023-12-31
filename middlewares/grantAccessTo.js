/*
    - Complete the Middleware grantAccessTo to manage access control for userRoutes. 
    - The middleware takes an array of roles as the parameter
    - Access should be granted to all roles in the parameter
    - Throw an error 403(Forbidden), if the role doesnt have access, in the given format: 
    {
        "status": "error",
        "message": "Access Denied"
    }
*/

// function grantAccessTo(roles) {
//     return (req, res, next) => {
//         try {
//             /*
//             Write your middleware here.
//             Steps: 
//             - Define a middleware function that takes the request, response, and next function as parameters.
//             - Extract the 'role' from req.body.
//             - Check if the required 'role' is present in the array.
//             - Return a valid response if access cannot be granted.
//             */
//            const {role} = req.body;
//            if(!roles.includes(role)){
//             return res.status(403).json({
//                 status: "error",
//                 message: "Access Denied",
//             });
//            }
//            next();
//         } catch (err) {
//             return res.status(400).json({
//                 status: "error",
//                 message: "Unable to check access level"
//             })
//         }
//     }
// }

// Export the middleware function as a module.
module.exports = grantAccessTo;
function grantAccessTo(roles) {
    try {
        return function (req, res, next) {
            const { role } = req.body;
            if (!roles.includes(role)) {
                return res.status(403).json({
                    status: "error",
                    message: "Access Denied"
                })
            } else {
                next();
            }
        }
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: "Unable to check access level"
        })
    }
}

module.exports = { grantAccessTo };