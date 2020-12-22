
let obj = {

    name: "harry",
    channel: "Code with Harry",
    address: "Mars"
}

function Obj(givenname){
     this.name = givenName;
}

// prototype is the  extra qualities that are available for the object here we ar
/* here we are modifying the the prototype and adding the qualities to the prototype but for that
we require a constructor */ 
Obj.prototype.getName = fucntion(){
    return this.name;
}

let obj2 = new Obj("Rohan Das");
console.log(obj);
