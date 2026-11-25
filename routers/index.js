const express = require('express');
const router = express.Router();
let communities = [{ id: 1, name: "Tech Hub", description: "For developers" }];
router.get('/communities', (req, res) => res.json(communities));
router.post('/communities', (req, res) => {
  const { name, description } = req.body;
  if (!name) { const e = new Error('Name is required'); e.status = 400; throw e; }
  const newCom = { id: communities.length + 1, name, description };
  communities.push(newCom);
  res.status(201).json(newCom);
});
module.exports = router;p
