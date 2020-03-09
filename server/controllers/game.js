/* B"H
*/
const express = require('express');

const quoteCards = require('../models/quoteCards');

const router = express.Router();

router
    .get('/quoteCards', (req, res) => res.send(quoteCards) );


module.exports = router;