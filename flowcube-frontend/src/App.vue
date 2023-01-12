<template>
  <v-app>
    <div class="pa-8">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      studyLength: 20,
      breakLength: 5,
      selectedMode: null,
      hostName: null,
      breakMode: {
        name: "break",
        webhookId: "-WE3U7f7hEkxkSLxw9pMT4Psx"
      }
    }
  },
  methods: {
    fetchHostName() {
      this.hostName = window.location.hostname
      console.log(this.hostName)
    }
  },
  beforeMount() {
    this.fetchHostName()
  }
}
</script>

<style>
</style>