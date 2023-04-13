<template>
    <div class="srch flex">
        <input class="input-search" v-model="filterString" type="text" placeholder="Поиск по названию картины">
        <button class="btn btn-reset btn-srch" @click.prevent="filterCarts">Найти</button> 
    </div >
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            filterString: ''
        }
    },
    methods: {
        ...mapMutations(['handleChangeSearchInput']),
        filterCarts() {
            this.handleChangeSearchInput(this.filterString)
        }
    }
}
</script>