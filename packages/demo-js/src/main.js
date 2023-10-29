import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// TODO 会造成 3180往1920缩放不刷新
// import 'vuetify/styles'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
