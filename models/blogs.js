'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
  models.authors.hasMany(models.blogs, {foreignKey: "authorID"})
    }
  };
  blogs.init({
    title: DataTypes.STRING,
    authorID: DataTypes.INTEGER,
    body: DataTypes.STRING,
    isPublished: DataTypes.STRING,
    publishDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'blogs',
  });
  return blogs;
};