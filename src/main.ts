import { createApp } from 'vue'
import App from './App.vue'

import Harlem from '@harlem/core'

import { router } from './router'

import registerGlobalComponents from './plugins/global-components'
import setAuthorizationToken from './plugins/set-authorization-token'
import { createPinia } from 'pinia'

import { defineRule } from 'vee-validate'
import { email, required, alpha, min } from '@vee-validate/rules'

defineRule('email', email)
defineRule('required', required)
defineRule('alpha', alpha)
defineRule('min', min)

const app = createApp(App)
app.use(router)
app.use(Harlem)
app.use(createPinia())

setAuthorizationToken()
registerGlobalComponents(app)

app.mount('#app')
