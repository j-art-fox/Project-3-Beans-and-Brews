const db = require('./connection');
const { User } = require('../models');

db.once('open', async () => {

  await User.deleteMany();

  await User.create({
    userName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    userName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
