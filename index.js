// Code your solutions in this file
let name = ["Guadalupe" , "Ollie" , "Aki",];

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i] + ", for the wonderful " + event + " gift!")
    }
    return messages;
  }

/*let count = 10;
function countDown() {
    while (count >= 0) {
        console.log(count)
        count--;
    }
    return countDown(4);
}*/

let i;  // 'outsourcing' the definition
function countDown() {
    for (i = 10; i >= 0; i--) {
    console.log(i); // Prints the numbers from 10 to 1
    }
}