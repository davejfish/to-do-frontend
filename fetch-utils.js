const BASE_URL = 'http://localhost:7890';

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