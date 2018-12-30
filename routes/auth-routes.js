const router = require('express').Router();
const passport = require('passport');

// A middleware to check if the user is logged in
const authCheck = (req, res, next) => {
    if (req.user) {
        // If user is logged in
        res.redirect('/');
    }
    // If user is not logged in
    next();
};

// Auth login page
router.get('/login', authCheck, (req, res) => {
    res.render('login');
});

// Auth logout
router.get('/logout', (req, res) => {
    // Handle with passport
    req.logout();
    res.redirect('/');
});

// Auth with Google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// Callback router for Google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile/');
});

module.exports = router;
