<template>
  <v-app>
    <v-main>
      <!-- <select-cube @doThing="doThing"></select-cube> -->
      <div class="d-flex overflow-x-scroll">
        <info-dump v-for="(infoItem, index) in info"
          :key="index"
          :info="infoItem"
        >
        </info-dump>
      </div>
    </v-main>
  </v-app>
</template>

<script>
  // import SelectCube from '@/components/SelectCube.vue'
  import InfoDump from '@/components/InfoDump.vue'
  export default ({
    components: { 
      // SelectCube,
      InfoDump
    },
    data() {
      return {
        info: [
          {
            id: 0,
            title: "Rubrik 1",
            body: "lorem ipsum"
          },
          {
            id: 1,
            title: "Rubrik 2",
            body: "dolor sit amet"
          },
          {
            id: 1,
            title: "Bajs",
            body: "hej"
          },
        ]
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