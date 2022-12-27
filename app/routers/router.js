const express = require('express');

const router = express.Router();

router.get('/', function (req,res) {
    res.render('home')
});

router.get('/projets', function (req,res) {
    res.render('projectPage')
});

module.exports = router;