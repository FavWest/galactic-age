import Planet from '../src/planet.js';

describe('Planet', () => {
  test ('should create a Planet object with input as the age property', () => {
    let planet = new Planet(50);
    expect(planet.age).toEqual(50);
  });
});