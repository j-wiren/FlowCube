<template>
    <div class="wrapper-padding">
        <h4 class="text-h4 font-weight-bold mb-8">Choose an available Flow Cube</h4>
        <select-cube></select-cube>
        <router-link to="/flow-info">
            <v-btn size="x-large" color="blue font-weight-bold text-h6 mx-auto mt-8">Read our guide to Flow<v-icon icon="mdi-chevron-right"></v-icon></v-btn>
        </router-link>
    </div>
</template>

<script>
import SelectCube from '@/components/SelectCube.vue'

export default {
    components: { SelectCube },
}

</script>

<style>
</style>