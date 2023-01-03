<template>
  <div class="h-screen min-width-screen d-flex align-center pa-8">
    <div class="d-flex flex-column justify-center mx-auto text-max-width">
      <h4 class="text-h4 font-weight-bold mb-4">{{ this.info.title }}</h4>
      <p v-for="(line, key) in this.info.body" :key="key" class="text-body-1 mb-4"> {{ line }} </p>
      <v-list lines="one" v-if="this.info.ul">
        <v-list-item v-for="(item, key) in this.info.ul" :key="key" class="text-body-1">{{ item }}</v-list-item>
      </v-list>
      <router-link to="/select-mode">
        <v-btn v-if="this.info.lastPage"  color="primary" class="text-body-1 mt-8">Gå vidare</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
import { list } from 'postcss';

export default({
  data() {
    return {

    }
  },
  props: {
    info: list,
  }
})
</script>

<style>
.text-max-width {
  max-width: 45ch;
}

/* fixa så att skiten inte är fucked */
.min-width-screen {
  min-width: 100vw;
  scroll-snap-align: start;
}

.overflow-x-scroll {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
</style>