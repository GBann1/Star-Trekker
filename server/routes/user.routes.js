const Users = require('../controllers/user.controller');
const {authenticate} = require("../configs/middleware.config")

module.exports = app => {
    app.post("/api/users", Users.registerUser);
    app.post("/api/users/login", authenticate, Users.loginUser);
    app.get("/api/users", authenticate, Users.getAllUsers);
}