const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

// Just requiring Passport Setup to run it on app load
require('./config/passport-setup');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const keys = require('./config/keys');

const app = express();

// Set up a view engine
app.set('view engine', 'ejs');

// Encrypting cookies and controlling live time
// Browser will receive that cookie
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, () => {
    console.log('connected to MongoDB');
});

// Set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// Create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('App now listening for requests on port 3000');
});
