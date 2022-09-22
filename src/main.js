import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import Toolbar from "primevue/toolbar";
import Card from "primevue/card"
import Carousel from "primevue/carousel";
import Divider from 'primevue/divider';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import TabMenu from 'primevue/tabmenu';
import Rating from 'primevue/rating';
import ProgressSpinner from 'primevue/progressspinner';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Image from 'primevue/image';


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
app.component('Divider', Divider)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Dialog', Dialog)
app.component('Textarea', Textarea)
app.component('TabMenu', TabMenu)
app.component('Rating', Rating)
app.component('ProgressSpinner',ProgressSpinner)
app.component('DataTable',DataTable)
app.component('Column',Column)
app.component('Image',Image)

app.mount('#app')
