import { enforceUser, getUser } from '../fetch-utils.js';


// State
let user = null;


// Action Handlers
async function handlePageLoad() {
    user = getUser();
    enforceUser(user);



    display();
}

// handlers

// Components 

function display() {
    
}

handlePageLoad();
