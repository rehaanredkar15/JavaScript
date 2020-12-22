// Generators are functions that return an object which conforms to the Iterable- 
// and Iterator protocols. You might not have heard of these protocols, 
// but, ever since ES2015, they are used to loop over or spread objects like Array, Map, Set, and String.

function* Generators1() {

    let i = 0;

    while(true){
     
        yield  (i++).toString();  //yeild method  will generate the no 
    }
}


const gen = Generators1();
console.log(gen.next().value); //this is used to get the values from the generator which generates values 
console.log(gen.next().value);
console.log(gen.next().value);// next gives us the object and. value gives us value
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);