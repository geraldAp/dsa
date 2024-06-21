// Create a function that reverses a string;
// 'Hi My name is Andrei'  should be
//  ierdnA si eman yM iH

function reverse(str) {
  // do checks to ensure the input is a string or the input exists
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm thats not good";
  }
  //   convert it to an array
  const backwards = [];

  // total  items in he array
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  console.log(backwards);
  // convert it back to a string
  return backwards.join("");
}
// js built in simplified method
function reverse2(str) {
  return str.split("").reverse().join("");
}
// modern js way
const reverse3 = (str) => [...str].reverse().join("");

console.log(reverse("Hi My name is Andrei"));
