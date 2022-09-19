<template>
  <div id="app">
    <div class=main_container>
      <router-view/>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer
  }
}  
</script>
