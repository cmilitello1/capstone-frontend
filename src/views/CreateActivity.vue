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
</template>

<style></style>
