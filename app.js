//Requires
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const { UserModel, UserSchema } = require('./models/user_model');

//Create the app
const app = express();
const port = 3000;

//Authentication and Session stuff
app.use(
    session({
        secret: 'it would be nice to not be alive'
    })
);

app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1/books_r_us', { useNewUrlParser: true });
mongoose.connection.on('error', err => console.log(err));

passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());

//View Engine Stuff
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    methodOverride('_method', {
        methods: ['POST', 'GET']
    })
);

app.use('/authors', require('./routes/author_routes'));
app.use('/books', require('./routes/book_routes'));
app.use('/', require('./routes/user_routes'));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
