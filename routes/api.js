const express = require('express');
const router = express.Router();


const {homepage} = require('../actions/api/test');


router.get('/api/', homepage)

module.exports = router;
