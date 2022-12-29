const express = require('express');

const router = express.Router();

const projets = require ("../../src/data/projets.json")

// Route to the home
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

// Route to the project page
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

// Route to the project overview area
router.get(function (req,res) {
    res.locals = {
        ...res.locals,
        projets,
      };
    res.render('projectOverview')
});

// Route to the various projects
router.get('/projets/:slug', function (req,res) {

  const item = projets.find(
    (elem) => elem.slug,
  );
  res.locals = {
      ...res.locals,
      item,
      title: `${item.name}`,
      description: 'Mes projets',
      url: `/projets/${item.slug}`,
    };
  res.render('oneProjectPage')
});


module.exports = router;