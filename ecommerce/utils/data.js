import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'jhon',
      email: 'markbrvaldez@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },

    {
      name: 'mark',
      email: 'valdez@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'FREE SHIRT A',
      slug: 'FREE-SHIRT A',
      category: 'SHIRT',
      image: '/images/tshirtC.png',
      price: 70,
      brand: 'NIKE',
      rating: 4.5,
      numReviews: 8,
      countInStock: 10,
      description: 'popular shirt',
    },
    {
      name: 'FREE SHIRT B',
      slug: 'FREE-SHIRT B',
      category: 'SHIRT',
      image: '/images/tshirtB.png',
      price: 70,
      brand: 'NIKE',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'popular shirt',
    },
    {
      name: 'FREE SHIRT C',
      slug: 'FREE-SHIRT C',
      category: 'SHIRT',
      image: '/images/tshirtA.png',
      price: 70,
      brand: 'NIKE',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'popular shirt',
    },
    {
      name: 'FREE SHIRT D',
      slug: 'FREE-SHIRT D',
      category: 'SHIRT',
      image: '/images/tshirtB.png',
      price: 70,
      brand: 'NIKE',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'popular shirt',
    },
  ],
};

export default data;
