class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return `${this._password}naresh`
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    set password(value){
        this._password = value    
    } 
}

const naresh = new User("n@naresh.ai", "abc")
console.log(naresh.email);
