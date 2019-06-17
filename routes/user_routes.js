var express = require('express');
const { UserModel } = require('../models/user_model');
const passport = require('passport');
const UserController = require('../controllers/user_controller');
var router = express.Router();

/* GET users listing. */
router.get('/register', UserController.registerForm);
router.post('/register', UserController.register);

router.post('/login', passport.authenticate('local'), (req, res) => {
    // At this point, req.user exists and auth was successful
    res.json(req.user);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});
module.exports = router;
