<script>
import axios from "axios";
export default {
  data: function () {
    return {
      activities: [],
    };
  },
  created: function () {
    this.indexActivities();
  },
  methods: {
    indexActivities: function () {
      axios.get("/activities").then((response) => {
        console.log("activities index", response);
        this.activities = response.data;
      });
    },
  },
};
</script>

<template>
  <!-- <div class="activities-index">
    <h1>Find an Activity</h1>
    <div v-for="activity in activities" v-bind:key="activity.id">
      <h2>Name: {{ activity.user_id }}</h2>
      <h3>Activity Type: {{ activity.activity_type }}</h3>
      <h3>Ability Level {{ activity.ability_level }}</h3>
    </div>
  </div> -->
  <main id="main">
    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Find an Activity</h2>
          <p>Adventuring with a buddy > Adventuring alone</p>
          <p>Find a buddy near your ability level and reach out!</p>
        </div>
        <div v-for="activity in activities" v-bind:key="activity.id">
          <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-wrap">
                  <div class="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="" />
                    <h3>Activity Type: {{ activity.activity_type }}</h3>
                    <h4>Name: {{ activity.user_id }}</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Ability Level {{ activity.ability_level }}
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End testimonial item -->

            <!-- End testimonial item -->
          </div>
          <!-- <div class="swiper-pagination"></div> -->
        </div>
      </div>
    </section>
  </main>
  <!-- End Testimonials Section -->
</template>

<style scoped>
#testimonials {
  color: black !important;
}
#main {
  margin-top: 100px;
}
</style>
