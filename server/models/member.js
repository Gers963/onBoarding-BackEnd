const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    static associate(models) {
      this.belongsTo(models.MemberType, {
        as: 'MemberType',
        foreignKey: 'memberTypeId'
      })
    }
  };
  Member.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    memberTypeId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    situation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};