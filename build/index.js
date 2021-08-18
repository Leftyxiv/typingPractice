"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbers = new NumbersCollection_1.NumbersCollection([5, 4, 3, 2, 1, 12, 14, 86, -23]);
var sorter = new Sorter_1.Sorter(numbers);
sorter.sort();
console.log(sorter.collection);
