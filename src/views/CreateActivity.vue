<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newActivityParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createActivity: function () {
      axios
        .post("/activities", this.newActivityParams)
        .then((response) => {
          console.log("activity created", response);
          this.$router.push("/activities");
        })
        .catch((error) => {
          console.log("activity create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <!-- <body class="create-activity-body">
    <div class="create-activity">
      <h1>Create Activity</h1>
      <form v-on:submit.prevent="createActivity()">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        User ID:
        <input type="text" v-model="newActivityParams.user_id" />
        Activity Type:
        <input type="text" v-model="newActivityParams.activity_type" />
        Ability Level
        <input type="text" v-model="newActivityParams.ability_level" />
        <input type="submit" value="Create" />
      </form>
    </div>
  </body> -->
  <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Contact</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
        </p>
      </div>

      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-md-12">
              <div class="info-box">
                <i class="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-box mt-4">
                <i class="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>
                  info@example.com
                  <br />
                  contact@example.com
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-box mt-4">
                <i class="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>
                  +1 5589 55488 55
                  <br />
                  +1 6678 254445 41
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="col form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div class="col form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div class="form-group">
              <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->
</template>

<!-- <style>
.create-activity-body {
  margin-top: 50px;
}
</style> -->
