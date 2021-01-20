'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

await queryInterface.bulkInsert('blogs', [{
title: 'Why not just use SQL?',
authorID: 4,
body: 'Seriously, why not?',
isPublished: 'Y',
publishDate: new Date(),
createdAt: new Date(),
updatedAt: new Date()
}, {

title: 'JavaScript is my favorite thing ever',
authorID: 5,
body: 'better than anything',
isPublished: 'Y',
publishDate: new Date(),
createdAt: new Date(),
updatedAt: new Date()
}, {
title: 'Id rather be HTMLing',
authorID: 6,
body: 'Its way more fun',
isPublished: 'N',
publishDate: new Date(),
createdAt: new Date(),
updatedAt: new Date()


 }], {});

  },

  down: async (queryInterface, Sequelize) => {

await queryInterface.bulkDelete('People', null, {});
  }
};
