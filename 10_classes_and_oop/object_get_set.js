const User = {
    _email: 'n@nb.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const mid = Object.create(User)
console.log(mid.email);
