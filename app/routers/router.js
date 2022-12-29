const express = require('express');

const router = express.Router();

const projets = require ("../../src/data/projets.json")

router.get('/', function (req,res) {
  res.locals = {
    ...res.locals,
    projets,
    title: 'Kevin Antonietti',
    description: 'Home',
    url: '/',
  };
    res.render('home')
});

router.get('/projets', function (req,res) {
    res.locals = {
        ...res.locals,
        projets,
        title: 'Kevin Antonietti',
        description: 'Mes projets',
        url: '/projets',
      };
    res.render('projectPage')
});

router.get(function (req,res) {
    res.locals = {
        ...res.locals,
        projets,
      };
    res.render('projectOverview')
});

module.exports = router;