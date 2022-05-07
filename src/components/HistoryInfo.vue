<template lang="">
  <div class="parent">
    <div class="description">
     historyinfo
    </div>
    <div class="vr"></div>
    <div>
      <img src="../assets/heroes-sqr.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryInfo",
  methods: {
  }
};
</script>

<style>
 .parent {
   display: flex;
 }

 img {
   width: 300px;
   padding-left: 20px;
 }

 .description {
   padding-right: 20px;
 }
</style>
