<template>
  <div id="timer">
    <h2 class="text-h4 font-weight-bold">{{ title }}</h2>
    <div class="timer">
      <div class="time">
        {{ formatTime }}
      </div>
      <div class="d-flex buttons">
        <v-btn color="green" @click="start" v-if="!timerOn">Starta</v-btn>
        <v-btn color="white" @click="stop" v-if="timerOn">Pausa</v-btn>
        <v-btn color="red" @click="cancel">Avbryt</v-btn>
      </div>
    </div>
    <p class="mt-8 text-h5">Study session count: {{ studyCount }}</p>
  </div>
</template>

<script>

export default {
  name: 'timer',
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
