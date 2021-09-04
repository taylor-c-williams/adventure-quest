// import save user + make user
import { createUser, setUserInfo } from './home/create-User.js';
// grab form from homepage
const formEl = document.getElementById('new-user');
//submit event listener
formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    //prevent default
    const formData = new FormData(formEl);
    const user = createUser(formData);
    setUserInfo(user);
    window.location = './map/index.html';
});

// new form data obj

//local storage --- user

//redirect to map

/// ---> getting form data, creating user data