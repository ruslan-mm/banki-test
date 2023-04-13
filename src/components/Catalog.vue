<template>
    <main class="main">
        <div class="container container-h2">
            <h1 class="text-h2">Картины эпохи Возрождения</h1>
        </div>
        <div class="container">
            <div class="wrapper">
                <ul class="wrap-list flex">
                    <CartCatalog v-for="item, i in carts" :key="i" :item="item"/>
                </ul>
            </div>

        </div>
    </main>
</template>

<script>
import { mapGetters, } from 'vuex';
import CartCatalog from '@/components/CartCatalog.vue';

export default {
    components: { CartCatalog },
    computed: mapGetters(['carts']),
}
</script>
