<template>
  <div>
    <v-sheet class="d-flex flex-column rounded-xl pa-8" height="200" width="150" elevation="5">
      <h4 class="text-h6 font-weight-bold">{{ mode.name }}</h4>
      <v-img src="./src/assets/logo.png" class="mx-auto" width="50"></v-img>
      <v-btn @click="$emit('selectMode')" color="white" class="font-weight-bold" variant="outlined">Välj</v-btn>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    mode: Object,
  },
}
</script>
