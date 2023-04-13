<template>
    <nav class="header-nav nav">
        <ul class="header-list flex">
            <li class="header-item" v-for="(item, i) in navigation" :key="i">
                <router-link href="#" class="item-link" to="*">
                    {{ item }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import navigation from '@/data/navigation.js';


export default {
    data() {
        return {
            navigation
        };
    },
}
</script>