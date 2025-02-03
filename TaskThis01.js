'use strict';

const rectangle = {
  width: 0,
  height: 0,

  set width(value) {
    if (typeof value === 'number' && value > 0) {
      this._width = value;
    } else {
      console.error('Значение не число');
    }
  },

  set height(value) {
    if (typeof value === 'number' && value > 0) {
      this._height = value;
    } else {
      console.error('Значение не число');
    }
  },

  get area() {
    return `${this._width * this._height}см`;
  },

  get perimeter() {
    return `${2 * (this._width + this._height)}см`;
  },
};

rectangle.width = 5;
rectangle.height = 5;

console.log(rectangle.area);
console.log(rectangle.perimeter);
