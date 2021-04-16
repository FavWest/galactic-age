import Planet from '../src/planet.js';

describe('Planet', () => {
  let planet;

  beforeEach(() => {
    planet = new Planet(50);
  });

  test ('should create a Planet object with input as the age property', () => {
    expect(planet.age).toEqual(50);
  });

  test ('getMercuryAge() should return age in Mercury years', () => {
    expect(planet.getMercuryAge()).toEqual(208);
  });

  test ('getVenusAge() should return age in Venus years', () => {
    expect(planet.getVenusAge()).toEqual(80);
  });

  test ('getMarsAge() should return age in Mars years', () => {
    expect(planet.getMarsAge()).toEqual(26);
  });

  test ('getJupiterAge() should return age in Jupiter years', () => {
    expect(planet.getJupiterAge()).toEqual(4);
  });

  test ('getLifeExpectancy("Mercury") should return remaining years of life on Mercury', () => {
    expect(planet.getLifeExpectancy("Mercury")).toEqual(125);
  });

  test ('getLifeExpectancy("Venus") should return remaining years of life on Venus', () => {
    expect(planet.getLifeExpectancy("Venus")).toEqual(48);
  });
});