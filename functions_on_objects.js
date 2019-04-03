// var person = {
//   age: 5,
//   havebirthday: () => {
//     person.age++;
//   }
// }
//
// console.log(person.age);
// //console.log(person.havebirthday());
// person.havebirthday();
// console.log(person.age);


// OR


var person = {
  age: 5,
  havebirthday () {
    person.age++;
  },
  name: 'Brian'
}

console.log(person.age);
//console.log(person.havebirthday());
person.havebirthday();
console.log(person.age);
console.log(person.name);
