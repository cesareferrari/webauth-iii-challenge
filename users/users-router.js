const express = require('express');
const router = express.Router();
const Users = require('./users-model.js');

// GET /api/users/

router.get('/', async (req, res) => {
  const users = await Users.all();

  try {
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(400).json({message: "No users"});
    }
  } catch (err) {
    res.status(500).json({message: "Error retrieving users"});
  }
});

module.exports = router;
