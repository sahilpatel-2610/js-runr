
function sayMyName(){
    console.log("M");
    console.log("S");
    console.log("O");
    console.log("N");
    console.log("A");
    console.log("L");
}

// sayMyName()

// function addTowNumbers(number1, number2){
   
//     console.log(number1 + number2);
// }

function addTowNumbers(number1, number2){
   
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTowNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("naresh"))
// console.log(loginUserMessage("naresh"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "naresh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));