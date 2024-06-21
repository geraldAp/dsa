//Implementing a hash table

class HashTable {
  constructor(size) {
    this.data = new Array(size); // another way of instantiating an array in js
  }

  // this is basically a private property although it can be accessed it is a developer standard that says it shouldn't be accessed
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    console.log(hash);
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    console.table(this.data);
  }

  get(key) {
    console.log("The key  : ", key);
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.table(currentBucket);
    if (currentBucket) {
      if (currentBucket.length === 1) {
        const value = currentBucket[0][1];
        console.log("Value:", value);
        return value;
      } else {
        for (let i = 0; i < currentBucket.length; i++) {
          if (currentBucket[i][0] === key) {
            const key = currentBucket[i][0];
            const value = currentBucket[i][1];
            console.log(`looped data - ${key} : ${value}`);
            return value;
          }
        }
      }
    }
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    console.info(keysArray)
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("apple", 30);
myHashTable.set("pear", 300);
myHashTable.set("grape", 3000);
myHashTable.set("papaya", 30000);
myHashTable.set("orange", 3);
// myHashTable.get("apples");
// myHashTable.get("apple");
myHashTable.keys()

