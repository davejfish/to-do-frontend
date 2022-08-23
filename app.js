import { redirectIfUser, signUpUser } from './fetch-utils.js';

// import functions and grab DOM elements
const signUp = document.querySelector('form');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
signUp.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(signUp);
    await signUpUser({
        email: formData.get('email'),
        password: formData.get('password'),
    });
});

// add function for redirect if user is logged in
redirectIfUser();