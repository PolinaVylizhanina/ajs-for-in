import sortPlayer from '../app';

const hero = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('Must sort correct', () => {
  expect(sortPlayer(hero, ['name', 'level'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('Must sort correct without order', () => {
  expect(sortPlayer(hero)).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});

test('Must sort correct when order insludes more 2 elements', () => {
  expect(sortPlayer(hero, ['level', 'defence', 'health', 'name', 'attack'])).toEqual([
    { key: 'level', value: 2 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
  ]);
});
