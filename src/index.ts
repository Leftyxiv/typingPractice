import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([5, 4, 3, 2, 1, 12, 14, 86, -23]);
const sorter = new Sorter(numbers);
sorter.sort();
console.log(sorter.collection);