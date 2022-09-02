<script>
import axios from "axios";
export default {
  data: function () {
    return {
      activity: {},
      editActivityParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/activity/" + this.$route.params.id).then((response) => {
      console.log("activity show", response);
      this.activity = response.data;
      this.editActivityParams = this.photo;
    });
  },
  methods: {
    updateActivity: function (activity) {
      axios
        .patch("/activity/" + activity.id, this.editActivityParams)
        .then((response) => {
          console.log("activity update", response);
          this.$router.push("/activities");
        })
        .catch((error) => {
          console.log("activity update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="activity-edit">
    <h1>Edit Activity</h1>
    <form v-on:submit.prevent="updateActivity(activity)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      User ID:
      <input type="text" v-model="newActivityParams.user_id" />
      Activity Type:
      <input type="text" v-model="newActivityParams.activity_type" />
      Ability Level
      <input type="text" v-model="newActivityParams.ability_level" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>
