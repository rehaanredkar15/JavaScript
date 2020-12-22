console.log("this is fetch api");

let mybtn = document.getElementById('mybtn');

let content = document.getElementById('content');

// function getData(){
    
//     url = "kundli.txt";

//     fetch(url).then( (response)=> {
     
//         return response.json();
//     }).then((data) =>{
//         console.log(data);
//     })
// }



function postData(){
    
    url = "http://dummy.restapiexample.com/api/v1/create";

    data = '{"name":"rehan8989","salary":"123","age":"23"}'

    paramers  = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data //this is a object so no ; required
    }
//here providing our object as parameter is very important
    fetch(url,paramers).then( response => response.json())  //if there is only one parameter in the promise whichh starts from then , then u dont need to write the () and also need to write 
    .then(data =>console.log(data))
}



postData();

// console.log("Before running get data");
// getData();
// console.log("After running get data");

