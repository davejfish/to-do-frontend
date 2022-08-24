import addTodo from '../components/addTodo.js';
import createTodos from '../components/createTodos.js';
import createSignOut from '../components/signOut.js';
import { enforceUser, getUser, logOut, getAllTodos, insertTodo, updateTodo, deleteTodo } from '../fetch-utils.js';


// State
let user = null;
let todos = [];

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
    const index = todos.findIndex(i => i.id === todoID);
    console.log('update index: ', index);
    const oldTodo = todos[index];
    const newTodo = await updateTodo(todoID, { finished: !oldTodo.finished });
    todos.splice(index, 1, newTodo);
}

async function handleDeleteTodo(todoID) {
    const index = todos.findIndex(i => i.id === todoID);
    console.log('index is: ', index);
    await deleteTodo(todoID);
    todos.splice(index, 1);
    display();
}

// Components 
const SignOut = createSignOut(document.querySelector('.sign-out'), handleSignOut);
const AddTodo = addTodo(document.querySelector('form'), handleAddTodo);
const CreateTodos = createTodos(document.querySelector('ul'), { handleUpdateTodo, handleDeleteTodo });

function display() {
    SignOut({ user });
    AddTodo();
    CreateTodos({ todos });
}

handlePageLoad();
