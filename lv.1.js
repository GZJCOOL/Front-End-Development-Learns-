const myLovelyCats = require('cat-names');
console.log(myLovelyCats.random());

const fortuneCookie = require('fortune-cookie');
const cowsay = require('cowsay');

const randomFortune = fortuneCookie[Math.floor(Math.random() * fortuneCookie.length)];

console.log(
  cowsay.say({
    text: `Your fortune is: ${randomFortune}`,
  })
);