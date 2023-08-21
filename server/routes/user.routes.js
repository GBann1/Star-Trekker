const Users = require('../controllers/user.controller');
module.exports = app => {
    app.get("/api/users", Users.getAllUsers);
    app.post("/api/users/register", Users.registerUser);
    app.post("/api/users/login", Users.loginUser);
}