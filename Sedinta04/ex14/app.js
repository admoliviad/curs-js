   var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [{
    name: 'Twix',
    species: 'papagal',
    age: 4
  }, {
    name: 'Mars',
    species: 'caine',
    age: 2,
  }, {
    name: 'Bounty',
    species: 'hamster',
    age: 4
  }, {
    name: 'Lion',
    species: 'pisica',
    age: 10
  }]
};



//slide-ul 36 punctul 3

var totalAge = 0;
for (i = 0; i < person.pets.length; i++) {
  totalAge += person.pets[i].age;
}
console.log(totalAge);




//slide-ul 36 punctul 5

var DragosAge = 2019 - person.birthYear
var ageDifference1 = DragosAge - person.pets[0].age;
var ageDifference2 = DragosAge - person.pets[1].age;
console.log('Intre ' + person.firstName + ' si ' + person.pets[0].name + ' este o diferenta de ' + ageDifference1 + ' ani.');
console.log('Intre ' + person.firstName + ' si ' + person.pets[1].name + ' este o diferenta de ' + ageDifference1 + ' ani.');