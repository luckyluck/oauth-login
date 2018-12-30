const router = require('express').Router();

// A middleware to check if the user is logged in
const authCheck = (req, res, next) => {
    if (!req.user) {
        // If user is not logged in
        res.redirect('/');
    }
    // If user is logged in
    next();
};

router.get('/', authCheck, (req, res) => {
    res.send('You are logged in, this is your profile - ' + req.user.username);
});

module.exports = router;
