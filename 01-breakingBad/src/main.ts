import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import {VueQueryPlugin} from '@tanstack/vue-query'

const app = createApp(App)

import '@/store/quotes.store'

//configuracion vue-query global
VueQueryPlugin.install(app,{
    queryClientConfig:{
        defaultOptions:{
            queries:{
                cacheTime: 1000 * 20,
                refetchOnReconnect: 'always'
            },

        }
    }
})


app.use(router)
app.mount('#app')
