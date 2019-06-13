const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const fileUpload = require('express-fileupload');

const app = express();
const port = 3000;

app.use(fileUpload());

mongoose.connect('mongodb://127.0.0.1/books_r_us', { useNewUrlParser: true });
mongoose.connection.on('error', err => console.log(err));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    methodOverride('_method', {
        methods: ['POST', 'GET']
    })
);

app.use('/authors', require('./author_routes'));
app.use('/books', require('./book_routes'));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
