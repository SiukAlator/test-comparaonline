/**Listado de tipos de productos: Cada producto posee propiedades obligatorias:
 * name: Nombre del producto, este debe ser exactamente igual al producto a evaluar.
 * validation: Nombre de la función que validará el precio del producto.
 * degradeSellIn: Boolean que confirma si el producto se degrada en días
*/
const typesProducts = [{
    'name': 'Full Coverage',
    'validation': 'fullCoverageValidation',
    'degradeSellIn': true
}, {
    'name': 'Mega Coverage',
    'validation': 'megaCoverageValidation',
    'degradeSellIn': false
}, {
    'name': 'Special Full Coverage',
    'validation': 'specialFullCoverageValidation',
    'degradeSellIn': true
}, {
    'name': 'Super Sale',
    'validation': 'superSaleValidation',
    'degradeSellIn': true
}];


/**Listado de funciones*/

exports.isRegister = function (name) {
    let index = typesProducts.map(function (e) {
        return  ((e.name).toLowerCase()).trim()
    }).indexOf(((name).toLowerCase()).trim());
    if (index >= 0) {
        return {
            'function': typesProducts[index].validation,
            'degrade': typesProducts[index].degradeSellIn
        }
    }
    else {
        return {
            'function': 'normalValidation',
            'degrade': true
        }
    }
}

function sellInValidation(sellIn, price) {
    price += 1;
    if (price < 50) {
        if (sellIn < 11)
            price += 1;
        if (sellIn < 6)
            price += 1;
    }
    return price;
}

exports.specialFullCoverageValidation = function (sellIn, price) {
    if (price < 50) {
        price = sellInValidation(sellIn, price)
    }
    if (price < 0) {
        price = 0
    }
    return price;
}

exports.superSaleValidation = function (sellIn, price) {
    if (price > 3) {
        price -= 1;
    }
    else if (price > 0) {
        price -= 2;
    }
    if (price < 0)
        price = 0;
    return price;
}

exports.normalValidation = function (sellIn, price) {
    if (price > 0) {
        price -= 1;
        if (sellIn < 0 && price > 0)
            price -= 1;
    }
    return price;
}

exports.megaCoverageValidation = function (sellIn, price) {
    return price;
}

exports.degradeSellIn = function (sellIn) {
    sellIn -= 1;
    return sellIn;
}

exports.fullCoverageValidation = function (sellIn, price) {
    if (price < 50) {
        price += 1;
        if (sellIn < 0 && price < 50) {
            price += 1
        }
    }
    return price;
}