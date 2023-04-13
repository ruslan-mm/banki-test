<template>
    <footer>
        <div class="container footer-container flex">
            <NavList />
            <Address />
        </div>

    </footer>

</template>

<script>
import NavList from '@/pages/NavList.vue';
import Address from '@/pages/Address.vue';

export default {
    components: {NavList, Address}
}
</script>