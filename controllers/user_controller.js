const { UserModel } = require('../models/user_model');

function index(req, res) {
    res.render('layout', {
        view: 'index',
        title: "It's working"
    });
}

// Registers a Username (email) and Password
function registerForm(req, res) {
    res.render('layout', {
        view: 'user/register',
        title: 'Create an Account'
    });
}

async function register(req, res) {
    const newUser = new UserModel({
        email: req.body.email
    });
    UserModel.register(newUser, req.body.password, err => {
        if (err) {
            res.status(500).send(err.message);
        }
        // Tell passport to log in the new user
        passport.authenticate('local')(req, res, () => {
            // req.user ow exists
        });
    });
    res.redirect('/authors');
}

module.exports = {
    register,
    registerForm,
    index
};
