import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import Toolbar from "primevue/toolbar";
import Card from "primevue/card"
import Carousel from "primevue/carousel";

import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"
import * as buffer from "buffer";                           //icons

const app = createApp(App)


app.use(store)
app.use(router)
app.use(PrimeVue)

//PrimeVue components

app.component('Button', Button)
app.component('Toolbar', Toolbar)
app.component('Card', Card)
app.component('Carousel', Carousel)


app.mount('#app')
