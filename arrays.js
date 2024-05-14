const strings = ['a', 'b','c','d']
// 4x4 = 16bytes of storage 
console.log(strings[2])

// push method
strings.push('e') // o(1) we are just adding we are not looping through anything 


// pop
strings.pop() 
strings.pop() //O(1) 

//unshift adds to the first index
strings.unshift('x') //O(n)


// slice method add to the middle 
strings.splice(2,0,'alien') //O(n/2) since we changed and looped through half the array but then we simplify and take it as O(n)



console.log(strings)


// STATIC AND DYNAMIC ARRAY 
