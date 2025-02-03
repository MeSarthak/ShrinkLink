const express = require('express'); // ✅ Use CommonJS require
const { createShortURL, getAnalytics } = require('../controllers/url'); 

const router = express.Router();

router.post('/', createShortURL);

router.get('/analytics/:shortId', getAnalytics);

module.exports = router; // ✅ Correct way to export the router
