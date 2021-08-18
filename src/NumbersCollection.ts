import { Sorter } from './Sorter';
export class NumbersCollection extends Sorter {
  constructor(public data: number[]){
    super();
  };

  get length(): number {
    return this.data.length;
  }

  compare (leftIndex: number, secondIndex: number): boolean {
    return this.data[leftIndex] > this.data[secondIndex];
  }

  swap(leftIndex: number, secondIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[secondIndex];
    this.data[secondIndex] = temp;
   }
}

