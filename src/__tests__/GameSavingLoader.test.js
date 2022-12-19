import GameSavingLoader from '../GameSavingLoader';

test('should load', () => {
  const save = GameSavingLoader.load();
  expect(save).toEqual();
});

test('should throw error', () => {
  
  expect(GameSavingLoader.load(123)).toThrow('Что-то пошло не так');
});