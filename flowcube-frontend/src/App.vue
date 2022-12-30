<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studyLength: 20,
      breakLength: 5
    }
  }
}
</script>

<style>
  .wrapper {
      min-height: 100vh;

  }
</style>