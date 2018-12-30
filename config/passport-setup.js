const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

// App local key storage
const keys = require('./keys');
const User = require('../models/user-model');

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
            // console.log(profile);
            new User({
                username: profile.displayName,
                googleId: profile.id
            }).save().then(newUser => {
                console.log('new user created:', newUser);
            });
        }
    )
);
