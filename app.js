const express = require('express');
const mongoose = require('mongoose');

// Just requiring Passport Setup to run it on app load
require('./config/passport-setup');
const authRoutes = require('./routes/auth-routes');
const keys = require('./config/keys');

const app = express();

// Set up a view engine
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, () => {
    console.log('connected to MongoDB');
});

// Set up routes
app.use('/auth', authRoutes);

// Create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('App now listening for requests on port 3000');
});
