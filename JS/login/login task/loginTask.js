let userName = ('Artur');
let userPassword = ('admin');

for (let i = 0; i < 3; i++) {

    let inputUsername = prompt('Enter user name');
    let inputPassword = prompt('Enter password');
    if (inputUsername === userName && inputPassword === userPassword) {
        alert('Hello');
        break;
    } else {
        alert('username or password is incorrect');

    }
};





