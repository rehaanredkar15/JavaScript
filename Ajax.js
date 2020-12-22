console.log("We are learning Ajax ");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler );

function buttonClickHandler(){

    console.log("You clicked the fetching button");

    // till here we created the logic for the button and gave it a event listener of being clicked and when the button is clicked the function will be called 
    //now we will create an xhr object to request for a file which can be html txt or anything
   //here the object is created and instiatinated
    const xhr = new XMLHttpRequest();
    
    //opening the object means running the object
 //   xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)    //here true will make the http request asynchronous that is the dom will not be blocked 
   
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    //this is post request

    
    xhr.onprogress = function(){

        console.log('On Progress');

    }

    xhr.onload = function(){  //onload is jab sab kuch tyar hai

        //now we will print the console to avoid the exception by checking the status and if the status is proper than  we will print the content
        if(this.status === 200)
        {
            console.log(this.responseText);  //here the text which is requested is printed in response but till now the response is not ready

        }
        else
        {
            console.log("error ho gya bhaiya");
        }
    
    }
    // so now the response need to be sent
    
    xhr.send();

}