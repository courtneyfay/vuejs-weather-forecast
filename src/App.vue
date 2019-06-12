<template>
  <div id="app">
    <Header/>
    <router-view class="container"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
html,
body {
  font-size: 1.1em;
}
</style>
