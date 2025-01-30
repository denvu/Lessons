"use strict";

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(name, price, amount = 1) {
    const goods = {
      name: name,
      price: price,
      amount: amount,
    };
    this.items.push(goods);
  },
  increaseCount(num) {
    this.count += num;
  },
  calculateItemPrice() {
    this.count = this.items.reduce((quantity, item) => {
      return quantity + item.amount;
    }, 0);
    return this.items.reduce((sum, item) => {
      return sum + item.price * item.amount;
    }, 0);
  },
  clear() {
    this.items = [];
    this.count = 0;
    this.totalPrice = 0;
  },
  print() {
    const itemsJSON = JSON.stringify(this.items);
    console.log(itemsJSON);

    console.log(`Общая стоимость корзины: ${cart.totalPrice}`);
  },
};

cart.add("Товар 1", 100);
cart.add("Товар 2", 200, 2);
cart.add("Товар 3", 300, 5);
cart.print();
