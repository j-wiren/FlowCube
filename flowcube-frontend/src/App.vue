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
      breakLength: 5,
      selectedMode: null,
      breakMode: {
        name: "break",
        webhookId: "-WE3U7f7hEkxkSLxw9pMT4Psx"
      }
    }
  }
}
</script>

<style>
  .wrapper {
      min-height: 100vh;

  }
</style>