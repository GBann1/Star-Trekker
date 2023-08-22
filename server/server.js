// 1. importing dependencies 
// express
const {ironSession} = require("iron-session/express")
const express = require("express");
const cors = require('cors');
// creating an app with express
const app = express();
const cookieParser = require("cookie-parser");
require('dotenv').config();

// 4. import mongoose.config after you set it up
require("./configs/mongoose.config");
// making it more dynamic, taking in the PORT variable from the .env file

const port = process.env.PORT;

app.use(
    cors({ credentials: true, origin: "http://localhost:3000" }),
    express.urlencoded({ extended: true }),
    express.json(),
    ironSession({
        cookieName: "UserCookie",
        password: process.env.COOKIE_SECRET,
        cookieOptions: {secure: process.env.NODE_ENV === "production"}
    })
    );
// automatically parses JSON data to make it available for requests
// 2. configure express

//Cookies
// res.cookie("mycookie", "mydata", { httpOnly: true }).json({
//     message: "This response has a cookie"
// });

// 6. IMPORT ROUTES
require("./routes/planet.routes")(app);
require("./routes/user.routes")(app);


// 3. listen to port
app.listen(port, () => console.log(`listening on port: ${port}`))