const express = require('express');
const router = express.Router();
const TanamanController = require('../controllers/Tanaman.controller');

// post route
// router.post('/posts/', PostController);
router.post('/tanaman/', TanamanController);

module.exports = router;