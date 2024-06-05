import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

createApp(App)

  .use(vue3GoogleLogin, {
  clientId: '350074552888-miuhi42p49e9l6rssjnp6gi4s81n5bdp.apps.googleusercontent.com',
})

  .mount('#app');


