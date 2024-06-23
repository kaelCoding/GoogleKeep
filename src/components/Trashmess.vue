<script setup>
import { messagesTrash, deleteMessage, saveData } from "./Stores.vue"
import Message from "./Message.vue";

const deleteMessTrash = (elm) => {
    deleteMessage(elm, 'messagesTrash', messagesTrash)
}

const clearMessTrash = () => {
    messagesTrash.value.splice(0, messagesTrash.value.length)

    saveData("messagesTrash", messagesTrash)
}

</script>

<template>
    <div class="trash">
        <div class="note-trash">
            <i>Ghi chú trong Thùng rác bị xoá trong 7 ngày.</i>
            <button @click="clearMessTrash">Dọn sạch thùng rác</button>
        </div>
        <div class="container">
            <Message v-for="mess of messagesTrash" 
                :key="mess.id" 
                :message="mess"
                @deleteMess="deleteMessTrash(mess)"/>
        </div>
    </div>
</template>

<style scoped>
.trash {
    width: calc(100% - 280px);
}

.note-trash {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-size: 18px;
    color: #202124
}

button {
    color: #1a73e8;
    font-size: 17px;
    font-weight: 500;
    margin-left: 24px;
    border: none;
    background: transparent;
    cursor: pointer;
}

.container {
    display: flex;
    width: 100%;
    gap: 20px;
    flex-wrap: wrap;
    padding: 24px;
}
</style>