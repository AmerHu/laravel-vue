<template>
  <div class="wrapper theme-1-active pimary-color-green">
    <!-- Top Menu Items -->
    <navbar />
    <leftmenu />
    <div class="page-wrapper">
      <router-view :key="this.$router.currentRoute.path"></router-view>
      <pagefooter />
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import leftmenu from "./components/leftmenu";
import pagefooter from "./components/pagefooter";
export default {
  name: "app",
  components: {
    navbar,
    leftmenu,
    pagefooter,
  }
};
</script>

<style>
</style>
