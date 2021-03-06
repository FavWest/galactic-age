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

  test ('getLifeExpectancy("Mars") should return remaining years of life on Mars', () => {
    expect(planet.getLifeExpectancy("Mars")).toEqual(15);
  });

  test ('getLifeExpectancy("Jupiter") should return remaining years of life on Jupiter', () => {
    expect(planet.getLifeExpectancy("Jupiter")).toEqual(2);
  });

  test ('if getLifeExpectancy() receives an input that does not have a stored year value, it should return "Error: Planet not in record"', () => {
    expect(planet.getLifeExpectancy("Alpha Centauri 5")).toEqual("Error: Planet not in record");
  });

  test ('if age is greater than life expectancy, getLifeExpectancy should return that information plus the number of extra planet-years lived', () => {
    planet.age=100;
    expect(planet.getLifeExpectancy("Venus")).toEqual("You have exceeded your species's average life expectancy by 32 Venus years. Congratulations!");
  });
});