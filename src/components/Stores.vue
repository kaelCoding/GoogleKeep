<script>
import { ref } from "vue"
export const messages = ref([]);
export const messagesTrash = ref([]);

export const saveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getData = (key, array) => {
  const value = localStorage.getItem(key);

  if (value){
      const arr = JSON.parse(value);
      const realArr = [...arr._value];

      for (let i=0; i<realArr.length; i++){
          array.value.push(realArr[i])
      }
  }
}

export const deleteMessage = (index, key, array) => {
    array.value.splice(index, 1)
    saveData(key, array)
}
</script>

<template>

</template>

<style scoped>

</style>