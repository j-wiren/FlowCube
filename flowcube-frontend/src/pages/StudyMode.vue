<template>
  <div id="timer">
    <back-button />
    <h2 class="text-h4 font-weight-bold">{{ title }}</h2>
    <ol class="pa-8">
      <li v-for="listItem in body" :key="listItem.index" class="">{{ listItem }}</li>
    </ol>
    <div class="timer">
      <div class="time">
        {{ formatTime }}
      </div>
      <div class="d-flex buttons">
        <v-btn color="green" @click="start" v-if="!timerOn">Start</v-btn>
        <v-btn color="white" @click="stop" v-if="timerOn">Stop</v-btn>
        <v-btn color="red" @click="cancel">Cancel</v-btn>
      </div>
    </div>
    <p class="mt-8 text-h5">Study session count: {{ studyCount }}</p>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue'
export default {
  name: 'timer',
  components: { BackButton },
  
  data() {
    return {
      title: "Time to study!",
      min: 0,
      sec: this.$root.studyLength,
      timerOn: false,
      timerObj: null,
      isBreakTime: false,
      studyCount: 0,
      breakLength: this.$root.breakLength,
      body: [
        "Turn off your notifications",
        "Start the timer",
        "Put your phone on the table, screen down",
        "The lights will indicate when it's time for a break"
      ],
      loadingMessages: [
        "Don't forget to hydrate! 💦",
        "Tip: take a short walk in the room too get your blood flowing 💃",
        "Remember to stretch your neck and back 🙆",
        "If you're feeling exhausted, have a snack! 🍫",
        "Try changing the Flow mode if it's not working for you 💡",
        "Try to avoid overworking yourself, it could affect your Flow negatively 🧠"
      ]
    }
  },
  methods: {
    count: function() {
      if (this.sec <= 0 && this.min >= 1) {
        this.min --;
        this.sec = 59;
      } else if(this.sec <= 0 && this.min <= 0) {
        this.complete();
      } else {
        this.sec --;
      }
    },

    start: function() {
      let self = this;
      this.timerObj = setInterval(function() {self.count()}, 1000)
      if (!this.isBreakTime) {
        this.doThing(this.$root.selectedMode.webhookId)
      }

      this.timerOn = true; //timerがONであることを状態として保持
    },

    stop: function() {
      clearInterval(this.timerObj);
      this.timerOn = false; //timerがOFFであることを状態として保持
    },

    complete: function() {
      clearInterval(this.timerObj)
      this.timerOn = false
      if (!this.isBreakTime) {
        this.isBreakTime = true
        this.setBreakTime()
        this.doThing(this.$root.breakMode.webhookId)
        this.studyCount++
        this.title = "Good work! Time for a break"
        return
      }
      this.isBreakTime = false
      this.setStudyTime()
      this.title = "Time to get back to studying!"
      this.setBreakMessage()
    },

    cancel: function() {
      this.stop()
      if (this.isBreakTime) {
        this.setBreakTime()
        return
      }
      this.setStudyTime()
    },
    setStudyTime: function() {
      this.min = 0
      this.sec = this.$root.studyLength
    },
    setBreakTime: function() {
      this.min = 0
      this.sec = this.breakLength
    },
    setBreakMessage: function() {
      let randomIndex = Math.floor(Math.random() * this.loadingMessages.length)
      this.body = [this.loadingMessages[randomIndex]]
      console.log(this.body)
    },
    async doThing(webhook) { 
      response = await fetch('http://172.20.10.8:8123/api/webhook/' + webhook, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: ""
      })
      response();
    }
  },
  computed: {
    formatTime: function() {
      let timeStrings = [
        this.min.toString(),
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ":" + timeStrings[1]
    }
  }
}
</script>

<style scoped>
#timer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.time {
  font-size: 100px;
}

.buttons {
  gap: 1rem;
  justify-content: center;
}
</style>
