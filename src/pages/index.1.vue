<template>
  <div class="index">
    <img src="./../assets/img/sea.jpg" class="header" alt>
    <div class="title">
       带鱼
      <span class="logintxt" @click="toLogin">登录</span>
    </div>
    <div class="btn-group">
      <div class="btn btn-primary" @click="creditExtension">授信</div>
      <div class="btn" @click="drawMoney">提款</div>
    </div>
  </div>
</template>
<script>
// import API from "./../api/index";
export default {
  name: "index",
  data() {
    return {
      userInfo: "",
      message:'3333'
     
    };
  },
  beforeMount() {
    
  },
  mounted() {
      this.getUserInfo();
      this.$emit("changeTab", true);
  },
  methods: {
    getUserInfo() {
      // this.$http.get(API.getBlogList).then(response => {
        // let res = response.data;
      // });
    },

    creditExtension() {
      this.$router.push("/creditExtension");
    },
    drawMoney() {
      this.$router.push("/drawMoney");
    },
    toCredit() {
      this.$router.push("/credit");
    },
    toMine() {
      this.$router.push("/mine");
    },
    toLogin() {
      // 子组件中触发父组件方法changeTab并传值
      this.$emit("changeTab", false);
      this.$router.push("./login");
    }
  }
};
</script>
<style scoped>
.title {
  position: fixed;
  width: 100%;
  text-align: center;
  font-size: 0.6rem;
  color: #5d2f2f;
  top: 0.25rem;
}

</style>
<style>
.logintxt {
  position: fixed;
  font-size: 0.34rem;
  right: 0.3rem;
}
.index {
  background-color: #55547be0;
  height: 100vh;
}
.btn-group {
  padding-top: 0.34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 3.5rem;
}
.footer {
  position: fixed;
  bottom: 0;
  display: flex;
  max-width: 100%;
  /* color: #696a8b; */
}
</style>