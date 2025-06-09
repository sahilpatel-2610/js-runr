// singleton
// object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Naresh",
    "full name": "Naresh Bhavnagar",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "naresh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "naresh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "naresh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTow = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTow());
