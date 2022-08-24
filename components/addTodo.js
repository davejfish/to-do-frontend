
export default function addTodo(form, handleAddTodo) {
    return () => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            const formData = new FormData(form);
            await handleAddTodo(formData.get('todo'));
            form.reset();
        });
    };
}