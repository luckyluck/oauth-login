const router = require('express').Router();
const passport = require('passport');

// Auth login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Auth logout
router.get('/logout', (req, res) => {
    // TODO handle with passport
    res.send('Logging out');
});

// Auth with Google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// Callback router for Google to redirect to
router.get('/google/redirect', (req, res) => {
    res.send('You reached the callback URI');
});

module.exports = router;
