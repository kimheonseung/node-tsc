const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userAuthority', {
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
      }
    },
    AUTHORITY_ID: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      comment: "권한 고유키",
      references: {
        model: 'DEPARTMENT',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'USER_AUTHORITY',
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
        name: "UK_USER_ID_AUTHORITY_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "AUTHORITY_ID" },
        ]
      },
      {
        name: "FK_USER_AUTHORITY_AUTHORITY",
        using: "BTREE",
        fields: [
          { name: "AUTHORITY_ID" },
        ]
      },
    ]
  });
};
