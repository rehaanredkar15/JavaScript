console.log("This is tut 27");

// Object Literal for creating objects
let car = {
  name: "Maruti 800",
  topSpeed: 89,
  run: function() {
    console.log("car is running");
  }
};
// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function() {
    console.log(`${this.name} Is Running`);
  };
  
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Marutu Alto", 80);
car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);
console.log("hii");

 