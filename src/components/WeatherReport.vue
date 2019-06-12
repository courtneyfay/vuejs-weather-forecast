<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h5 class="panel-title">{{ convertToDate({ dt: weatherDay.dt }) | date: dateFormat }}</h5>
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
  methods: {
    convertToStandard(temp) {
      if (this.isFahrenheit) {
        this.convertToFahrenheit(temp);
      }
    },
    convertToFahrenheit(temp) {},
    convertToDate(date) {
      return this.dateFormat;
    }
  }
};
//  :convert-to-standard="convertToFahrenheit(daytimeTemp)"
// :convert-to-date="convertToDate(dt)"
//
</script>