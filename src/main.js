import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import GoogleAuth from 'vue-google-oauth2'

// const gauthOption = {
//   clientId: '611365370180-d08ofork3kbhi1knvqsipt090pl3du3t.apps.googleusercontent.com',
//   scope: 'email',
//   prompt: 'consent'
// }

// const app = createApp(App)
// app.use(GoogleAuth, gauthOption)

// app.mount('#app')

// app.config.globalProperties.$googleAuth = app.config.globalProperties.$googleAuth || {}

// app.config.globalProperties.$googleAuth.handleSignInVue = () => {
//     export default {
//         name: 'Google Auth',
//         mounted() {
//           this.$googleAuth.handleSignInVue()
//         }
//       }
// }


// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import GoogleAuth from 'vue-google-oauth2'

// const gauthOption = {
//   clientId: '611365370180-d08ofork3kbhi1knvqsipt090pl3du3t.apps.googleusercontent.com',
//   scope: 'email',
//   prompt: 'consent'
// }

// const app = createApp(App)
// app.use(GoogleAuth, gauthOption)
// app.mount('#app')

