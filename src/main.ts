import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { createWebHashHistory, createRouter } from "vue-router";
import HelloWorld from "./components/Home.vue";

const history = createWebHashHistory()
const router = createRouter({history, routes: [
    {path:'/', component: HelloWorld},
    {path:'/', component: HelloWorld},
  ]})

const app = createApp(App)
app.use(router)
app.mount('#app')
