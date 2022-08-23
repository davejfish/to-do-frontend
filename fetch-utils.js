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