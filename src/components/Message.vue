<script setup>
const props = defineProps(["message"])
const emits = defineEmits(["deleteMess"])

const deleteMess = () => {
  emits("deleteMess")
}

</script>

<template>
  <div class="container-mess">
    <div style="font-weight: 500; ">{{ message.title }}</div>
    <div> {{ message.note }} </div>
    <button @click="deleteMess" class="fa-regular fa-trash-can"></button>
  </div>
</template>

<style scoped>
.container-mess {
  display: flex;
  width: 240px;
  flex-direction: column;
  border: 1px solid gray;
  padding: 12px;
  border-radius: 8px;
  gap: 10px;
}

button {
  width: 40px;
  margin-left: auto;
  margin-top: auto;
  border: none;
  background: transparent;
  cursor: pointer;
}

div {
  white-space: pre-wrap;
}
</style>