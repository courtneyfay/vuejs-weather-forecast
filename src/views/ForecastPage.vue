<template>
  <section>
    <p>
      <router-link to="/">Back to Search</router-link>
    </p>
    <h4>Forecast for {{ city }}</h4>
    <hr>
    <ul>
      <p>Days:</p>
      <a href="/forecast/2" :class="{ 'bg-primary': days === '2' }">2</a> |
      <a href="/forecast/5" :class="{ 'bg-primary': days === '5' }">5</a> |
      <a href="/forecast/7" :class="{ 'bg-primary': days === '7' }">7</a>
    </ul>
    <hr>
    <div v-for="result in weatherResult.list" :key="result.city">
      <div class="row">
        <div class="col-md-12">
          <weather-report
            weather-day="result"
            convert-to-standard="convertToFahrenheit(daytimeTemp)"
            convert-to-date="convertToDate(dt)"
            date-format="MMM d,y"
          ></weather-report>
        </div>
      </div>
    </div>
  </section>
</template>
