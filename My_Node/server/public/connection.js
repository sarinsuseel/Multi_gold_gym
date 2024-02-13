const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" })
const chalk = require("chalk");


let dbConnectionString = process.env.DATABASE;

const new_connection = new MongoClient(dbConnectionString);

try {

new_connection.connect();
console.log(chalk.green("Successfully"), chalk.white("connected to "), chalk.blue("database"));

// const database = new_connection.db("nodeproject");
// await database.createCollection("my_first_node_project");

} catch (error) {
console.error("Error connecting to the database:", error);
} finally {
// Close the connection
new_connection.close();
}

module.exports = new_connection;

