<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>

  temp contact section
  <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact">
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
                    v-model="newUserParams.name"
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
                    v-model="newUserParams.email"
                    name="email"
                    class="form-control"
                    id="email"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col form-group">
                  <input
                    type="password"
                    v-model="newUserParams.password"
                    name="password"
                    class="form-control"
                    id="password"
                    placeholder="password"
                    required
                  />
                </div>
                <div class="col form-group">
                  <input
                    type="password"
                    v-model="newUserParams.password_confirmation"
                    name="password_confirmation"
                    class="form-control"
                    id="password_confirmation"
                    placeholder="re-type password"
                    required
                  />
                </div>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Sign Up</button></div>
            </form>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->
</template>

<style></style>
