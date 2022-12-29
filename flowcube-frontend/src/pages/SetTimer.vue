<template>
    <div class="w-100 pa-16">
        <h2 class="text-h2 font-weight-bold mb-8">Anpassa din session</h2>
        <div class="text-h5">Hur länge vill du plugga?</div>
        <v-slider
            v-model="studySlider"
            thumb-label="always"
            step="5"
            show-ticks
            min="5"
            max="240"
            color="red"
            class="mt-8 slider"
            >
        </v-slider>
        <div class="text-h5">Hur lång paus efter sessionen?</div>
        <v-slider
            v-model="breakSlider"
            thumb-label="always"
            step="5"
            show-ticks
            min="5"
            max="90"
            color="blue"
            class="mt-8 slider"
            >
        </v-slider>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            studySlider: 25,
            breakSlider: 5,
        }
    }
}
</script>

<style>
.slider {
    max-width: 24rem;
}
</style>