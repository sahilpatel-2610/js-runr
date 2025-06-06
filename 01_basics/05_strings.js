const name = "naresh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${50}`);

const gameName = new String('naresh-hc-com')

// console.log(gameName[0]);
// console.log(gameName._proto_);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  naresh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://naresh.com/naresh%20bhavnagar"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
