<template>
  <!-- <select-cube @doThing="doThing"></select-cube> -->
  <router-view></router-view>
</template>

<script>
  export default ({
    methods: {
      async doThing() { 
        response = await fetch('http://192.168.1.54:9102/api/webhook/-TPgvqhjDcca7ZlKFd3WRnoZn', {
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
</style>