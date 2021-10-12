const express = require('express');
const router = express.Router();

const context = require('./../pages/global.json')
const home = require('./../pages/home.json')


router.get('/', (req, res, next) =>{
    res.render('home', {context, home})
});

router.get('/blog', (req, res, next) =>{

    res.render('blog', {context, home})
});

module.exports = router;