import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/base.css'

import VueSupabase from "vue-supabase";


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClose, faCheck, faC } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import ButtonSecondary from '@/components/ButtonSecondary.vue'

library.add(faClose, faCheck)

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueSupabase, {
    supabaseUrl: 'https://xkjmtewvwcwnkpefyijm.supabase.co',
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhram10ZXd2d2N3bmtwZWZ5aWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM4ODE3OTksImV4cCI6MTk2OTQ1Nzc5OX0.Wtr0T6vpVlDUFzawRT6gNlfLl-mDUWU7wn9dktaxQLQ',
    supabaseOptions: {}
  })
  .component('x-button-primary', ButtonPrimary)
  .component('x-button-secondary', ButtonSecondary)
  .component('icon', FontAwesomeIcon)

app.mount('#app')
