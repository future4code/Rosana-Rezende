"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, image, price) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
    }
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getImage = function () {
        return this.image;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    return Product;
}());
exports.Product = Product;
