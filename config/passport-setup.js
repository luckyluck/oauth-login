const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

// App local key storage
const keys = require('./keys');

passport.use(
    new GoogleStrategy(
        {
            // Google Strategy options
            callbackURL: '/auth/google/redirect',
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret
        },
        (accessToke, refreshToken, profile, done) => {
            // Passport callback function
            console.log('passport callback function fired');
            console.log(profile)
        }
    )
);
