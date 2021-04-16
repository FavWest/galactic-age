import Planet from '../src/planet.js';

describe('Planet', () => {
  let planet;

  beforeEach(() => {
    planet = new Planet(50);
  });

  test ('should create a Planet object with input as the age property', () => {
    expect(planet.age).toEqual(50);
  });

  test ('getMercuryAge should return age in Mercury years', () => {
    expect(planet.getMercuryAge()).toEqual(208);
  });

  test ('getVenusAge should return age in Venus years', () => {
    expect(planet.getVenusAge()).toEqual(80);
  });

});