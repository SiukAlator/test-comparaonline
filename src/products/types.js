var functions = require('./functions');

/**Función que permite a través de un TAG obtener el valor de la función*/
function define(name, value) {
	Object.defineProperty(exports, name, {
    value: value,
    enumerable: true,
    writable: false,
    configurable:false
	});
}

/**Se declaran funciones de validación */
define("isTypeRegister", functions.isRegister);
define("fullCoverageValidation", functions.fullCoverageValidation);
define("megaCoverageValidation", functions.megaCoverageValidation);
define("specialFullCoverageValidation", functions.specialFullCoverageValidation);
define("superSaleValidation", functions.superSaleValidation);
define("normalValidation", functions.normalValidation);
define("degradeSellIn", functions.degradeSellIn);