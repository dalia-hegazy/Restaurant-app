export const isAuthorization = (...roles)=>{
    return(req, res, next)=>{
        if(!req.authUser){
            return next(new Error("not authenticated",{cause:401}));
        }
        if(!roles.includes(req.authUser.role)){
            return next (new Error("not authorized",{cause:403}))
        }
        return next();
    }
}