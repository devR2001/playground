<template>
    <div>
        <div>
            <div class="container px-3 py-6 prose">
                <h1 class="text-center">
                    {{ $t("todoList.todoList") }}
                </h1>
            </div>
            <input v-model="newTodo" @keyup.enter="addTodo" type="text" :placeholder="$t('todoList.addTask')"
                class="input input-bordered input-secondary w-full max-w-xs" />
            <ul>
                <li v-for="todo in todos" :key="todo.id">
                    <div class="container px-3 py-6 prose">
                        {{ todo.text }}
                    </div>

                    <button class="btn btn-info" @click="editTodo(todo)">{{ $t("todoList.editTask") }}</button>
                    <button class="btn btn-error" @click="deleteTodo(todo.id)">{{ $t("todoList.deleteTask") }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const newTodo = ref('');
const todos = ref([]);

const fetchTodos = async () => {
    const response = await fetch('http://localhost:4000/todos');
    todos.value = await response.json();
    console.log('todos.value:', todos.value);
};


const addTodo = async () => {
    if (newTodo.value.trim() !== '') {
        const response = await fetch('http://localhost:4000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: newTodo.value }),
        });
        const newTodoItem = await response.json();
        todos.value.push(newTodoItem);
        newTodo.value = '';
    }
};

const editTodo = (todo) => {
    const newText = prompt('Edit the todo:', todo.text);
    if (newText !== null) {
        const updatedTodo = { ...todo, text: newText };
        fetch(`http://localhost:4000/todos/${todo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTodo),
        });
        todos.value = todos.value.map(item => (item.id === todo.id ? updatedTodo : item));
    }
};

const deleteTodo = async (id) => {
    if (confirm('Are you sure you want to delete this todo?')) {
        await fetch(`http://localhost:4000/todos/${id}`, {
            method: 'DELETE',
        });
        todos.value = todos.value.filter(item => item.id !== id);
    }
};

onMounted(() => {
    fetchTodos();
});
</script>