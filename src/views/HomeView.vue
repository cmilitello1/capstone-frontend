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
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container" data-aos="zoom-out" data-aos-delay="100">
      <div class="row">
        <div class="col-xl-6">
          <h1>A meet-up app designed for the social adventurer</h1>
          <h2>Sign up to find friends for your favorite activity</h2>
          <a href="/signup" class="btn-get-started scrollto">Get Started</a>
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero -->
  <!-- <div class="home">
    <h1>{{ message }}</h1>
    <h2>A meet-up app designed for the social adventurer</h2>

    <h2>
      |
      <router-link to="/signup">Signup</router-link>
      |
      
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link>
    </h2>
  </div> -->
</template>

<style>
.home {
  margin-top: 200px;
}
</style>
