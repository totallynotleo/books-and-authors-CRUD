var express = require('express');
const { UserModel } = require('../models/user_model');
const passport = require('passport');
const UserController = require('../controllers/user_controller');
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.index);

router.get('/users/new', UserController.registerForm);
router.post('/users/register', UserController.register);

router.get('/users/login, Usercontroller.loginForm');
router.post('/users/login', passport.authenticate('local'), (req, res) => {
    // At this point, req.user exists and auth was successful
    // res.json(req.user);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});
module.exports = router;
