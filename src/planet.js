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
}