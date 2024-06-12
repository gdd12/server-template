const Sequelize = require('sequelize');
const config = require('config')
const { 
  database: {
    user: User,
    password: Password,
    database: Database,
    host: Host,
    dialect: Dialect
  }
} = config;

const sequelize = new Sequelize(Database, User, Password, {
  host: Host,
  dialect: Dialect
});

const IssueDBConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sq: sequelize, IssueDBConnection}