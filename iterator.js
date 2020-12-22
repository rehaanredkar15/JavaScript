console.log("The file is tutorial of interato welcome programmer")


function fruitsIterator(values) {

    let  nextIndex = 0;

    return{

        next: function () {
           if(nextIndex < values.length){
        
            return {
                value: values[nextIndex++],
                done : false
            }
           }
           else
           {
               return {
                   done: true 
               }
           }
        }
    }
}

const myarray = ['tu' ,'janeman', 'hai', 'jane', 'e', 'jigar' , 'hai']
console.log("my array is ",myarray);

const fruits = fruitsIterator(myarray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);