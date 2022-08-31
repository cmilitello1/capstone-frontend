<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ Shugo }}</h1>
    <h2>
      <router-link to="/signup">Signup</router-link>

      <router-link to="/login">Login</router-link>

      <router-link to="/logout">Logout</router-link>
    </h2>
  </div>
</template>

<style></style>
