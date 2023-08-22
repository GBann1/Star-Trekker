const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerUser = (req, res) => {
    console.log("Hello")
    User.create(req.body)
        .then(user => {
            console.log("Hello");
            req.session.save();
            console.log("Hello2");
            res.json(req.session.user);
            console.log("Hello3");
            console.log("Hello4");
            console.log("Hello5");
        })
        .catch(err => {
            console.log("In err");
            res.status(400).json(err)
        });
}

module.exports.getAllUsers = (req, res) => {
    User.find()
        .then((allUsers) => {res.json({allUsers: allUsers})})
        .catch((err) => res.status(400).json(err));
}; 

module.exports.loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }

    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if (!correctPassword) {
        // password wasn't a match!
        return res.sendStatus(400);
    }

    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);

    // note that the response object allows chained calls to cookie and json
    res.cookie("usertoken", userToken, secret, {httpOnly: true})
        .json({ msg: "success!" });
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}