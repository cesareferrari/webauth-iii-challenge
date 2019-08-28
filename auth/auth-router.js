const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model.js');


// POST /api/register
router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

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
