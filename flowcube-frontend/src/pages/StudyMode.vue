<template>
  <div id="timer">
    <h2 class="text-h2 font-weight-bold">{{ title }}</h2>
    <div class="timer">
      <div class="time">
        {{ formatTime }}
      </div>
      <v-btn color="green" @click="start" v-if="!timerOn" class="mx-auto">Starta</v-btn>
      <v-btn color="red" @click="stop" v-if="timerOn" class="mx-auto">Pausa</v-btn>
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
      this.timerOn = false
      this.breakTime = true
      this.setBreakTime()
    },

    setBreakTime: function() {
      this.min = 5
      this.sec = 0
      this.title = "Snyggt jobbat! Ta en paus"
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
