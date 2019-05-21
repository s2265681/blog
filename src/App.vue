<template>
  <div id="app">
    <router-view @changeTab="change"></router-view>
    <!-- <Footerbar v-if="this.iflogin"/> -->
    <!-- <Child msg='message'/> -->
  </div>
</template>

<script>
// import Footerbar from "./components/footer-bar/index.vue";
// import Child from "./components/child.vue";


export default {
  name: "app",
  data() {
    return {
      iflogin: true,
      // msg:'我要去子组件'
    };
  },
  components: {
    // Footerbar,
    // Child
  },

  methods: {
    change(e) {
      this.iflogin = e;
    }
  }
};
</script>
<style>
</style>
