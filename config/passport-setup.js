const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

// App local key storage
const keys = require('./keys');
const User = require('../models/user-model');

// Putting user to cookie for a browser
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Getting user from cookie
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            // Google Strategy options
            callbackURL: '/auth/google/redirect',
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret
        },
        (accessToke, refreshToken, profile, done) => {
            // Check if user already exists in our db
            User.findOne({ googleId: profile.id }).then(currentUser => {
                if (currentUser) {
                    // already have the user
                    done(null, currentUser);
                } else {
                    // if not, create user in our db
                    new User({
                        username: profile.displayName,
                        googleId: profile.id
                    }).save().then(newUser => {
                        done(null, newUser);
                    });
                }
            });
        }
    )
);
