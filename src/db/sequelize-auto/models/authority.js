const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authority', {
    ID: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "고유키"
    },
    NAME: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "권한명",
      unique: "NAME"
    },
    DESCRIPTION: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "설명"
    }
  }, {
    sequelize,
    tableName: 'AUTHORITY',
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
    ]
  });
};
