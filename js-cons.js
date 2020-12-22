// let car = {

//     name: 'Maruti 800',
//     topSpeed: 89,
//     run : () => {
//         console.log("car is running");
//     }
// };
// console.log(car);



// let str = "python";
// let links = document.links;
// console.log(links);
// let href;
// Array.from(links).forEach(function (element) {
//     href = element.href;
//     if (href.includes(str))
//        {
//            console.log(href);
//        }
// });

 
// let car = {

//     name: 'Maruti 800',
//     topSpeed: 89,
//     run : function(){

//         console.log("car is running");
//     }
// }
// console.log(car);

function GeneralCar(givenname, givenspeed){
    this.name = givenname;
    this.topSpeed = givenspeed;
    this.run = function(){
        console.log(`${this.name}is running`);
    };
}

car1 = new GeneralCar('Lambo',180);
car2 = new GeneralCar('Audi',250);
console.log(car1);
console.log(car2);