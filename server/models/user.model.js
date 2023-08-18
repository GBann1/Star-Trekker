const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

//npm i bcrypt jsonwebtoken cookie-parser
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Username is required"],
        minlength: [5, "Username must be at least 5 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
    validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
    }
}, { timestamps: true });

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

// This is what is creating the table
const User = mongoose.model('User', UserSchema);

// exporting the table, named 'Planet'
module.exports = User;