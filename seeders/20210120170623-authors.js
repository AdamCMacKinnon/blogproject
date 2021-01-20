'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
 
 await queryInterface.bulkInsert('authors', [{
 firstName: 'Adam',
 lastName: 'MacKinnon',
 imageurl: 'www.image.com',
 email: 'mackinnon.adam@gmail.com',
 twitter: '@AdamCMacK',
 linkedin: 'www.https://www.linkedin.com/in/adam-mackinnon-18709083/',
 createdAt: new Date(),
 updatedAt: new Date()
 },{
  firstName: 'Ally',
  lastName: 'Deeter',
  imageurl: 'www.image.com',
  email: 'ally@me.com',
  twitter: '@AllyDeets',
  linkedin: 'https://www.linkedin.com/in/ally-deeter/',
  createdAt: new Date(),
 updatedAt: new Date()
 }, {
  firstName: 'Andrea',
  lastName: 'Meyers',
  imageurl: 'www.image.com',
  email: 'andrea@me.com',
  twitter: '@DontCallMeMyers',
  linkedin: 'https://www.linkedin.com/in/andreatmyers5/',
  createdAt: new Date(),
  updatedAt: new Date()
 
  }], {});
 
  },

  down: async (queryInterface, Sequelize) => {

await queryInterface.bulkDelete('authors', null, {});
  }
};
