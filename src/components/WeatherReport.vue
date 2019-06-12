<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h5 class="panel-title">{{ convertToDate(weatherDay.dt) | formatDate(dateFormat) }}</h5>
    </div>
    <div class="panel-body">
      Daytime temperature:
      {{ convertedTemp }} F
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
  methods: {
    convertToFahrenheit(degK) {
      return Math.round(1.8 * (degK - 273) + 32);
    },
    convertToDate(datetime) {
      return new Date(datetime * 1000);
    }
  },
  computed: {
    convertedTemp() {
      const initialTemp = this.weatherDay.main.temp;
      if (this.isFahrenheit) {
        return this.convertToFahrenheit(initialTemp);
      }
      return initialTemp;
    }
  }
};
</script>