<template>
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <h4>Forecast by City</h4>
      <form>
        <div class="form-group">
          <input type="text" class="form-control" v-model="city">
        </div>
        <input @click="submit" type="submit" class="btn btn-primary" value="Get Forecast">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: ""
    };
  },
  methods: {
    submit() {
      //send city to forecast page via route params
      this.$router.push({ name: "Forecast", params: { city: this.city } });
    }
  }
};
</script>