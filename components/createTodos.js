

export default function createTodos(ul) {

    return ({ todos }) => {
        ul.innerHTML = '';
        for (const todo of todos) {
            ul.append(createListEl(todo));
        }
    };
}

function createListEl(todo) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = todo.content;
    
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'checkbox';
    const button = document.createElement('button');
    button.textContent = 'delete';
    button.id = todo.id;

    div.append(input, button);
    li.append(span, div);
    return li;
}