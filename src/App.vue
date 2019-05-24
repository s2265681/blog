<template>
  <div id="app">
    <router-view @changeTab="change" v-if="isRouterAlive"></router-view>
    <!-- <Footerbar v-if="this.iflogin"/> -->
    <!-- <Child msg='message'/> -->
  </div>
</template>

<script>
// import Footerbar from "./components/footer-bar/index.vue";
// import Child from "./components/child.vue";


export default {
  name: "app",
  provide(){
    return {
      reload:this.reload
    }
  },
  data() {
    return {
      iflogin: true,
      // msg:'我要去子组件'
      isRouterAlive:true
    };
  },
  components: {
    // Footerbar,
    // Child
  },

  methods: {
    change(e) {
      this.iflogin = e;
    },
    reload(){
      this.isRouterAlive =false;
      this.$nextTick(function(){
        this.isRouterAlive =true;
      })
    }
  }
};
</script>
<style>
</style>
