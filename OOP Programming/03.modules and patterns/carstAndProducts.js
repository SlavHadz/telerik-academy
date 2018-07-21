'use strict'


(function solve() {

    let products = [];
    
	function getProduct(productType, name, price) {
        return {
            productType: productType,
            name: name,
            price: price
        };
	}

	function getShoppingCart() {

        function add(product) {
            products.push(product);
            return this;
        }
	}

	return {
		getProduct: getProduct,
		getShoppingCart: getShoppingCart
	};
});