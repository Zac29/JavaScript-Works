const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function (){
        console.log("Async task is completed");
        resolve()
    })    
})



promiseOne.then(function () {
    console.log("Promise consumed");
})

.catch(function (error) {
    console.log("Error occurred", error);
})



new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({username: 'Zac', email: 'zac29@gmail.com'})
    },10000)
})