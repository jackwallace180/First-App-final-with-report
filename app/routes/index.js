const mongoose = require('mongoose')
const express = require('express');
const Registration = mongoose.model('Registration'); 
const { check, validationResult } = require('express-validator');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('form',{title: 'Name and Location' });
});

router.post('/',
  [
    check('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    check('location')
      .isLength({ min: 1 })
      .withMessage('Please enter your location'),
  ],
  (req, res) => {
    console.log(req.body);
    res.render('form', { title: 'Registration form' });
    });
module.exports = router;
