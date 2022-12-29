<template>
  <v-container class="fill-height bg-gray">
    <v-responsive class="d-flex align-center text-center fill-height">
      <h4 class="text-h4 font-weight-bold mb-8">Choose an available Flow Cube</h4>
      <v-sheet class="d-flex flex-column rounded-xl mx-auto pa-12" height="400" width="300" elevation="5">
        <h4 class="text-h4 font-weight-bold">Flow Cube 1</h4>
        <v-img src="./src/assets/logo.png"></v-img>
        <router-link to="/select-mode">
          <v-btn class="font-weight-bold" variant="outlined">Choose Flow Cube</v-btn>
        </router-link>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script>

</script>
