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
router.post('/login', (req, res) => {
  const {username, password} = req.body;

  Users.findBy({username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({message: `Welcome ${user.username}`});
      } else {
        res.status(401).json({message: 'Invalid credentials'});
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;
