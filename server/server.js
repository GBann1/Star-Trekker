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
require("./configs/mongoose.config")


app.use(cors());
// automatically parses JSON data to make it available for requests
// 2. configure express
app.use(express.json());
// parses url-encoded data from requests
app.use(express.urlencoded({extended: true}))


// 5. IMPORT ROUTES



// 3. listen to port
app.listen(port, ()=>console.log(`listening on port: 8000`))