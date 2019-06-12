<template>
  <section>
    <p>
      <router-link to="/">Back to Search</router-link>
    </p>
    <h4>Forecast for {{ city }}</h4>
    <hr>
    <span class="day__filter">Days:</span>
    <a href="/forecast/2" :class="{ 'bg-primary': days === '2' }" @click="updateDays('2')">2</a> |
    <a href="/forecast/5" :class="{ 'bg-primary': days === '5' }" @click="updateDays('5')">5</a> |
    <a href="/forecast/7" :class="{ 'bg-primary': days === '7' }" @click="updateDays('7')">7</a>
    <hr>
    <div v-for="result in weatherResult.list" :key="result.city">
      <div class="row">
        <div class="col-md-12">
          <weather-report :weather-day="result" :is-fahrenheit="true" date-format="MMM d,y"></weather-report>
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
      days: "2",
      weatherResult: {}
    };
  },
  beforeMount() {
    services.getWeather(this.city, this.days).then(result => {
      this.weatherResult = result;
    });
  },
  computed: {
    city() {
      return this.$route.params && this.$route.params.city;
    }
  },
  method: {
    updateDays(day) {
      this.days = day;
    }
  }
};
</script>

<style lang="scss" scoped>
.day {
  &__filter {
    margin-right: 0.3em;
  }
}
</style>
