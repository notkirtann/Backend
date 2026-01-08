// //old way of handling api XHMLHttpRequest
// const reqURL = 'https://randomuser.me/api/'
// const xhr = new XMLHttpRequest();
// xhr.open('GET', reqURL);
// xhr.onload = function() {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     // You can access the user information from the data object
// };
// xhr.send();








//++++++++++++++++++++++++++++++++++++++++++++++++++

//FETCH USE PRIORITY QUE DONE FIRST NO MATTER WHAT BEFORE SET FUNCION ALSO

//+++++++++++++++++++++++++++++++++++++++++++++++++++




//api for promise
async function fetchData() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data);
}
fetchData();


const promiseOne = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log('promise consumed');
        
        resolve("Promise One Resolved");
        reject("Promise One Rejected");
    }, 1000);
});
promiseOne.then(function(){
    console.log('async task complete');
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        console.log('promise 2 ');
        success ? resolve() : reject();
    }, 800);
}).then(()=>{
    console.log("Data loaded!");
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        resolve({username:"Kirtan",email:'kirtan.com'}) 
    }, 1000);
});
promiseThree.then((data) => {
    console.log("User Data:", data);
});

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;
       if(success){
        resolve({username:"Kirtan",email:'kirtan.com'});
       } else {
        reject("Promise Four Rejected");
       }    
    }, 2000);
});
promiseFour
.then((user) => {
    return user.username;
})
.then((username) => {
    console.log("Username:", username);
})
.catch((error)=>{
    console.error("Error:", error);
})
.finally(()=>{
    console.log("Promise Four Completed");
});

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const success = false;
       if(success){
        resolve({username:"MESSI",email:'messi.com'});
       } else {
        reject("Messi Rejected");
       }    
    }, 2000);
})
async function consumePromiseFive() {
    try {
         const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getUser() {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    console.log(data);
}
getUser()

//promise shortcut trick
fetch('https://ipinfo.io/161.185.160.93/geo')
.then((output)=>{
    return output.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

