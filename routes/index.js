const express = require('express');
const router = express.Router();

let communities = [
  { id: 1, name: "Tech Hub", description: "For developers" }
];

router.get('/communities', (req, res) => {
  res.json(communities);
});

router.post('/communities', (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    const err = new Error('Name is required');
    err.status = 400;
    throw err;
  }
  const newCom = { id: communities.length + 1, name, description };
  communities.push(newCom);
  res.status(201).json(newCom);
});

module.exports = router;
