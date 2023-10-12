<template>
  <div class="navbar bg-primary text-primary-content">

    <a class="btn btn-ghost normal-case text-xl">MyApp</a>

    <div class="drawer" style="z-index: 1000;">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content label-container">
        <label for="my-drawer-4" class="drawer-button  btn btn-primary"><svg class="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg></label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li><a class="ms-5"><router-link to="/">Login</router-link></a></li>
          <li><a><router-link to="/calculator">Calculator</router-link></a></li>
          <li><a><router-link to="/input-info">Input Info</router-link></a></li>
          <li><a><router-link to="/todo">Todo Liste</router-link></a></li>
          <li><a><router-link to="/products">Produkt Liste</router-link></a></li>
          <li><a><router-link to="/pyramide">Pyramide Output</router-link></a></li>
          <li><a><router-link to="/blog-list">Blog-List</router-link></a></li>
          <li><a><router-link to="/mixins">Mixin</router-link></a></li>
          <li><a><router-link to="/registered-users">Registered Users</router-link></a></li>
          <li><a><router-link to="/quotes">Zitate</router-link></a></li>
          <li><a><router-link to="/guess-number">Zahlen raten</router-link></a></li>
          <li><a><router-link to="/dictionary">Wörterbuch</router-link></a></li>
          <li><a><router-link to="/diagramm">Diagramm</router-link></a></li>
          <li><a><router-link to="/learning">W3Schools</router-link></a></li>
          <li><a><router-link to="/loop">Loops</router-link></a></li>
          <li><a><router-link to="/fizz-buzz">FizzBuzz</router-link></a></li>
          <li><a><router-link to="/palindrome">Palindrome Checker</router-link></a></li>
          <li><a><router-link to="/my-chat">My Chat</router-link></a></li>
          <li><a><router-link to="/gallery">Gallery</router-link></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { authState } from '@/store/auth.js'

const isAuthenticated = authState.isAuthenticated;
console.log('isAuthenticated:', isAuthenticated);

const logout = () => {
  isAuthenticated.value = false;
  router.push('/');
};

</script>

<style>
.logo-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.router-link-exact-active {
  color: #fff;
}

.label-container {
  position: absolute;
  right: 0;
  margin: 1rem;
}
</style>
