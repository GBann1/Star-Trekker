const Users = require('../controllers/user.controller');
const {authenticate} = require("../configs/middleware.config");

module.exports = app => {
    app.post("/api/users", Users.registerUser);
    app.post("/api/users/login", Users.loginUser);
    app.get("/api/users", Users.getAllUsers);
    app.get("/api/users/:id", authenticate, Users.getUser);
    app.post("/api/users/logout", Users.logout);
}