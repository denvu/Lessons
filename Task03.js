'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {
    let result = arr.map(name => prefix + " " + name);
    console.log(result);
};

addPrefix(names, 'Mr');