import { createApp } from 'vue'
import App from './App.vue'
import { getData, messages, messagesTrash } from "./components/Stores.vue"

createApp(App).mount('#app')

getData("messages", messages)
getData("messagesTrash", messagesTrash)
