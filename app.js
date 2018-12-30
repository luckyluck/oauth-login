const express = require('express');
// Just requiring Passport Setup to run it on app load
require('./config/passport-setup');

const authRoutes = require('./routes/auth-routes');

const app = express();

// Set up a view engine
app.set('view engine', 'ejs');

// Set up routes
app.use('/auth', authRoutes);

// Create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('App now listening for requests on port 3000');
});
