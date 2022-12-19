<template>
  <div class="h-screen min-width-screen d-flex align-center">
    <div class="d-flex flex-column justify-center mx-auto text-max-width">
      <h3 class="text-h3 text-center">{{ this.info.title }}</h3>
      <p class="text-body-1"> {{ this.info.body }} </p>
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