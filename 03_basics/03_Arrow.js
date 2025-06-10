const user = {
    username: "naresh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function maa(){
//     let username = "naresh"
//     console.log(this.username);
// }

// maa()

// const maa = function () {
//     let username = "naresh"
//     console.log(this.username);
// }

const maa = () => {
    let username = "naresh"
    console.log(this);
}


// maa()

// const addTow = (num1, num2) => {
//     return num1 + num2
// }

// const addTow = (num1, num2) =>  num1 + num2

// const addTow = (num1, num2) =>  (num1 + num2)

const addTow = (num1, num2) =>  ({username: "naresh"})


console.log(addTow(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()