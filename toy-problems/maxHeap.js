class Heap {
  constructor() {
    this.heap = [];
  }
  pop() {
    const first = this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = first;
    this.sinkDown();
    return max;
  }
  push(elem) {
    this.heap.push(elem);
    this.bubbleUp(this.heap.length - 1);
    return this.heap;
  }
  bubbleUp(i) {
    if (i > 0) {
      const parentI = Math.floor(i + 1 / 2) - 1;
      if (this.heap[parentI] < this.heap[i]) {
        [this.heap[parentI], this.heap[i]] = [this.heap[i], this.heap[parentI]]
        this.bubbleUp(parentI);
      }
    }
  }
  sinkDown(i = 0) {
    if (i < this.heap.length) {
      const leftChild = i * 2 + 1;
      const rightChild = i * 2 + 2;
      if (this.heap[leftChild] < this.heap[rightChild]) {
        if (this.heap[rightChild] > this.heap[i]) {
          [this.heap[i], this.heap[rightChild]] = [this.heap[rightChild], this.heap[i]]
          this.sinkDown(rightChild);
        }
      } else {
        if (this.heap[leftChild] > this.heap[i]) {
          [this.heap[i], this.heap[leftChild]] = [this.heap[leftChild], this.heap[i]]
          this.sinkDown(leftChild);
        }
      }
    }
  }
  check() {
    console.log(this.heap);
  }


}



const test = new Heap([4, 2, 6, 8, 7, 1]);
for (const elem of [4, 2, 6, 8, 7, 1]) {
  test.push(elem);
}
test.check();
test.pop();
test.check();
test.pop();
test.check();
test.pop();
test.check();
test.pop();
test.check();