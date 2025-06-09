
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
console.log(loginUserMessage("naresh"));
