/* ++++++++++++++++++++++++++ Functions ++++++++++++++++++++ */

function sayMyName() 
{
    console.log("J");
    console.log("O");
    console.log("K");
    console.log("E");
    console.log("R");
}

//sayMyName();


// function addTwoNumbers(num1, num2) 
// {
//     console.log(num1+num2);
// }

// addTwoNumbers(5, 10);


// function sayHello(sayMyName) 
// {
//     console.log(`Hello, ${sayMyName}!`);
// }


function addTwoNumbers(num1, num2)
{
    let result = num1+num2;
    return result;
}

const result = addTwoNumbers(5, 10);


//console.log("Result", result);


function loginUserMessage(UserName = "Zac") {

    if (!UserName) {
        console.log("Please enter a UserName")
    }

    return `${UserName} just logged in`
}
//console.log(loginUserMessage());

function calculateCartPrice(...num1) {
    return num1
    
}

//console.log(calculateCartPrice(200,400,500));


const user = {
    UserName : "Zac",
    price : 999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.UserName} and price is ${anyObject.price}`);
}

//handleObject(user);

handleObject({
    UserName:"Sam",
    price: 1999
})


const myNewAray = [200, 400, 500,100]

function returnSecondValue(getArray)
{
    return getArray[1]
}

//console.log(returnSecondValue(myNewAray));

