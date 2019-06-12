import Vue from "vue";
import moment from "moment";

Vue.filter("formatDate", function(date, formatter) {
  return moment(date).format(formatter);
});
