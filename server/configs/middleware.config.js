module.exports.authenticate = (req, res, next) => {
    if(!req.session.user){
        return res.status(401).json({verified: false});
    }
    next();
}