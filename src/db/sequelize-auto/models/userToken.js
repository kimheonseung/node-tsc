const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userToken', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "고유키"
    },
    USER_ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "유저 고유키",
      references: {
        model: 'USER',
        key: 'ID'
      },
      unique: "FK_USER_USER_TOKEN"
    },
    REFRESH_TOKEN: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "리프레시 토큰",
      unique: "REFRESH_TOKEN"
    }
  }, {
    sequelize,
    tableName: 'USER_TOKEN',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "USER_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
      {
        name: "REFRESH_TOKEN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "REFRESH_TOKEN" },
        ]
      },
    ]
  });
};
