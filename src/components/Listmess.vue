<script setup>
import { ref } from "vue"
import { messages, messagesTrash, deleteMessage, saveData } from "./Stores.vue"
import Message from "./Message.vue"

const check = ref(false)

const showInput = () => {
  check.value = true
}

const closeInput = () => {
  check.value = false

  if (mess.value.title != "" || mess.value.note != ""){
    createMess()
  }

  mess.value.title = ""
  mess.value.note = ""
}

const mess = ref({
  title: "",
  note: ""
})

const createMess = () => {
  messages.value.push({
    title: mess.value.title,
    note: mess.value.note
  })
  
  saveData("messages", messages)
}

const addMessTrash = (elm, index) => {
  deleteMessage(index, 'messages', messages)
  
  messagesTrash.value.push({
    title: elm.title,
    note: elm.note
  })
  saveData("messagesTrash", messagesTrash)
}

</script>

<template>
  <div class="list-mess" @click="closeInput">
    <div class="container-search">
      <div class="form-search" @click.stop="">
        <div class="note" v-if="!check" @click="showInput">Tạo ghi chú...</div>
        <div class="create-mess" v-if="check">
          <textarea v-model="mess.title" type="text" placeholder="Tiêu đề" style="font-weight: 500; font-size: 18px;"></textarea>
          <textarea v-model="mess.note" type="text" placeholder="Tạo ghi chú..."></textarea>
          <span class="exit" @click="closeInput">Đóng</span>
        </div>
      </div>
    </div>

    <div class="container-message">
      <Message v-for="(message, index) of messages" 
        :message="message" 
        @deleteMess="addMessTrash(message, index)"/>
    </div>
  </div>
</template>

<style scoped>
.list-mess {
  width: calc(100% - 280px);
}

.container-search {
  display: flex;
  width: 100%;
  margin: 32px auto 16px auto;
  justify-content: center;
  align-items: center;
}

.form-search {
  width: 600px;
  border: 1px solid gray;
  border-radius: 8px;
}

.note {
  width: 100%;
  padding: 12px;
  font-weight: 600;
  color: #5f6368;
}

.create-mess {
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
}

textarea {
  width: 100%;
  outline: none;
  border: none;
  font-size: 17px;
  resize: none;
}

.exit {
  margin-left: auto;
  color: rgba(0,0,0,.87);
  font-weight: 450;
  font-size: 17px;
  cursor: pointer;
}

.container-message {
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
}
</style>