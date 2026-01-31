const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

// This should be written before all routes so it all on every request
// All requests flow from top to bottom.
app.use(bodyParser.urlencoded({extended: false})); 

//Another layer of route filtering
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,"views","page-not-found.html"));
}) 


app.listen(3000);