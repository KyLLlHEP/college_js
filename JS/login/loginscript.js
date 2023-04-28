let user = 'len';
let pwd = 'js';

let userName;
let userPwd;

do {

    userName = prompt('Please enter your username');
    userPwd = prompt('Please enter your password');

    if (userName === "" || userPwd === "") {
        alert('All of the fields must be filled');
        continue;
    }

    if (userName != user || userPwd != pwd) {

        logAttempts++;
        if (logAttempts === 3) {
            loggedIn = false;
            break;
        }
        alert('Either your username or password is incorrect - Try again');
    } else if (userName === user && userPwd === pwd) {
        loggedIn = true;
        alert('You are now logged in');
    }
} while (userName != user || userPwd != pwd);

if (loggedIn === true) {
    alert('Welcome to the logged in section');
} else if (loggedIn === false) {
    alert('You are now logged out speak to admin');
}


