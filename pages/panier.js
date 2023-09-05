/////basket//////

function saveBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
}

export const getBasket = () => {
  let basket = localStorage.getItem("basket");
  if (basket == null) {
    return [];
  } else {
    return JSON.parse(basket);
  }
};

export const addBasket = (product) => {
  let basket = getBasket();

  let foundProduct = "";
  if (Object.keys(basket).length) {
    foundProduct = basket.find((p) => p.id == product.id);
  }
  if (foundProduct != undefined && foundProduct != "") {
    foundProduct.quantity++;
  } else {
    product.quantity = 1;
    basket.push(product);
  }
  saveBasket(basket);
};

const removeFromBasket = (product) => {
  let basket = getBasket();
  basket = basket.filter((p) => p.id != product.id);
  saveBasket(basket);
};

export const changeQuantity = (product, quantity) => {
  let basket = getBasket();
  let foundProduct = basket.find((p) => p.id === product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity += quantity;

    if (foundProduct.quantity <= 0) {
      removeFromBasket(foundProduct);
    } else {
      saveBasket(basket);
    }
  }
};

const getNumberProduct = () => {
  let basket = getBasket();
  let number = 0;
  for (let product of basket) {
    number += product.quantity;
  }
  return number;
};

export const getTotalPrice = () => {
  let basket = getBasket();
  let total = 0;
  for (let product of basket) {
    total += product.quantity * product.price;
  }
  return total;
};

export const emptyBasket = () => {
  localStorage.clear();
};
