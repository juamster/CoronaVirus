import vue from "vue";

vue.filter("currency", val => {
  return "$" + val.toFixed(0);
});