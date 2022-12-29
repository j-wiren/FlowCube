<template>
    <v-app>
        <v-main>
            <div class="d-flex flex-column align-center">
                <select-cube></select-cube>
                <router-link to="/flow-info">
                    <v-btn>Läs vår guide till Flow</v-btn>
                </router-link>
            </div>
        </v-main>
    </v-app>
</template>

<script>
import SelectCube from '@/components/SelectCube.vue'

export default {
    components: { SelectCube },
}

</script>