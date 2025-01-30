"use strict";

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(name, price, amount = 1) {
    const goods = {
      name: name,
      price: price,
      amount: amount,
    };
    this.items.push(goods);

    this.count += amount;

    this.totalPrice += price * amount;
  },
  increaseCount(num) {
    this.count += num;
  },
  calculateItemPrice() {
    this.totalPrice = this.items.reduce((sum, item) => {
      return sum + item.price * item.amount;
    }, 0);
    return this.totalPrice;
  },
  clear() {
    this.items = [];
    this.count = 0;
    this.totalPrice = 0;
  },
  print() {
    const itemsJSON = JSON.stringify(this.items);
    console.log(itemsJSON);

    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};

cart.add('Товар 1', 100);
cart.add('Товар 2', 200, 2);
cart.add('Товар 3', 300, 5);
cart.print();