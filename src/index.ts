import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([5, 4, 3, 2, 1, 12, 14, 86, -23]);
numbers.sort()
const characters = new CharactersCollection('mannyisamazing');
characters.sort()
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(6);
linkedList.add(14);
linkedList.sort();
console.log(numbers.data);
console.log(characters.data);
