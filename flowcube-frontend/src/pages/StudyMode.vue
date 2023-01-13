<template>
  <div id="timer" class="wrapper-padding">
    <back-button />
    <div class="min-h-32">
      <h2 v-if="!timerOn || isBreakTime" class="text-h4 text-center font-weight-bold">{{ title }}</h2>
      <ul v-if="!timerOn || isBreakTime" class="pa-8">
        <li v-for="listItem in body" :key="listItem.index" class="text-decoration-none">{{ listItem }}</li>
      </ul>
    </div>
    <div class="timer">
      <div class="time text-center">
        {{ formatTime }}
      </div>
      <div class="d-flex buttons">
        <v-btn variant="outlined" color="green" @click="start" v-if="!timerOn">Start</v-btn>
        <v-btn color="white" @click="stop" v-if="timerOn">Pause</v-btn>
        <v-btn v-if="timerOn" variant="outlined" color="red" @click="cancel">Cancel</v-btn>
      </div>
    </div>
    <p v-if="!timerOn || isBreakTime" class="mt-8 text-h5 text-center text-grey">Study session count: {{ studyCount }}</p>
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
        "1. Turn off your notifications",
        "2. Start the timer",
        "3. Put your phone on the table, screen down",
        "4. The lights will indicate when it's time for a break"
      ],
      loadingMessages: [
        "Don't forget to hydrate! 💦",
        "Tip: take a short walk in the room to get your blood flowing 💃",
        "Remember to stretch your neck and back! 🙆",
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

      this.timerOn = true;
    },

    stop: function() {
      clearInterval(this.timerObj);
      this.timerOn = false;
    },

    complete: function() {
      clearInterval(this.timerObj)
      this.timerOn = false
      if (!this.isBreakTime) {
        this.isBreakTime = true
        this.setBreakTime()
        this.doThing(this.$root.breakMode.webhookId)
        this.studyCount++
        this.title = "Time for a break!"
        this.setBreakMessage()
        return
      }
      this.isBreakTime = false
      this.setStudyTime()
      this.title = "Time to get back to studying!"
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
      response = await fetch('http://10.204.0.58:8123/api/webhook/' + webhook, {
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
}
.time {
  font-size: 100px;
}

.buttons {
  gap: 1rem;
  justify-content: center;
}

.text-decoration-none {
  list-style: none;
}
</style>
