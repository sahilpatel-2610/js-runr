// var c= 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const username = "naresh"

    function tow(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    tow()
    
}

// one()

if (true) {
    const username = "naresh"
    if (username === "naresh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



(addTow(5))
const addTow = function(num){
    return num + 2
}

