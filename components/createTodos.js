

export default function createTodos(ul, {
    handleUpdateTodo,
}) {

    return ({ todos }) => {
        ul.innerHTML = '';
        for (const todo of todos) {
            ul.append(createListEl(todo, {
                handleUpdateTodo,
            }));
        }
    };
}

function createListEl(todo, {
    handleUpdateTodo
}) {
    const li = document.createElement('li');
    li.id = todo.id;

    const span = document.createElement('span');
    span.textContent = todo.content;
    
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'checkbox';
    
    
    input.addEventListener('change', () => {
        if (!input.checked) {
            button.setAttribute('id', 'hidden');
            handleUpdateTodo(todo.id);
        }
        else button.removeAttribute('id');
    });

    const button = document.createElement('button');
    button.textContent = 'delete';
    if (todo.finished === false) {
        button.setAttribute('id', 'hidden');
    }
    
    div.append(input, button);
    li.append(span, div);
    return li;
}