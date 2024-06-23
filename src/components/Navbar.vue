<script setup>

</script>

<template>
  <div class="navbar">
    <div class="icon">
        <button class="fa-solid fa-bars"></button>
        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="">
        <span>Keep</span>
    </div>

    <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search">
    </div>
  </div>
</template>

<style scoped>
.navbar {
    position: absolute;
    top: 0;
    width: 100%;
    height: 72px;
    border-bottom: 1px solid gray;
    padding: 24px;
    display: flex;
    align-items: center;
}

.icon {
    display: flex;
    align-items: center;
    width: 250px;
}

span {
    font-size: 22px;
    color: #5f6368;
}

.search {
    display: flex;
    align-items: center;
    height: 50px;
    width: 720px;
    padding: 4px 12px;
    border: 1px solid transparent;
    border-radius: 8px;
    background: #f1f3f4;
    color: #5f6368;
}

input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
}

.fa-bars {
    border: 0px;
    font-size: 20px;
    background: white;
    cursor: pointer;
    color: #5f6368;
}

.fa-magnifying-glass {
    width: 30px;
}

img {
    width: 40px;
    margin: 0 5px 0 20px;
}
</style>