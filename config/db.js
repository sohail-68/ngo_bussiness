const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "ngo_business", "root", "", 
  
  {
  host: "localhost",
  dialect: "mysql",
});


sequelize
  .authenticate()
  .then(() => console.log("connected to the database successfully!"))
  .catch((err) => console.error("something went wrong", err));

module.exports = sequelize;
