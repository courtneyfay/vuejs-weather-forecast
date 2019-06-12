//Utilities
import Vue from "vue";
import Router from "vue-router";

//Views
import HomePage from "./views/HomePage.vue";
import ForecastPage from "./views/ForecastPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage
    },
    {
      path: "/forecast/:days",
      name: "Forecast",
      component: ForecastPage,
      props: true
    }
  ]
});
