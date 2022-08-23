import createSignOut from '../components/signOut.js';
import { enforceUser, getUser, logOut } from '../fetch-utils.js';


// State
let user = null;


// Action Handlers
async function handlePageLoad() {
    user = await getUser();
    enforceUser(user);



    display();
}

// handlers
function handleSignOut() {
    logOut();
}


// Components 
const SignOut = createSignOut(document.querySelector('.sign-out'), handleSignOut);

function display() {
    SignOut({ user });
}

handlePageLoad();
