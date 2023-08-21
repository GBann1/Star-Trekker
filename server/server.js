// 1. importing dependencies 
// express
const express = require("express");
const cors = require('cors');
// creating an app with express
const app = express();
require('dotenv').config();

// console.log(process.env.PORT);
// making it more dynamic, taking in the PORT variable from the .env file
const port = process.env.PORT;

// 4. import mongoose.config after you set it up
require("./configs/mongoose.config");

// JSONwebTokens into Cookies (line 28)
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// app.use(cors());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// automatically parses JSON data to make it available for requests
// 2. configure express
app.use(express.json());
// parses url-encoded data from requests
app.use(express.urlencoded({ extended: true }))

// //Cookies
// res.cookie("mycookie", "mydata", { httpOnly: true }).json({
//     message: "This response has a cookie"
// });

// 6. IMPORT ROUTES
require("./routes/planet.routes");
require("./routes/user.routes")(app);


// 3. listen to port
app.listen(port, () => console.log(`listening on port: 8000`))