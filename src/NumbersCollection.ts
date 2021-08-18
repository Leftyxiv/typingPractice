export class NumbersCollection {
  constructor(public data: number[]){};

  get length(): number {
    return this.data.length;
  }

  compare (leftIndex: number, secondIndex: number): boolean {
    return this.data[leftIndex] < this.data[secondIndex];
  }

  swap(leftIndex: number, secondIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[secondIndex];
    this.data[secondIndex] = temp;
   }
}