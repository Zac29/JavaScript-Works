// function one()
// {
//     const UserName = "Zack"
//     function two() 
//     {
//         const website = "Github"
//         console.log(UserName);
            
//     }
//     console.log(website);
//     two()

// }

// one()


// function addOne(num) {
//     return num + 1
// }

// console.log(addOne(5))

// const addTwo = function (num) {
//     return num + 2
// }

// addTwo(5)

const user = {
    userName : "Joker",
    age : 24,

    welcomeMessage: function()
    {
        console.log(`Hello, my name is ${this.userName} and I'm ${this.age} years old`)
    }

}
// user.welcomeMessage()
// user.userName = "BatMan"

// user.welcomeMessage()

//console.log(this);

// function sayHello() {
// console.log(this);
// }

// sayHello()

// const chai = () =>
// {
//     let userName = "Joker"
//     console.log(this);
// }

//chai()

const addTwo = (num1, num2) =>

    {
        return num1 + num2
    }

   // console.log(addTwo(5, 10))

(function chai ()
{
    console.log(`DB Connected`);
})();

( (name) => 
{
    console.log(`DB Connected Two ${name}`);
})("Zac");


