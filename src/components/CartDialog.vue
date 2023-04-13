<template>
    <dialog open>
        <img :src="item.img" alt="">
        <p class="wrapp-title">{{ item.title + ' ' + item.painter + ' ' + item.price + '$' }}</p>
    </dialog>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style>

dialog {
    position: absolute;
    top: 30%;
    left: 0;
    width: 400px;
    margin: 0 auto;
    /* border: none; */
    padding: 0;
}

img {
    width: 100%;
}

</style>