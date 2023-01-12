<template>
    <div>
        <h4 class="text-h4 font-weight-bold mb-8">Choose an available Flow Cube</h4>
        <select-cube></select-cube>
        <router-link to="/flow-info">
            <v-btn color="blue text-h6 mt-8">Read the guide to Flow></v-btn>
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