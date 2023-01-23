import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
    const responce1 = await read();
    const responce2 = await json(responce1);
    let obj = JSON.parse(responce2);
    return new GameSaving(obj.id, obj.created, obj.userInfo);
  }
    catch(e) {
      alert(e)
    }
  }
}