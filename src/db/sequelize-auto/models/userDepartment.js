const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userDepartment', {
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
    DEPARTMENT_ID: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      comment: "부서 고유키",
      references: {
        model: 'DEPARTMENT',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'USER_DEPARTMENT',
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
        name: "UK_USER_ID_DEPARTMENT_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "DEPARTMENT_ID" },
        ]
      },
      {
        name: "FK_USER_DEPARTMENT_DEPARTMENT",
        using: "BTREE",
        fields: [
          { name: "DEPARTMENT_ID" },
        ]
      },
    ]
  });
};
