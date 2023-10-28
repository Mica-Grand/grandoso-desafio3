import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('sessions.db')

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL , email TEXT NOT NULL, token TEXT NOT NULL)',
        [],
        () => resolve(),
        (_, error) => {
          reject(error)
        }
      )
    })
  })
  return promise
}

export const insertSession = ({ localId, email, token }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);',
        [localId, email, token],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      )
    })
  })
  return promise
}

export const fetchSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM sessions',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      )
    })
  })
  return promise
}

export const deleteSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM sessions',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      )
    })
  })
  return promise
}


export const initFavorites = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS favorites (localId TEXT NOT NULL, recipeId INTEGER);',
        [],
        () => {
          console.log("Table 'favorites' created successfully.");
          resolve();
        },
        (_, error) => {
          console.log("Failed to create table 'favorites':", error);
          reject(error);
        }
      );
    });
  });
}


export const addFavoriteRecipe = (localId, recipeId) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO favorites (localId, recipeId) VALUES (?, ?);',
        [localId, recipeId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
    return promise;
  });
};

export const fetchFavoriteRecipes = (localId) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT recipeId FROM favorites WHERE localId = ?;',
        [localId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
    return promise;
  });
};

export const removeFavoriteRecipe = (localId, recipeId) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM favorites WHERE localId = ? AND recipeId = ?;',
        [localId, recipeId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
    return promise;
  });
};
