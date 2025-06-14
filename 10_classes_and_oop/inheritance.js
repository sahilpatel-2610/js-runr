class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const mid = new Teacher("mid", "mid@teacher.com", "123")

mid.logMe()
const midNight = new User("midNight")

midNight.logMe()

console.log(mid instanceof User);
