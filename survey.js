const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("what's your name? (nicknames are acceptable) ", (answer1) => {
  rl.question("what's an activity you like doing? ", (answer2) => {
    rl.question("what do you listen to while doing that? ", (answer3) => {
      rl.question("which is your favourite meal of the day? ", (answer4) => {
        rl.question("what's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("what's your favourite animal? ", (answer6) => {
            console.log(`${answer1} enjoys ${answer2}. While doing ${answer2}, ${answer1} listens to ${answer3}. ${answer1}'s favourite meal of the day is ${answer4}, and ${answer1}'s favourite thing to eat for that meal is ${answer5}. ${answer1}'s favourite animal is a ${answer6}`);

            rl.close();
          });
        });
      });
    });
  });
});
