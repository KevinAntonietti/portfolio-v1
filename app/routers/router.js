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
  const { slug } = req.params;
  const item = projets.find(
    (elem) => elem.slug === slug,
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


// Route to about
router.get('/about', function (req,res) {
  
  res.locals = {
      ...res.locals,
      projets,
      title: `à propos`,
      description: '',
      url: `/about`,
    };
  res.render('about')
});


module.exports = router;