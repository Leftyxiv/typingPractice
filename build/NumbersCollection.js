"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    ;
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIndex, secondIndex) {
        return this.data[leftIndex] < this.data[secondIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, secondIndex) {
        var temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[secondIndex];
        this.data[secondIndex] = temp;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
