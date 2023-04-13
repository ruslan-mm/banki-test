<template>
    <header class="header">
        <div class="container flex header-container">
            <NavList />
            <SearchInput />
        </div>
    </header>
</template>

<script>
import NavList from '@/pages/NavList.vue';
import SearchInput from '@/pages/SearchInput.vue';
export default {
    components: { NavList, SearchInput }
}
</script>
