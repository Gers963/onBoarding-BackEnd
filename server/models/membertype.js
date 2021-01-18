const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberType extends Model {
    static associate(models) {
      // define association here
    }
  };
  MemberType.init({
    description: DataTypes.STRING,
    situation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MemberType',
  });
  return MemberType;
};