import json from './parser';
import read from './reader';

export class GameSaving {

}

export default class GameSavingLoader {
  static load() {
    read()
      .then((responce) => {
        return json(responce);
      })
      .then((response) => {
        const gameSaving = new GameSaving()
        gameSaving = response;
      });
  }
}
