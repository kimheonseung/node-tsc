const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    ID: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "고유키"
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "부서명",
      unique: "NAME"
    },
    DESCRIPTION: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "설명"
    },
    DEPARTMENT_ID: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      comment: "상위부서 고유키",
      references: {
        model: 'DEPARTMENT',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'DEPARTMENT',
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
        name: "NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NAME" },
        ]
      },
      {
        name: "FK_DEPARTMENT_DEPARTMENT",
        using: "BTREE",
        fields: [
          { name: "DEPARTMENT_ID" },
        ]
      },
    ]
  });
};
