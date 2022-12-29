<template>
  <div id="timer">
    <h2 class="text-h2 font-weight-bold">{{ title }}</h2>
    <div class="timer">
      <div class="time">
        {{ formatTime }}
      </div>
      <v-btn color="green" @click="start" v-if="!timerOn">Starta</v-btn>
      <v-btn color="white" @click="stop" v-if="timerOn">Pausa</v-btn><br>
      <v-btn color="red" @click="cancel" class="mt-4">Avbryt</v-btn>

    </div>
  </div>
</template>

<script>

export default {
  name: 'timer',
  data() {
    return {
      title: "Dags att plugga!",
      min: 0,
      sec: 5,
      timerOn: false,
      timerObj: null,
      breakTime: false,
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
      this.timerOn = true; //timerがONであることを状態として保持
    },

    stop: function() {
      clearInterval(this.timerObj);
      this.timerOn = false; //timerがOFFであることを状態として保持
    },

    complete: function() {
      clearInterval(this.timerObj)
      this.doThing("-TPgvqhjDcca7ZlKFd3WRnoZn")
      this.timerOn = false
      this.breakTime = true
      this.setBreakTime()
      this.title = "Snyggt jobbat! Ta en paus"
    },

    cancel: function() {
      this.timerOn = false
      this.min = 0
      this.sec = 5
    },

    setBreakTime: function() {
      this.min = 5
      this.sec = 0
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
</style>
