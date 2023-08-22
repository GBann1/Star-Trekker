const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

//npm i bcrypt jsonwebtoken cookie-parser

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must be at least 3 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [3, "Last name must be at least 3 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: function(val) {return /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val)},
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
}, { timestamps: true });

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

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

UserSchema.statics.checkLogin = async function({ email, password }){
    const user = await this.findOne({ email });
    if(!(user && await bcrypt.compare(password, user.password))){
        throw new this().invalidate("password", "Invalid password")
    }
    return user;
}

// This is what is creating the table
const User = mongoose.model('User', UserSchema);

// exporting the table, named 'Planet'
module.exports = User;