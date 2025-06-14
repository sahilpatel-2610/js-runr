// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const mid = new User("mid", "mid@gmail.com", "123")

// console.log(mid.encryptPassword());
// console.log(mid.changeUsername());


// // behine the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const night = new User("night", "night@gmail.com", "123")

console.log(night.encryptPassword());
console.log(night.changeUsername());

