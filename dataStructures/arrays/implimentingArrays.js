// creating an arrays in js
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    this.this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("hi again");
newArray.push("hi one more time");
newArray.push("!!!!");
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.unshift("new");
console.log("After unshift", newArray);
