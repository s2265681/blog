<template>
   <div class="editblog">
      <div class="title" style="font-size: .5rem ; " >编辑博客</div>
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
          <el-button @click="updatBlog" class="button_sub">更新</el-button>
  </div>
</template>

<script>
import {  updateBlogList, detailBlogList  } from './../service/getData'

export default {
  name: 'editblog',
  data(){
    return{
      content:'',
      title:'',
      id:''
    }
  },
 async mounted(){
     let id = window.location.hash.split('?')[1].split('=')[1]
          const data  = await detailBlogList(id);
          this.title = data.data.title
          this.content = data.data.content
          this.id= id
          this.author = data.data.author
          
  },
  methods:{
   async updatBlog(){
        const result = await updateBlogList(this.id,this.title,this.content, this.author )
        if(result.code===200){
            this.$message({
              type:'success',
              message:'更新成功'
            })
            this.$router.push('/admin')
        }else{
          this.$message({
              type:'error',
              message:'更新失败'
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