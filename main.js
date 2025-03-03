'use strict';

const ads = document.querySelector('.ads');
ads.remove();

const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');
const titles = document.querySelectorAll('.item__title');
const propsLists = document.querySelectorAll('.props__list');
const propsItemsTwo = document.querySelectorAll('.props__item_two');
const propsItemsFour = document.querySelectorAll('.props__item_four');

const cloneList3 = propsLists[3].cloneNode(true);
const cloneList5 = propsLists[4].cloneNode(true);

item[3].after(item[0]);
propsItemsFour[2].after(propsItemsFour[5]);
propsLists[3].replaceWith(cloneList5);
propsLists[4].replaceWith(cloneList3);
propsLists[2].append(propsItemsTwo[8]);
propsLists[2].append(propsItemsTwo[9]);
titles[2].innerText = "This и прототипы объектов";
titles[4].replaceWith(titles[1]);
titles[3].replaceWith(titles[4]);
propsLists[2].insertAdjacentHTML('beforebegin', `<h2 class="item__title">Область видимости и замыкание</h2>`)