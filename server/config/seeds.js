const db = require('./connection');
const { User } = require('../models');
const Category = require('../models/Category');
const Product = require('../models/Product');
// comment
db.once('open', async () => {

  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Hot Drinks' },
    { name: 'Cold Drinks' },
    { name: 'Food' },
    { name: 'Whole Beans' },
    { name: 'Merchandise' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Cold Brew',
      description:`We've spent a long time perfecting our cold brew process. Now we're proud to offer a cold brew with our signature High-Altitude Roasted beans brewed over twelve hours, resulting in a smooth, full-bodied taste with hints of cocoa and caramel.`,
      image: 'Cold-Brew_400-Copy-300x200.jpg.webp',
      category: categories[1]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Hot Eggnog Latte',
      description:`Rich, creamy eggnog and skim milk with fresh brewed espresso lightly dusted with cinnamon and nutmeg, delicious decadence!`,
      image: 'Eggnog-300x300.jpg.webp',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Cold Eggnog Latte',
      description:`Rich, creamy eggnog and skim milk with fresh brewed espresso lightly dusted with cinnamon and nutmeg, delicious decadence!`,
      image: 'Eggnog-300x300.jpg.webp',
      category: categories[1]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Cane & Cream Cold Brew',
      description:`Our signature full-bodied cold brew with a splash of cream and lightly sweetened with cane sugar.`,
      image: 'Cane-Cream_400-300x200.jpg.webp',
      category: categories[1]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Cappuccino',
      description:
        'Our Beans cappuccino combines creamy steamed milk, piping-hot espresso, and a generous helping of foamy froth. Pair with a fresh biscotti and sink into a cozy armchair.',
      image: 'BB_Hot-Cappucinno-300x200.jpg.webp',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Caramel Cielo',
      description: `Feeling a little decadent? This signature espresso drink's special recipe includes a frothy topping and a drizzle of real caramel sauce. It's the perfect balance of a pick-me-up and a treat.`,
      image: 'BB_Hot-Caramel-Cielo-300x200.jpg.webp',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Caf?? Latte',
      category: categories[0]._id,
      description:
      `It's a classic for good reason: espresso, steamed milk, and topped with the perfect dollop of froth. It's perfect for those new to espresso drinks--and perfect for seasoned folks who love a traditional go-to.`,
      image: 'cafe-latte-300x200.jpg.webp',
      price: 4.99,
      quantity: 20
    },
    {
      name: 'Pumpkin Pie Fritalia???',
      category: categories[1]._id,
      description:
      `It's a classic for good reason: espresso, steamed milk, and topped with the perfect dollop of froth. It's perfect for those new to espresso drinks--and perfect for seasoned folks who love a traditional go-to.`,
      image: 'Pumpkin-PF-300x300.jpg.webp',
      price: 7.99,
      quantity: 20
    },
  ]);

  console.log('products seeded');


  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
