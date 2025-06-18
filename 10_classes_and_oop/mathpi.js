const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const mid = {
    name: "night mid",
    price: 10000000,
    isAvailable: true,

    orderMid: function(){
        console.log("mid not available");
    }
}

console.log(Object.getOwnPropertyDescriptor(mid, "name"));

Object.defineProperty(mid, 'price', {
    // writable: false,
    enumerable: true,
  
}) 

console.log(Object.getOwnPropertyDescriptor(mid, "price"));

for (let [key, value] of Object.entries(mid)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}