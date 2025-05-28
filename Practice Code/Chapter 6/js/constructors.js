// function Rabbit (type) {
//     this.type = type;
// }
// var killerRabbit = new Rabbit ("killer");
// var blackRabbit = new Rabbit ("black");
// console.log(blackRabbit.type);
// → black

// function Rabbit (type) {
//     this.type = type;
//     this.speak = function (line) {
//     console.log("The " + this.type + " rabbit says '" +
//         line + "'");
//     };
// }
// var killerRabbit = new Rabbit ("killer");
// var blackRabbit = new Rabbit ("black");
// console.log(blackRabbit.type);
// → black

// Rabbit.prototype.speak = function (line) {
//     console.log("The " + this.type + " rabbit says '" +
//         line + "'");
// };
// blackRabbit.speak("Doom...");
// → The black rabbit says ' Doom ... '

function Rabbit(type) {
  this.type = type;
  this.speak = function (line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
  };
}
var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);
// → black

blackRabbit.speak("Doom...");
// → The black rabbit says ' Doom ... '
