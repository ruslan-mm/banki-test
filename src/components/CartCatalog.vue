<template>
    <li class="wrapp-item" :class="{ opacity: item.isSold }">
        <img @click.prevent="openModal" :src="item.img" alt="venera">
        <p class="wrapp-title">{{ item.title + ' ' + item.painter }}</p>
        <div class="wrap-prices flex">
            <div class="wrap-price">
                <p class="price-off">{{ item.oldPrice | numberFormat }} </p>
                <p class="price-on">{{ item.price | numberFormat }} </p>
            </div>
            
            <button :disabled='this.isPending' @click.prevent="addItem" v-if="!item.isSold && !item.inBucket" class="btn btn-reset btn-click">
                <span v-if="isPending">Загрузка</span>
                <span v-else>Купить</span>
            </button>
            <button @click.prevent="deleteItem" v-if="item.inBucket" class="btn btn-reset btn-click">
                <span v-if="isPending">Загрузка</span>
                <span v-else>В корзине</span>
            </button>
        </div>
        <CartDialog v-click-outside="closeModal" :item="item" v-if="isOpen" />
    </li>
</template>

<script>
import CartDialog from '@/components/CartDialog.vue';
import numberFormat from '@/helpers/numberFormat';
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            isOpen: false,
            isPending: false
        }
    },
    components: { CartDialog },
    props: ['item'],
    filters: {
        numberFormat
    },
    methods: {
        ...mapMutations(['addToBucket', 'deleteFromBucket']),
        openModal() {
            this.isOpen = true
        },
        closeModal() {
            this.isOpen = false
        },
        addItem() {
            this.isPending = true;
            setTimeout(() => {
                this.addToBucket(this.item);
                this.isPending = false
            }, 2000)
        },
        deleteItem() {
            this.isPending = true;
            setTimeout(() => {
                this.deleteFromBucket(this.item);
                this.isPending = false
            }, 2000)
        }
    },
}
</script>