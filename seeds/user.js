const { User } = require('../models');

const userData = [
    {
        username: 'allisond',
        password: 'Ad1234'
    },
    {
        username: 'adamC',
        password: 'Ac1234'
    },
    {
        username: 'maryL',
        password: 'Ml1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;