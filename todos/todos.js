import addTodo from '../components/addTodo.js';
import createTodos from '../components/createTodos.js';
import createSignOut from '../components/signOut.js';
import { enforceUser, getUser, logOut, getAllTodos, insertTodo } from '../fetch-utils.js';


// State
let user = null;
let todos = null;

// Action Handlers
async function handlePageLoad() {
    user = await getUser();
    enforceUser(user);
    
    todos = await getAllTodos();

    display();
}

// handlers
function handleSignOut() {
    logOut();
}

async function handleAddTodo(content) {
    const todo = await insertTodo(content);
    todos.push(todo);
    display();
}

// Components 
const SignOut = createSignOut(document.querySelector('.sign-out'), handleSignOut);
const AddTodo = addTodo(document.querySelector('form'), handleAddTodo);
const CreateTodos = createTodos(document.querySelector('ul'));

function display() {
    SignOut({ user });
    AddTodo();
    CreateTodos({ todos });
}

handlePageLoad();
