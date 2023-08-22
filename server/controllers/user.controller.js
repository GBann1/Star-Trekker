const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerUser = async (req, res) => {
    try {
        req.session.user = await User.create(req.body.user);
        await req.session.save();
        return res.json(req.session.user);
    } catch(error) {
        return res.status(400).json(error);
    }
}

module.exports.getAllUsers = (req, res) => {
    User.find()
        .then((allUsers) => {res.json({allUsers: allUsers})})
        .catch((err) => res.status(400).json(err));
}; 

module.exports.loginUser = async (req, res) => {

    try {
        req.session.user = await User.checkLogin(req.body);
        await req.session.save();
        return res.json(req.session.user);
    } catch(error) {
        return res.status(401).json(error);
    }
}

module.exports.logout = (req, res) => {
    req.session.destroy();
    return res.json({message: "success"});
}