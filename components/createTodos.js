

export default function createTodos(ul, handlers) {

    return ({ todos }) => {
        ul.innerHTML = '';
        for (const todo of todos) {
            ul.append(createListEl(todo, handlers));
        }
    };
}

function createListEl(todo, { handleUpdateTodo, handleDeleteTodo }) {
    const li = document.createElement('li');
    li.id = todo.id;

    const span = document.createElement('span');
    span.textContent = todo.content;
    
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = todo.finished;
    
    
    input.addEventListener('change', () => {
        if (!input.checked) {
            button.setAttribute('id', 'hidden');
        }
        else {
            button.removeAttribute('id');
        } 
        handleUpdateTodo(li.id);
    });

    const button = document.createElement('button');
    button.textContent = 'delete';
    if (todo.finished === false) {
        button.setAttribute('id', 'hidden');
    }
    button.addEventListener('click', async () => {
        handleDeleteTodo(li.id);
    });
    
    div.append(input, button);
    li.append(span, div);
    return li;
}