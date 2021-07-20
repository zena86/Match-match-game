import User from '../models/user.model';

export interface IScoreService {
  putUser(user: User): void;

  getTopUsers(topNum: number, callBack: (topUsers: User[]) => void): void;
}
export default class ScoreService implements IScoreService {
  private databaseName = 'zena86';

  private getDbContext(callBack: (db: IDBDatabase) => void) {
    const openRequest = indexedDB.open(this.databaseName, 1);
    openRequest.onupgradeneeded = () => {
      const db = openRequest.result;
      if (!db.objectStoreNames.contains('users')) {
        const usersStorage = db.createObjectStore('users', {
          keyPath: 'id',
          autoIncrement: true,
        });
        usersStorage.createIndex('scoreIdx', 'score');
      }
    };
    openRequest.onerror = () => {
      throw new Error(`${openRequest.error}`);
    };
    openRequest.onsuccess = () => {
      const db = openRequest.result;
      callBack(db);
    };
  }

  putUser(user: User): void {
    this.getDbContext((db) => {
      const addRequest = db
        .transaction('users', 'readwrite')
        .objectStore('users')
        .put(user);
      addRequest.onsuccess = () => {
        user.updateId(+addRequest.result.toString());
      };
      addRequest.onerror = () => {
        throw new Error(
          'Unable to add data\r\nUser is already exist in your database!',
        );
      };
    });
  }

  getTopUsers(topNum: number, callBack: (topUsers: User[]) => void): void {
    this.getDbContext((db) => {
      const scoreIndex = db
        .transaction('users', 'readonly')
        .objectStore('users')
        .index('scoreIdx');
      const cursorRequest = scoreIndex.openCursor(null, 'prev');
      const topUserArr: User[] = [];
      cursorRequest.onsuccess = () => {
        const cursor = cursorRequest.result;
        if (cursor) {
          topUserArr.push(cursor.value);
          if (topUserArr.length < topNum) {
            cursor.continue();
          } else {
            callBack(topUserArr);
          }
        } else {
          callBack(topUserArr);
        }
      };
      cursorRequest.onerror = () => {
        throw new Error(`${cursorRequest.error}`);
      };
    });
  }
}
