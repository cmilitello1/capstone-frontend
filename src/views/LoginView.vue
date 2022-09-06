<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
  <!-- <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Sign Up</h2>
      </div>
      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-6">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <form v-on:submit.prevent="submit()">
              <div class="row">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="newSessionsParams.email"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="newSessionsParams.password"
                    name="email"
                    class="form-control"
                    id="email"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">You are now logged in!</div>
              </div>
              <div class="text-center"><button type="submit">Login</button></div>
            </form>
          </form>
        </div>
      </div>
    </div>
  </section> -->
</template>

<style>
.login {
  margin-top: 200px;
}
</style>
