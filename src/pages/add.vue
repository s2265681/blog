<template>
   <div class="addblog">
      <div class="title" style="font-size: .5rem ; " >新增博客</div>
    <div class="content-input">
          <span class="t_lab">标题:</span>
          <el-input style="width:5.5rem;" v-model="title" placeholder="输入标题" prefix-icon="search" ></el-input>
    </div>
  <div class="content-input">
       <span  class="t_lab">内容:</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 6, maxRows: 10}"
          placeholder="请输入内容"
           style="width:5.5rem;"
          v-model="content">

      </el-input>
      </div>
      <el-button @click="addBlog" class="button_sub">新增</el-button>
  </div>
</template>

<script>

import {  addBlogList,getBlogList  } from './../service/getData'

export default {
  name: 'credit',
  inject: ['reload'],  // 注入reload依赖
  data(){
    return{
      content:'',
      title:''
    }
  },
  methods:{
   async addBlog(){
        const result = await  addBlogList(this.title,this.content)
        if(result.code===200){
            this.$message({
              type:'success',
              message:'新增成功'
            })
            this.reload()   // 直接调用
            this.$router.go(-1)
            // window.location.reload()
                // getBlogList()
            // this.$router.push('/admin')
            // location.go(-1)
        
        }else{
          this.$message({
              type:'error',
              message:'新增失败'
            })
        }
     }
  }
}
</script>
<style scoped>
.content-input{
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    font-size: .4rem;
    width: 100%;
    margin: 0.2rem;
    margin-top: 0.4rem;
    position: relative;
    top: 1.5rem;
}
.t_lab{
      margin-right: .2rem;
    font-size: 0.24rem;
}
.button_sub{
  position: relative;
    top: 1.2rem;
    text-align: center;
    left: 50%;
    margin-left: -.7rem;
    width: 1.4rem;
}
</style>