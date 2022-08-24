const BASE_URL = 'https://japril-todo-backend.herokuapp.com';


export async function signUpUser(user) {
    const response = await fetch(`${BASE_URL}/api/v1/user/sessions`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        credentials: 'include',
    });

    const data = await response.json();
    if (response.ok) {
        location.replace('./todos');
    }
    else {
        // eslint-disable-next-line no-console
        console.error(data.message);
    }
}

export async function getUser() {
    const response = await fetch(`${BASE_URL}/api/v1/user/me`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    if (response.ok) {
        const user = await response.json();
        return user;
    }
}

export async function redirectIfUser() {
    const user = await getUser();
    if (user) {
        location.replace('./todos');
    }
}

export async function enforceUser(user) {
    if (!user) location.replace('../');
}

export async function logOut() {
    const response = await fetch(`${BASE_URL}/api/v1/user/sessions`, {
        method: 'DELETE',
        credentials: 'include',
    });
    if (response.ok) {
        location.replace('../');
    }
}

export async function insertTodo(props) {
    const response = await fetch(`${BASE_URL}/api/v1/todos`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: props }),
        credentials: 'include',
    });
    if (response.ok) return await response.json();
}

export async function getAllTodos() {
    const response = await fetch(`${BASE_URL}/api/v1/todos`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    if (response.ok) return await response.json();
}

export async function updateTodo(id, data) {
    const response = await fetch(`${BASE_URL}/api/v1/todos/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
    });
    return await response.json();
}

export async function deleteTodo(id) {
    const response = await fetch(`${BASE_URL}/api/v1/todos/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    return await response.json();
}