const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

// App local key storage
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }),
    () => {
        // Passport callback function
    }
);
