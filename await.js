
console.log("This is tutorial of asynch and await ")



async function rehan(){    //now asynch returns promise  

    console.log('Inside harry function');
    const response = await fetch('https://api.github.com/users');  //await atops the executiona and the other statements are executed a
    console.log('before response');
    const user = await response.json(); //here no tasks are left so the 
    console.log('users resolved');
    return  user;
}

console.log("before calling rehan");
let a = rehan();
console.log("After calling rehan");
console.log(a);
a.then(data => console.log(data)) //after the promise is resolved this is executed 
console.log("last line of this js file ");