const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// route link 
const tourRoute = require('./routes/tour.route');

// middleware 
app.use(express.json());
app.use(cors());
app.use('/api/v1/tour', tourRoute)
// schema design 



app.get("/", (req, res)=>{
    res.send("Route is Working YaY");
})


module.exports = app;