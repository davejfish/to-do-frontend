// import functions and grab DOM elements
const [signUp, signIn] = document.querySelectorAll('form');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
signUp.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('clicked');
});

signIn.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('clicked as well');
});

// add function for redirect if user is logged in