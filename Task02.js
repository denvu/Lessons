'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = allCashbox.reduce((sum, current) => sum + current, 0) / allCashbox.length;

console.log('Средний чек - ', getAverageValue);