<template>
  <div class="flex items-center justify-center h-screen bg-primary">
    <div class="bg-white p-8 rounded-lg shadow-md w-1/3">
      <h2 class="text-2xl font-bold mb-4">Register User</h2>
      <form @submit.prevent="registerUser">
        <div class="mb-4">
          <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
          <input v-model="firstName" id="firstName" type="text" class="mt-1 p-2 border rounded w-full" required>
        </div>
        <div class="mb-4">
          <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
          <input v-model="lastName" id="lastName" type="text" class="mt-1 p-2 border rounded w-full" required>
        </div>
        <div class="mb-4">
          <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
          <input v-model="age" id="age" type="number" class="mt-1 p-2 border rounded w-full" required>
        </div>
        <div class="mb-4">
          <label for="birth" class="block text-sm font-medium text-gray-700">Birth</label>
          <input v-model="birth" id="birth" type="date" class="mt-1 p-2 border rounded w-full" required>
        </div>
        <div class="mb-4">
          <label for="newUsername" class="block text-sm font-medium text-gray-700">Username</label>
          <input v-model="newUsername" id="newUsername" type="text" class="mt-1 p-2 border rounded w-full" required>
        </div>
        <div class="mb-4">
          <label for="newPassword" class="block text-sm font-medium text-gray-700">Password</label>
          <input v-model="newPassword" id="newPassword" type="password" class="mt-1 p-2 border rounded w-full" required>
        </div>
        <button type="submit" class="btn btn-primary w-full">Register User</button>
        <p v-if="registerUserError" class="text-red-500 mt-2">{{ registerUserError }}</p>
      </form>
      <div class="input-info nav-link me-5"><router-link to="/">Zum Login</router-link></div>
      <div class="input-info nav-link me-5"><router-link to="/registered-users">Registrierte Benutzer anzeigen</router-link></div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const firstName = ref('');
const lastName = ref('');
const age = ref('');
const birth = ref('');
const newUsername = ref('');
const newPassword = ref('');
const registerUserError = ref('');
const registeredUsers = ref([]);

const registerUser = async () => {
  try {
    const response = await axios.post('http://localhost:4000/register-user', {
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
      birth: birth.value,
      username: newUsername.value,
      password: newPassword.value
    });

    if (response.data.success) {
      console.log('User registered successfully');
      registeredUsers.value.push(response.data.user);
      firstName.value = '';
      lastName.value = '';
      age.value = '';
      birth.value = '';
      newUsername.value = '';
      newPassword.value = '';
    } else {
      console.log('User registration failed');
      registerUserError.value = "User registration failed. Please check the inputs.";
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Benutzerdaten bei Komponentenmontage abrufen
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:4000/users');
    registeredUsers.value = response.data;
  } catch (error) {
    console.error('Error:', error);
  }
});
</script>
  