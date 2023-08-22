const Users = require('../controllers/user.controller');

module.exports = app => {
    app.post("/api/users", Users.registerUser);
    app.post("/api/users/login", Users.loginUser);
    app.get("/api/users", Users.getAllUsers);
}