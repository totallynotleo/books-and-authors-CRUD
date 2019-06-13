const express = require('express');
const router = express.Router();
const AuthorController = require('./controllers/author_controller');

router.delete('/:id', AuthorController.destroy);

router.get('/', AuthorController.index);

router.get('/new', AuthorController.make);

router.get('/:id', AuthorController.show);

router.post('/', AuthorController.create);

router.get('/:id/update', AuthorController.edit);
router.put('/:id', AuthorController.update);

module.exports = router;
