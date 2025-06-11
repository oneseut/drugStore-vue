import 'ant-design-vue/dist/reset.css' // 全局样式
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
