'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    pronoun: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    level: DataTypes.INTEGER,
    payment_info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students'
  });
  
  return Student;
};