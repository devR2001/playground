<template>
  <div class="flex items-center justify-center h-screen bg-primary">
    <div class="bg-white p-8 rounded-lg shadow-md w-1/3">
      <h2 class="text-2xl font-bold mb-4"> {{ $t("login.login") }}
      </h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">{{ $t("login.username") }}</label>
          <input v-model="username" id="username" type="text" class="mt-1 p-2 border rounded w-full" required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">{{ $t("login.password") }}</label>
          <input v-model="password" id="password" type="password" class="mt-1 p-2 border rounded w-full" required>
        </div>
        <button type="submit" class="btn btn-primary w-full">{{ $t("login.login") }}</button>
        <p v-if="loginError" class="text-red-500 mt-2">{{ loginError }}</p>
        <div class="input-info nav-link mt-5"><router-link to="/register-user">{{ $t("login.createAccount")
        }}</router-link></div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { setAuthenticated } from '@/store/auth';

const router = useRouter();

const username = ref('');
const password = ref('');
const loginError = ref('');

const login = async () => {
  try {
    const response = await axios.post('http://localhost:4000/login', {
      username: username.value,
      password: password.value
    });

    if (response.data.success) {
      setAuthenticated(true); 
      router.push('/start-seite'); 
    } else {
      console.log('Login failed');
      loginError.value = 'Login failed. Please check your username and password';
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>
