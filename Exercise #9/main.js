const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2024,
  start: function(){
    console.log("the card has started" +this.make);
  }
};

console.log(car.make);
console.log(car.model);
console.log(car.year);
car.start();