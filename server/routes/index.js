const express = require('express');
const { redirectShortenUrl } = require('../controller/shortUrl');
const { findShortenUrl } = require('../middleware/findShortenUrl');
const router = express.Router();

const loginUser = require('../controller/login');
const registerUser = require('../controller/register');

const shortUrl = require('./shortUrl');

router.get('/:shortenId', findShortenUrl, redirectShortenUrl);
router.post('/api/auth/login', loginUser);
router.post('/api/auth/register', registerUser);
router.use('/api', shortUrl);

module.exports = router;
