export default function createSignOut(root, handleSignOut) {
    const span = root.querySelector('span');
    const button = root.querySelector('button');

    return ({ user }) => {
        const [first] = user.email.split('@');
        span.textContent = first;

        button.addEventListener('click', async () => {
            handleSignOut();
        });
    };
}