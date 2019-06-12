<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h5 class="panel-title">{{ convertToDate(weatherDay.dt) | date: dateFormat }}</h5>
    </div>
    <div class="panel-body">
      Daytime temperature:
      {{ convertToStandard(weatherDay.main.temp) }} F
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weatherDay: {
      type: Object,
      default: () => {}
    },
    isFahrenheit: {
      type: Boolean,
      default: true
    },
    dateFormat: {
      type: String,
      default: ""
    }
  },
  beforeMount() {
    console.log("weatherDay", this.weatherDay);
  },
  methods: {
    convertToStandard(temp) {
      if (this.isFahrenheit) {
        this.convertToFahrenheit(temp);
      }
    },
    convertToFahrenheit(degK) {
      return Math.round(1.8 * (degK - 273) + 32);
    },
    convertToDate(datetime) {
      return new Date(datetime * 1000);
    }
  }
};
</script>