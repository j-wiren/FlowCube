<template>
  <v-app>
    <div>
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
        webhookId: "neutral"
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
.wrapper-padding {
  padding: 2rem;
}

.min-h-32 {
  min-height: 16rem;
}

.min-h-64 {
  min-height: 32rem;
}

</style>