

function func1(){

    return new Promise(function(resolve,reject) {
       
         setTimeout(()=> {

            const error = true;
            if(!error)
            {
                console.log("Function: Your promise has been resovled  ");
                resolve();
            } 
            else
            {
                console.log("Function: Your promise has been rejected");
                reject();
            }

         },2000);

    })
}

func1().then(function(){
    console.log("rehan bhai promise solve che");

}).catch(function(error){
    console.log("error che rehan bhai jalebi abid");
})