<template>
    <div class="wrapper-padding">
      <back-button />
      <h2 class="text-h4 font-weight-bold mb-8">Select your preferred mode</h2>
      <div class="d-flex flex-column cards">
        <mode-card
          v-for="(mode, key) in modes"
          :key="key"
          @select="selectMode(mode)"
          @preview-mode="doThing(mode.webhookId)"
          :mode="mode">
        </mode-card>
      </div>
      <v-btn @click.prevent="saveSelectedMode" block color="primary" class="text-body-1 mt-8">Continue</v-btn>
      <v-dialog v-model="dialog">
        <v-card>
          <v-card-text>
            Whoops! Seems like you didn't select a mode just there 🤔<br>Try again!
          </v-card-text>
          <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
import ModeCard from "@/components/ModeCard.vue"
import BackButton from "@/components/BackButton.vue"
  export default ({
    components: {
      ModeCard,
      BackButton
    },
    data() {
        return {
            modes: [
                {
                  name: "Standard Mode",
                  lightingDescription: "Low light, medium white warmth",
                  soundDescription: "Background music",
                  webhookId: "standard",
                  selected: false
                },
                {
                  name: "Full Blast",
                  lightingDescription: "Medium light, cold",
                  soundDescription: "Pink noise",
                  webhookId: "blast",
                  selected: false
                },
                {
                  name: "Chill",
                  lightingDescription: "Medium light, warm white",
                  soundDescription: "Lo-fi beats to study to",
                  webhookId: "chill",
                  selected: false
                },
                {
                  name: "Gamer Mode",
                  lightingDescription: "Medium light, violet",
                  soundDescription: "EDM / Psytrance",
                  webhookId: "gamer",
                  selected: false
                },
                {
                  name: "Classic",
                  lightingDescription: "Medium light, warm white",
                  soundDescription: "Whale Sounds",
                  webhookId: "classic",
                  selected: false
                },
                {
                  name: "Jazz",
                  lightingDescription: "Low light, Warm White",
                  soundDescription: "Smooth lowtempo jazz",
                  webhookId: "jazz",
                  selected: false
                },
                {
                  name: "Doomscrolling",
                  lightingDescription: "Low light, cold grey",
                  soundDescription: "Anguish",
                  webhookId: "doomscrolling",
                  selected: false
                },
                {
                  name: "fml",
                  lightingDescription: "Dark",
                  soundDescription: "Silence",
                  webhookId: "fml",
                  selected: false
                }
            ],
            selectedMode: null,
            dialog: false
        }
    },
    methods: {
      selectMode: function(selectedMode) {
        this.selectedMode = selectedMode
        selectedMode.selected = true

        this.modes.forEach(mode => {
          if (mode !== selectedMode)
            mode.selected = false
        });
      },
      saveSelectedMode: function() {
        if ( this.selectedMode == null ) {
          this.dialog = true
          return
        }
        this.$root.selectedMode = this.selectedMode
        this.doThing(this.$root.breakMode.webhookId)
        console.log("saved ", this.$root.selectedMode.name, "as selected mode." )
        this.$router.push('/set-timer')
      },
      async doThing(webhook) { 
        let webHookUrl = ('http://10.204.0.58:8123/api/webhook/' + webhook)
        console.log(webHookUrl)
        response = await fetch(webHookUrl, {
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