const sqlite3 = require('sqlite3').verbose();
import dotenv from "dotenv";

dotenv.config();

// Singleton
let connection: any= null;
function createSQLiteConnection(): any {
  try {
    if (!connection) {
      connection = new sqlite3.Database('users.db');

      /*connection.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT
      )`);*/

    }  
    return connection;
  } catch (error) {
    console.error('Error creating SQLite connection:', error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}

export default createSQLiteConnection();