<template>
  <div class="login">登录页123</div>
</template>

<script>
// import { blogList } from './../api/index';// 导入我们的api接口
// import API from "./../api/index";
export default {
  name: "login",
    // name: 'Address',
    // created () {
    //     this.onLoad();
    // },
    // methods: {
    // // 获取数据
    //     onLoad() {
    //     // 调用api接口，并且提供了两个参数
    //         blogList({
    //         // type: 0,
    //         // sort: 1
    //         }).then(res => {
    //         // 获取数据成功后的其他操作
    //         (res,'dddddddddd')
    //         })
    //     }
     mounted() {
    // 加载的函数
    //  if(this.$cookie.get('openId')){
     this.getBlogList();
    // this.$emit("changeTab", true);
  },
  methods: {
    getBlogList() {
      // this.$http.get(API.getBlogList).then(response => {
      //   let res = response.data;
      //   // this.userInfo = res.data;
      //   // (res,'res')
      // });
    },


    }
};
</script>
<style>
</style>