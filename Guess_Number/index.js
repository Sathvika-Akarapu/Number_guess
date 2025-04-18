const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function display() {
    const msg = " I’ve hidden a secret number between 1 and 100—think you can crack it?.\n You’ve got 5 shots to nail it. Miss them all? You’re outta here! 😜. \n"
    console.log(msg);
}

function easy() {
    const msg = "You’ve picked Easy mode—let’s see if it’s really that easy!. \n Alright, let's get this party started";
    console.log(msg);
    let randNum = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let maxAttempts = 10;

    function askQuestion() {
        r1.question("Enter your guess: ", (guess) => {
            guess = parseInt(guess);
            attempts++;

            if (guess < randNum) {
                console.log(`Incorrect! The number is greater than ${guess}`);
                if (attempts < maxAttempts) {
                    askQuestion();
                } else {
                    console.log(`Sorry! You've used all ${maxAttempts} attempts. The correct number was ${randNum}.`);
                    r1.close();
                }
            } else if (guess > randNum) {
                console.log(`Incorrect! The number is less than ${guess}`);
                if (attempts < maxAttempts) {
                    askQuestion();
                } else {
                    console.log(`Sorry! You've used all ${maxAttempts} attempts. The correct number was ${randNum}.`);
                    r1.close();
                }
            } else {
                console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
                r1.close();
            }
        });

    }
    askQuestion();
}

function medium() {
    const msg = "Great! You have selected the Medium difficulty level. \nLet's start the game";
    console.log(msg);
    let randNum = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let maxAttempts = 5;

    function askQuestion() {
        r1.question("Enter your guess: ", (guess) => {
            guess = parseInt(guess);
            attempts++;

            if (guess < randNum) {
                console.log(`Incorrect! The number is greater than ${guess}`);
                if(attempts < maxAttempts) {
                    askQuestion();
                } else {
                    console.log(`Sorry! You've used all ${maxAttempts} attempts. The correct number was ${randNum}.`);
                    r1.close();
                }
            } else if (guess > randNum) {
                console.log(`Incorrect! The number is less than ${guess}`);
                if(attempts < maxAttempts) {
                    askQuestion();
                } else {
                    console.log(`Sorry! You've used all ${maxAttempts} attempts. The correct number was ${randNum}.`);
                    r1.close();
                }
            } else {
                console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
                r1.close();
            }
        });

    }
    askQuestion();
}

function difficult() {
    const msg = "Great! You have selected the Hard difficulty level. \nLet's start the game";
    console.log(msg);
    let randNum = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let maxAttempts = 3;

    function askQuestion() {
        r1.question("Enter your guess: ", (guess) => {
            guess = parseInt(guess);
            attempts++;

            if (guess < randNum) {
                console.log(`Incorrect! The number is greater than ${guess}`);
                if(attempts < maxAttempts) {
                    askQuestion();
                } else {
                    console.log(`Sorry! You've used all ${maxAttempts} attempts. The correct number was ${randNum}.`);
                    r1.close();
                }
            } else if (guess > randNum) {
                console.log(`Incorrect! The number is less than ${guess}`);
                if(attempts < maxAttempts) {
                    askQuestion();
                } else {
                    console.log(`Sorry! You've used all ${maxAttempts} attempts. The correct number was ${randNum}.`);
                    r1.close();
                }
            } else {
                console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
                r1.close();
            }
        });

    }
    askQuestion();
}

function difficultyLevel() {
    const msg = "Please select the difficulty level.\n 1. Easy (10 chances) \n 2. Medium (5 chances) \n 3. Hard (3 chances) \n";
    console.log(msg);

    r1.question("Please enter your choice: ", (input) => {

        if (input == 1) {
            easy();
        } else if (input == 2) {
            medium();
        } else if (input == 3) {
            difficult();
        } else {
            console.log("Please select a number between 1 to 3");
            r1.close();
        }

    });

}

display();
difficultyLevel();
