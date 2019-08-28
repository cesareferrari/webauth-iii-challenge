const express = require('express');
const router = express.Router();
const Users = require('../users/users-model.js');


// POST /api/register
router.post('/register', (req, res) => {
  const user = req.body;

  Users.add(user)
    .then(savedUser => {
      res.status(201).json(savedUser);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// POST /api/login

module.exports = router;
