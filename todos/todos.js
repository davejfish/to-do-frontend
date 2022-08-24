import addTodo from '../components/addTodo.js';
import createTodos from '../components/createTodos.js';
import createSignOut from '../components/signOut.js';
import { enforceUser, getUser, logOut, getAllTodos, insertTodo, updateTodo } from '../fetch-utils.js';


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

async function handleUpdateTodo(todoID) {
    const index = todos.findIndex(i => i.id = todoID);
    const oldTodo = todos[index];
    const newTodo = await updateTodo(todoID, { finished: !oldTodo.finished });
    todos.splice(index, 1, newTodo);
}

// Components 
const SignOut = createSignOut(document.querySelector('.sign-out'), handleSignOut);
const AddTodo = addTodo(document.querySelector('form'), handleAddTodo);
const CreateTodos = createTodos(document.querySelector('ul'), { handleUpdateTodo });

function display() {
    SignOut({ user });
    AddTodo();
    CreateTodos({ todos });
}

handlePageLoad();
