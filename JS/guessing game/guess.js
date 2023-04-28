let randNum = Math.floor(Math.random() * 5 + 1);

let userGuess;
let guesses = 1;

do {
    userGuess = Number(prompt("Guess the Number between 1 & 5"));

    if (userGuess !== +userGuess) {
        alert('Only number')
        continue;
    }

    if (userGuess < 1) {
        alert('Number too low try again')
        continue;
    } else if (userGuess > 5) {
        alert('Number to hight try again')
        continue;
        // }
        // else if (userGuess < 1 || userGuess > 5) {
        //     alert('The number you entered is out of range');
        //     continue;
    }
    else if (userGuess === randNum) {
        alert('CONGRATULATIONS!! - YOU GUESSED IT');
    } else if (userGuess > randNum) {
        alert('OOPS!! TOO HIGHT');
        if (guesses === 3) {
            alert(`${'TOO MANY GUESSES - GAME OVER'}  ${'answer'} ${randNum}`)
            break;
        }
        guesses++;
    } else {
        alert('OOPS!! TOO LOW')
        if (guesses === 3) {
            alert(`${'TOO MANY GUESSES - GAME OVER'} ${'answer'}  ${randNum}`)
            break;
        }
        guesses++;
    }
} while (userGuess != randNum || userGuess < 1 || userGuess > 5)
alert(randNum);

