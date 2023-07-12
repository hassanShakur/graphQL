const express = require('express');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const router = express.Router();

const readUsers = async () => {
  const filePath = path.resolve(process.cwd(), 'db.json');
  const users = await fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });
  return JSON.parse(users);
};

router.get('/', async (_, res) => {
  const users = await readUsers();

  res.status(200).json({
    status: 'Success',
    results: users.length,
    users,
  });
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const users = await readUsers();
  const user = _.find(users, { id });

  res.status(200).json({
    status: 'Success',
    results: users.length,
    user,
  });
});

module.exports = router;
