const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require('./server/utils/db');
const expressLayouts = require("express-ejs-layouts");
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');


connectDb();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
app.use(logger('dev')); // adds logging functionality to console

// flash messages
app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());

// API Routes
app.use('/api/courses', require('./server/routes/courseRoutes'));
app.use('/api/users', require('./server/routes/userRoutes'));
app.use('/api/categories', require('./server/routes/categoryRoutes'));


// Frontend Routes
const routes = require("./server/routes/frontendRoutes");
app.use("/", routes);



app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});