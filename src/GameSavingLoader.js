import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    (async () => {
      try {
        const readed = await read();
        const jsoned = await json(readed);
      } catch {
        throw new Error('Что-то пошло не так')
      } finally {
        const gameSaving = new GameSaving();
        return gameSaving = jsoned;
      }
    })();
  }
}
