const router = require('express').Router();

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
router.get('/google', (req, res) => {
    // TODO handle with passport
    res.send('Logging in with Google');
});

module.exports = router;
