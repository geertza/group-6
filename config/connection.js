const Sequelize = require("sequelize");
const { connect } = require("../control/controller");

if (process.env.JAWSDB_URL){
  connection = mysql.createConection(process.env.JAWSDB_URL);  
}else{

const sequelize = new Sequelize("kitchenBoss", "root", "password", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});}
module.exports = sequelize;
