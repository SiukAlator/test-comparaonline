const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("Low Coverage", function() {
    const coTest = new CarInsurance([ new Product("Low Coverage", -21, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-22);
  });

  it("Special Full Coverage", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 1, 47) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(50);
  });

  it("Name lower case: full Coverage", function() {
    const coTest = new CarInsurance([ new Product("full coverage", -26, 50) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-27);
    expect(products[0].price).equal(50);
  });

  it("Name lower case: full Coverage", function() {
    const coTest = new CarInsurance([ new Product("full coverage", -26, 50) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-27);
    expect(products[0].price).equal(50);
  });


  it("Name with blanks: full Coverage  ", function() {
    const coTest = new CarInsurance([ new Product("full coverage  ", -26, 50) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-27);
    expect(products[0].price).equal(50);
  });

  it("Super Sale", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 0, 3) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(1);
  });

  it("Mega Coverage", function() {
    const coTest = new CarInsurance([ new Product("Mega Coverage", 0, 47) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(47);
  });


  it("Medium Coverage", function() {
    const coTest = new CarInsurance([ new Product("Medium Coverage", -14, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-15);
    expect(products[0].price).equal(0);
  });



});
