<template>
  <div>
    <v-card @click="$emit('select'); selected = true" class="d-flex w-100 flex-column gap-8 rounded-xl pa-8" :class="selected ? 'border-test' : 'border-none'" elevation="5">
      <h4 class="text-h5 font-weight-bold">{{ mode.name }}</h4>
      <p><v-icon icon="mdi-lightbulb-variant"></v-icon>{{ mode.lightingDescription }}</p>
      <p><v-icon icon="mdi-speaker"></v-icon>{{ mode.soundDescription }}</p>
      <v-btn @click="$emit('previewMode')" color="white" class="font-weight-bold" variant="outlined">Preview</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    mode: Object,
  },
  data() {
    return {
      selected: false
    }
  }
}
</script>
<style scoped>
.gap-8 {
  gap: 0.5rem;
}

.border-test {
  outline: 4px solid white;
}

.border-none {
  outline: none;
}

.border-box {
  box-sizing: initial;
}
</style>