import { parse } from "@babel/core";

export default class 
Planet {
  constructor(age) {
  this.age = age;
  }

  getMercuryAge() {
    return parseInt(this.age/.24);
  }

  getVenusAge() {
    return parseInt(this.age/.62);
  }

  getMarsAge() {
    return parseInt(this.age/1.88);
  }

  getJupiterAge() {
    return parseInt(this.age/11.86);
  }

  getLifeExpectancy(planet) {
    let multiplier=0;
    switch(planet){
      case "Mercury":
        multiplier=.24;
        break;
      case "Venus":
        multiplier=.62;
        break;
      case "Mars":
        multiplier=1.88;
        break;
      case "Jupiter":
        multiplier=11.86;
        break;
      default:
        return "Error: Planet not in record";
    }
  return parseInt((80-this.age)/multiplier);
  }
}