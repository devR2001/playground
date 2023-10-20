// const square = function (a) {
//   return a * a;
// };

// Schöne Syntax wenn nur ein Statement in dem Aufruf drin (return a * a)

// const square = (a) => {
//   return a * a;
// };

// const square = (a) => a * a

// console.log(square(5));


const car = {
    model: "Fiesta",
    manufacturer: "Ford",
    fullName: function(){
        return `${this.manufacturer} ${this.model}`
    }
}

console.log(car.fullName())