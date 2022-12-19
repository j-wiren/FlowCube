<template>
  <v-app>
    <v-main>
      <select-cube @doThing="doThing"></select-cube>
    </v-main>
  </v-app>
</template>

<script>
  import SelectCube from '@/components/SelectCube.vue'
  export default ({
    components: { SelectCube },
    data() {
      return {

      }
    },
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