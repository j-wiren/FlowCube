<template>
    <div>
        <h2 class="text-h4 font-weight-bold mb-8">Select your preferred mode</h2>
        <div class="d-flex flex-column cards">
          <mode-card
            v-for="mode in modes"
            @preview-mode="doThing(mode.webhookId)"
            :mode="mode">
          </mode-card>
        </div>
        <router-link to="/set-timer">
            <v-btn @click="saveSelectedMode" color="primary" class="text-body-1 mt-8">Continue</v-btn>
        </router-link>
    </div>
</template>

<script>
import ModeCard from "@/components/ModeCard.vue"
  export default ({
    components: {
      ModeCard
    },
    data() {
        return {
            modes: [
                {
                  name: "Mode 1",
                  lightingDescription: "Warm White",
                  soundDescription: "Whale Sounds",
                  webhookId: "-TPgvqhjDcca7ZlKFd3WRnoZn"
                },
                {
                  name: "Mode 2",
                  lightingDescription: "Cold",
                  soundDescription: "Boomer Sounds",
                  webhookId: "-h1ZALAY-UdLtd97nZP6z-aQL"
                },
            ],
            selectedMode: null
        }
    },
    methods: {
      selectMode: function(selectedMode) {
        this.selectedMode = selectedMode
        console.log(this.selectedMode)
      },
      saveSelectedMode: function() {
        this.$root.selectedMode = this.selectedMode
        console.log("saved ", this.$root.selectedMode.name, "as selected mode." )
      },
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

<style>
.cards {
  gap: 1rem;
}
</style>