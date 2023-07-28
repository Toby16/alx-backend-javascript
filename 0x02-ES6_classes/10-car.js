const cloneSymbol = Symbol.for('cloneSymbol'); // eslint-disable-line

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const { constructor } = Object.getPrototypeOf(this);
    const clonedCar = new constructor(this._brand, this._motor, this._color);
    return clonedCar;
  }
}

/*
class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2);
*/
