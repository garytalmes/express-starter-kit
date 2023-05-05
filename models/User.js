const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class User extends Model {
  async validatePassword(suppliedPassword){
    return bcrypt.compare(suppliedPassword, this.password)
  }
}

User.init(
  {
    fname: {
      type: DataTypes.STRING
    },
    lname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [6]
      }
    }
  },
  {
    hooks: {
      beforeCreate: async function(data){
        data.password = await bcrypt.hash(data.password, 10)
        return data
      },
      beforeUpdate: async function(data){
        data.password = await bcrypt.hash(data.password, 10)
        return data
      }
    },
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'User'
  }
);

module.exports = User;
