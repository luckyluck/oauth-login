const express = require('express');

const app = express();

// Set up a view engine
app.set('view engine', 'ejs');

// Create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('App now listening for requests on port 3000');
});
