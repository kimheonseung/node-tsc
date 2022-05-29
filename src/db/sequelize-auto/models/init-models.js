var DataTypes = require("sequelize").DataTypes;
var _authority = require("./authority");
var _department = require("./department");
var _user = require("./user");
var _userAuthority = require("./userAuthority");
var _userDepartment = require("./userDepartment");
var _userToken = require("./userToken");

function initModels(sequelize) {
  var authority = _authority(sequelize, DataTypes);
  var department = _department(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var userAuthority = _userAuthority(sequelize, DataTypes);
  var userDepartment = _userDepartment(sequelize, DataTypes);
  var userToken = _userToken(sequelize, DataTypes);

  department.belongsTo(department, { as: "DEPARTMENT", foreignKey: "DEPARTMENT_ID"});
  department.hasMany(department, { as: "departments", foreignKey: "DEPARTMENT_ID"});
  userAuthority.belongsTo(department, { as: "AUTHORITY", foreignKey: "AUTHORITY_ID"});
  department.hasMany(userAuthority, { as: "user_authorities", foreignKey: "AUTHORITY_ID"});
  userDepartment.belongsTo(department, { as: "DEPARTMENT", foreignKey: "DEPARTMENT_ID"});
  department.hasMany(userDepartment, { as: "user_departments", foreignKey: "DEPARTMENT_ID"});
  userAuthority.belongsTo(user, { as: "USER", foreignKey: "USER_ID"});
  user.hasMany(userAuthority, { as: "user_authorities", foreignKey: "USER_ID"});
  userDepartment.belongsTo(user, { as: "USER", foreignKey: "USER_ID"});
  user.hasMany(userDepartment, { as: "user_departments", foreignKey: "USER_ID"});
  userToken.belongsTo(user, { as: "USER", foreignKey: "USER_ID"});
  user.hasOne(userToken, { as: "user_token", foreignKey: "USER_ID"});

  return {
    authority,
    department,
    user,
    userAuthority,
    userDepartment,
    userToken,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
