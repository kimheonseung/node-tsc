const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "고유키"
    },
    USERNAME: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "유저 ID",
      unique: "USERNAME"
    },
    PASSWORD: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "비밀번호(Bcrypt)"
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "이름"
    },
    NICKNAME: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "닉네임",
      unique: "NICKNAME"
    },
    EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "이메일",
      unique: "EMAIL"
    },
    PHONE: {
      type: DataTypes.STRING(13),
      allowNull: true,
      comment: "휴대폰",
      unique: "PHONE"
    },
    ACCESS_IP: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "*.*.*.*",
      comment: "로그인 가능 IP"
    },
    LOGIN_FAIL_IP: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
      comment: "로그인 실패한 IP"
    },
    LOGIN_FAIL_COUNT: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "로그인 실패 횟수"
    },
    STATUS_MESSAGE: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "상태 메시지"
    },
    BACKGROUND_IMAGE: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "배경 이미지"
    },
    PROFILE_IMAGE: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "프로필 이미지"
    },
    LOGIN_AT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "로그인 시각"
    },
    LOGIN_FAILED_AT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1970-01-01 09:00:00",
      comment: "로그인 실패 시각"
    },
    PASSWORD_CHANGED_AT: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "비밀번호 변경 시각"
    }
  }, {
    sequelize,
    tableName: 'USER',
    timestamps: true,
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
        name: "USERNAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USERNAME" },
        ]
      },
      {
        name: "NICKNAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NICKNAME" },
        ]
      },
      {
        name: "EMAIL",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EMAIL" },
        ]
      },
      {
        name: "PHONE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PHONE" },
        ]
      },
    ]
  });
};
