const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Elevate' },
    { name: 'Recover' },
    { name: 'Vegan' },
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'LIFT3D Pre Workout',
      description: 'Energize your workout routine with our LIFT3D Pre Workout Lollipops. Designed to give you that extra kick, these lollipops are perfect for fitness enthusiasts looking for a sweet yet powerful boost.',
      image: 'lift3d-lollipops.jpg',
      category: categories[0]._id,
      price: 4.99,
      quantity: 500
    },
    {
      name: 'Whey-Out Whey Protein',
      description: 'Our Whey-Out Protein powder blends delicious taste with high-quality protein support, perfect for aiding recovery after an intense workout session.',
      image: 'whey-out.jpg',
      category: categories[1]._id,
      price: 29.99,
      quantity: 500
    },
    {
      name: 'Blaze and Glaze Protein Donuts',
      description: 'Indulge guilt-free with our Blaze and Glaze Protein Donuts. Packed with protein and glazed to perfection, these donuts offer a delicious way to refuel.',
      image: 'blaze-glaze-donuts.jpg',
      category: categories[1]._id,
      price: 12.99,
      quantity: 20
    },
    {
      name: 'Ethereal Energy Drink',
      description: 'Stay charged with our Ethereal Energy Drink. A perfect blend of energy and taste that keeps you going through the day or through a strenuous workout.',
      image: 'ethereal-energy-drink.jpg',
      category: categories[1]._id,
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Canna-Busy Coffee',
      description: 'Our Canna-Busy Coffee is a unique blend for those who need an extra boost. This coffee is infused with quality ingredients to kickstart your day or energize your workout sessions.',
      image: 'canna-busy-coffee.jpg',
      category: categories[1]._id,
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Gym-Rat Ganja Gummies',
      description: 'Our Gym-Rat Ganja Gummies provide a delicious and convenient way to consume your daily dose of wellness. Infused with natural ingredients, these gummies are perfect for those on a vegan diet.',
      image: 'gym-rat-gummies.jpg',
      category: categories[2]._id,
      price: 19.99,
      quantity: 30
    },
    {
      name: 'Green Ganja Avocado Oil',
      description: 'Green Ganja Avocado Oil is an excellent choice for health-conscious individuals. This versatile oil is perfect for cooking, dressing, or as part of your skincare routine.',
      image: 'avocado-oil.jpg',
      category: categories[2]._id,
      price: 15.99,
      quantity: 30
    },
    {
      name: 'Puff-Puff Pass Cream Puffs',
      description: 'Enjoy our Puff-Puff Pass Cream Puffs, a perfect treat for those who appreciate a little indulgence. These cream puffs are fluffy, creamy, and irresistibly delicious.',
      image: 'cream-puffs.jpg',
      category: categories[1]._id,
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Herbal Hemp Protein Bars',
      description: 'Herbal Hemp Protein Bars are your go-to snack for a quick, healthy, and satisfying pick-me-up. Made with natural hemp, these bars are perfect for an on-the-go lifestyle.',
      image: 'hemp-bars.jpg',
      category: categories[2]._id,
      price: 2.99,
      quantity: 1000
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
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
