const yourMovie = window.prompt("What is your favorite movie?");
const myMovies = [
  "Evil Dead 2",
  "Face/Off",
  "I Heart Huckabees",
  "Young Frankenstein",
  "Event Horizon",
];

console.log(myMovies);

myMovies.push(yourMovie);
console.log(myMovies.toString);