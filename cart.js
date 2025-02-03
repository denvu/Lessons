'use strict';

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(name, price, amount = 1) {
    const goods = {
      name,
      price,
      amount,
    };
    this.items.push(goods);
  },
  increaseCount(num) {
    this.count += num;
  },
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 0.15;
    } else if (promocode === 'NEWYEAR') {
      this.discount = 0.21;
    } else {
      this.discount = 0;
    }
  },
  calculateItemPrice() {
    this.count = this.items.reduce((quantity, item) => quantity + item.amount, 0);
    const total = this.items.reduce((sum, item) => sum + item.price * item.amount, 0);
    return total * (1 - this.discount);
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

cart.add('Товар 1', 100);
cart.add('Товар 2', 200, 2);
cart.add('Товар 3', 300, 5);
cart.setDiscount = 'NEWYEAR';
cart.print();
