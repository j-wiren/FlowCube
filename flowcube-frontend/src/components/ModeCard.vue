<template>
  <div>
    <v-sheet class="d-flex w-100 flex-column gap-8 rounded-xl pa-8" elevation="5">
      <h4 class="text-h5 font-weight-bold">{{ mode.name }}</h4>
      <p><v-icon icon="mdi-lightbulb-variant"></v-icon>{{ mode.lightingDescription }}</p>
      <p><v-icon icon="mdi-speaker"></v-icon>{{ mode.soundDescription }}</p>
      <v-btn @click="$emit('previewMode')" color="white" class="font-weight-bold" variant="outlined">Preview</v-btn>
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
<style scoped>
.gap-8 {
  gap: 0.5rem;
}
</style>