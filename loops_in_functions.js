chickens = [
  { name: "Margaret", age: 2, eggs: 0 },
  { name: "Hetty", age: 1, eggs: 2 },
  { name: "Henrietta", age: 3, eggs: 1 },
  { name: "Audrey", age: 2, eggs: 0 },
  { name: "Mabel", age: 0.5, eggs: 1 },
]


// search function

var findChickenByName = (chickensArray, name) => {
  // return 'x' - this will take us out of function here without going through the rest of it
  for (var chicken of chickensArray){
    if (chicken.name === name){
      return chicken;


    }
  }
  return 'Not found'
}

var foundChicken = findChickenByName(chickens, 'Mabel');
console.log(foundChicken);

var foundChicken = findChickenByName(chickens, 'Harry');
console.log(foundChicken);

// var countEggs = (birdsArray) => {
//   var total = 0;
//   for (var bird of birdsArray) {
//     total += bird.eggs
//   }
//   return total;
//
// }
//
// console.log(countEggs(chickens));


 // function to count eggs

// var total = 0;
// for (var chicken of chickens) {
//   total += chicken.eggs
// }
//
// console.log(total);
