"use strict";

const ul = document.querySelector(".ul");

const creatList = () => {
  const query = prompt("Введите строку");

  const creatLi = () => {
    const li = document.createElement("li");
    li.textContent = query;
    ul.append(li);

    creatList();
  };

  const deleteLi = () => {
    const lastLi = ul.lastElementChild;
      ul.removeChild(lastLi);
  };

  const clearList = () => {
    ul.innerHTML = "";
      return ul;
  }

  if (query === "del") {
    deleteLi();
  } else if(query === "clear") {
    clearList();
  } else if (query === "exit" || query === null) {
    return false;
  } else {
    creatLi();
  }
};

creatList();
