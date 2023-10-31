import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("app.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL , email TEXT NOT NULL, token TEXT NOT NULL)",
        [],
        () => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY NOT NULL, localId TEXT NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, thumbnail TEXT NOT NULL)',
            [],
            () => resolve(),
            (_, error) => {
              reject(error);
            }
          );
        },

        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const insertSession = ({ localId, email, token }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);",
        [localId, email, token],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const fetchSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM sessions",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const deleteSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM sessions",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};


export const insertFavoriteRecipe = (id, localId) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO favorites (id, localId) VALUES (?, ?);",
        [id, localId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const deleteFavoriteRecipe = (id, localId)  => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM favorites WHERE id = ? AND localId = ?;",
        [id, localId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const fetchFavoriteRecipes = ({ id, localId }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM favorites WHERE localId = ?',
        [localId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};
