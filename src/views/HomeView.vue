<script>
export default {
  data: function () {
    return {
      message: "Shugo",
    };
  },
  created: function () {},
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>A meet-up app designed for the social adventurer</h2>
    <h2>
      |
      <router-link to="/signup">Signup</router-link>
      |
      <!-- 
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link> -->
    </h2>
  </div>
</template>

<style></style>
