
// console.log(JsUser.email);

// console.log(JsUser.lastLoginDate[0]);

// JsUser.lastLoginDate.push("Friday");

// console.log(JsUser.Filename);

// console.log(JsUser.lastLoginDate);

// console.log( JsUser[mySym] );


// console.log(JsUser);

// JsUser.greeting = function()
// {
//     console.log("Hello JS User");
// }


// JsUser.greetingTwo = function()
// {
//     console.log(`Hello JS User,${this.name}` );
// }

// console.log(JsUser.greeting());


// console.log(JsUser.greetingTwo());


const tinderUser = {}

tinderUser.id = "123abc"

tinderUser.name = "Joker"

tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname :{
            firstname: "Joker",
            lastname: "Zac"
        }
    }
}


//console.log(regularUser.fullname);

const obj1 = {1:"a", 2:"b"}

const obj2 = {3:"a", 4:"b"}

//const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1,...obj2}

// console.log(obj3);

// console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename :  "Hindi",
    print : "999",
    courseInstructor : "Zac"
}

const{courseInstructor : instructor} = course

console.log(instructor);


