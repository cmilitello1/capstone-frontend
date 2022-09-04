<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newActivityParams: {},
      errors: [],
      success_message: "Activity Created",
    };
  },
  created: function () {},
  methods: {
    createActivity: function () {
      axios
        .post("/activities", this.newActivityParams)
        .then((response) => {
          console.log("activity created", response);
          // this.$router.push("/find-activity");
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
        <h2>Create an Activity</h2>
        <p>Find buddies to adventure with!</p>
      </div>

      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <!-- <div class="col-lg-6">
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
        </div> -->

        <div class="col-lg-6">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <form v-on:submit.prevent="createActivity()">
              <div class="row">
                <div class="col form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div class="col form-group">
                  <input
                    type="text"
                    v-model="newActivityParams.user_id"
                    class="form-control"
                    name="user_id"
                    id="user_id"
                    placeholder="User id"
                    required
                  />
                  <!-- <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required /> -->
                </div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="newActivityParams.activity_type"
                  class="form-control"
                  name="activity_type"
                  id="activity_type"
                  placeholder="Activity"
                  required
                />
                <!-- <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required /> -->
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="newActivityParams.ability_level"
                  class="form-control"
                  name="ability_level"
                  id="ability_level"
                  placeholder="Ability Level"
                  required
                />
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your Activity has been posted!</div>
              </div>
              <div class="text-center">
                <button type="submit">Post Activity</button>
              </div>
            </form>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->
</template>

<style>
#contact {
  margin-top: 100px;
}
</style>
