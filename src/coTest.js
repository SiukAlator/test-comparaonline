var dictionary = require('./products/types');
class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (let i in  this.products) {
      let isRegister = dictionary.isTypeRegister(this.products[i].name);
      this.products[i].price = dictionary[isRegister.function](this.products[i].sellIn, this.products[i].price);

      if (isRegister.degrade)
      {
        this.products[i].sellIn = dictionary.degradeSellIn(this.products[i].sellIn);
      }
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
