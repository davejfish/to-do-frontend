import { insertTodo } from '../fetch-utils.js';


export default function createTodo(form) {


    return () => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            await insertTodo(formData.get('todo'));
        });
    };
}