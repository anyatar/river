import connection from "../db/sqlite";
import { IUser } from "../models/User";

const USER_TABLE = 'users';

class SQLiteRepository {

  save(user: IUser): Promise<boolean> {
    return new Promise((resolve, reject) => {
      connection.run(`INSERT INTO  ${USER_TABLE} (username, password) VALUES (?, ?)`, [user.username, user.password],
        (err: any, res: any) => {
          if (err) reject(err);
          resolve(true);
        }
      );
    });
  }

  getAll(): Promise<IUser[]> {
    return new Promise((resolve, reject) => {
      connection.all(`SELECT * FROM ${USER_TABLE}`, [],
        (err: any, rows: any) => {
          if (err) reject(err);
          if (rows) {
            const users: IUser[] = rows.map((row: any) => ({
              password: row.password,
              username: row.username,
              id: row.id
            }));
            resolve(users);
          } else {
            console.log("User not found.");
          }
        }
      );
    });
  }

  find(username: string): Promise<IUser | void> {
    console.log("find user " + username);
    const query = `
        SELECT * 
        FROM users 
        WHERE username = ? `;

    return new Promise((resolve, reject) => {
      connection.get(query, [username],
        (err: any, row: any) => {
          if (err) reject(err);
          console.log('row', row);
          if (row) {
            const user: IUser = {
              password: row.password,
              username: row.userName
            };
            resolve(user);
          } else {
            console.log("User not found.");
          }
        }
      );
    });
  }
};

export default new SQLiteRepository();