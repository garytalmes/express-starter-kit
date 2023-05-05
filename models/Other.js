const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Other extends Model {}

Other.init(
  {
    name: {
      type: DataTypes.STRING
    },
    qty: {
      type: DataTypes.INTEGER
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Other'
  }
);

module.exports = Other;
