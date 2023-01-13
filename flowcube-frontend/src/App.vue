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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  font-family: Inter, 'Proxima Nova', Helvetica, sans-serif;
}

.wrapper-padding {
  padding: 2rem;
}

.min-h-32 {
  min-height: 16rem;
}

.min-h-64 {
  min-height: 24rem;
}

v-btn:visited {
  text-decoration: none;
}

</style>