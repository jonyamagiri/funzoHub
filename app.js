const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require('./server/utils/db');
const expressLayouts = require("express-ejs-layouts");
const logger = require('morgan');


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


// API Routes

app.use('/api/courses', require('./server/routes/courseRoutes'));
app.use('/api/users', require('./server/routes/userRoutes'));

// Frontend Routes
const routes = require("./server/routes/frontendRoutes");
app.use("/", routes);



app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});