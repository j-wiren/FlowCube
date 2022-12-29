<template>
    <h2 class="text-h2 font-weight-bold">Välj ett läge</h2>
    <v-btn v-for="mode in modes" @click="doThing(mode.webhookId)">{{ mode.name }}</v-btn>
</template>

<script>
  export default ({
    data() {
        return {
            modes: [
                { name: "Läge 1", webhookId: "-TPgvqhjDcca7ZlKFd3WRnoZn" },
                { name: "Läge 2", webhookId: "-TPgvqhjDcca7ZlKFd3WRnoZn" }
            ]
        }
    },
    methods: {
      async doThing(webhook) { 
        response = await fetch('http://192.168.1.54:9102/api/webhook/' + webhook, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: ""
        })
        response();
      }
    }
  })

</script>