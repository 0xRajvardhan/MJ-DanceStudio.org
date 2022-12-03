const express = require("express");
// const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;

// EXPRESS RELATED CONFIG 
app.use('/static', express.static('static')) // For serving static files 
app.use(express.urlencoded());

// PUG RELATED CONFIG 
app.set('view engine', 'pug'); // Setting the template engine as pug 
app.set('views', path.join(__dirname, 'views')); // Set the views directory 

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})


// START THE SERVER 
app.listen(port, () => {
    console.log(`App started successfully on port ${port}`);
});

