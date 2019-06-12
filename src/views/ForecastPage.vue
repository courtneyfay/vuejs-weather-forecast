<template>
  <section>
    <p>
      <router-link to="/">Back to Search</router-link>
    </p>
    <h4>Forecast for {{ city }}</h4>
    <hr>
    <span class="day__filter">Days:</span>
    <router-link
      to="/forecast/2"
      :class="{ 'bg-primary': days === '2' }"
      @click.native="updateDays('2')"
    >2</router-link>
    <span class="day__filter--delimiter">|</span>
    <router-link
      to="/forecast/5"
      :class="{ 'bg-primary': days === '5' }"
      @click.native="updateDays('5')"
    >5</router-link>
    <span class="day__filter--delimiter">|</span>
    <router-link
      to="/forecast/7"
      :class="{ 'bg-primary': days === '7' }"
      @click.native="updateDays('7')"
    >7</router-link>
    <hr>
    <div v-for="result in weatherResult.list" :key="result.city">
      <div class="row">
        <div class="col-md-12">
          <weather-report :weather-day="result" :is-fahrenheit="true" date-format="MMMM Do YYYY"></weather-report>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import services from "../services.js";
import WeatherReport from "../components/WeatherReport.vue";

export default {
  components: {
    WeatherReport
  },
  data() {
    return {
      city: this.$route.params.city,
      days: "2",
      weatherResult: {}
    };
  },
  beforeMount() {
    this.updateData();
  },
  methods: {
    updateDays(day) {
      this.days = day;
      this.updateData();
    },
    updateData() {
      services.getWeather(this.city, this.days).then(result => {
        this.weatherResult = result;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.day {
  &__filter {
    margin-right: 0.3em;

    &--delimiter {
      margin: 0 0.3em;
    }
  }
}

//overriding bootstrap hover styles so you can see the day numbers
a.bg-primary {
  &:focus,
  :hover {
    color: white;
  }
}
</style>
