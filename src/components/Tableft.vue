<script setup>
import { ref } from "vue"
import Listmess from "./Listmess.vue"
import Trashmess from "./Trashmess.vue"

const list = ref([
    {
        id: 0,
        icon: "fa-regular fa-lightbulb",
        note:"Ghi chú",
        background: "color",
        check: true
    },
    {
        id: 1,
        icon: "fa-regular fa-bell",
        note:"Lời nhắc",
        background: "color",
        check: false
    },
    {
        id: 2,
        icon: "fa-solid fa-pencil",
        note:"Chỉnh sửa nhãn",
        background: "color",
        check: false
    },
    {
        id: 3,
        icon: "fa-solid fa-download",
        note:"Lưu trữ",
        background: "color",
        check: false
    },
    {
        id: 4,
        icon: "fa-regular fa-trash-can",
        note:"Thùng rác",
        background: "color",
        check: false
    },
])

const selectedId = ref(0)

const renderTab = (id) => {
    selectedId.value = id
}

</script>

<template>
    <div class="container">
        <div class="tableft">
            <div 
                :class="['form', selectedId === elm.id ? elm.background : '']" 
                v-for="elm of list" 
                :key="elm.id" 
                @click="renderTab(elm.id)">

                <i :class="elm.icon"></i>
                <span>{{ elm.note }}</span>
            </div>
        </div>
        <Listmess v-if="selectedId === 0"/>
        <Trashmess v-if="selectedId === 4"/>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: calc(100% - 72px);
}

.tableft {
    width: 280px;
    margin-top: 10px;
}

.color {
    background-color: #feefc3;
}

.form {
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 0 25px 25px 0;
    cursor: pointer;
    padding: 24px;
    border: 1px solid transparent;
}

i {
    width: 40px;
}

span {
    font-size: 17px;
}

</style>