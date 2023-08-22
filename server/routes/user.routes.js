const Users = require('../controllers/user.controller');
const {authenticate} = require("../configs/jwt.config");

module.exports = app => {
    app.post("/api/users", Users.registerUser);
    app.post("/api/users/login", Users.loginUser);
    app.get("/api/users", Users.getAllUsers);
}