<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue';
import Catalog from '@/components/Catalog.vue';

export default {
  name: 'App',
  components: { Header, Footer, Catalog }
};
</script>

<style scoped>
div  {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
