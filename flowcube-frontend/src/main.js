/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { createRouter, createWebHistory } from 'vue-router'

// Routes
import Home from '@/pages/Home.vue'
import FlowInfo from '@/pages/FlowInfo.vue'
import SelectMode from '@/pages/SelectMode.vue'
import SetTimer from '@/pages/SetTimer'
import StudyMode from '@/pages/StudyMode'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/flow-info', name: 'FlowInfo', component: FlowInfo },
    { path: '/select-mode', name: 'SelectMode', component: SelectMode },
    { path: '/set-timer', name: 'SetTimer', component: SetTimer },
    { path: '/study-mode', name: 'StudyMode', component: StudyMode }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App)

registerPlugins(app)

app.use(router).mount('#app')
