// import save user + make user
import { createUser, setUserInfo } from './create-User.js';
// grab form from homepage
const formEl = document.getElementById('new-user');
//submit event listener
formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    //prevent default
    const formData = new FormData(formEl);
    const user = createUser(formData);
    setUserInfo(user);
    window.location = 'map';
});

// new form data obj

//local storage --- user

//redirect to map

/// ---> getting form data, creating user data