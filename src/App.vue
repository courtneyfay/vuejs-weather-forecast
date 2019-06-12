<template>
  <div id="app">
    <navigation/>
    <router-view class="container"/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>

<style>
html,
body {
  font-size: 1.1em;
}
</style>
