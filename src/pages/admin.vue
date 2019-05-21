<template>
<div>
   <div class="title1" style="font-size: .5rem ;">博客管理</div>
   <div class="searchBlog">
       <span >搜索博客:</span> <el-input placeholder="作者名" style="width:5.2rem" v-model.number="keysword" prefix-icon="search" clearable></el-input>
   </div>
   <div class="btn">
     <el-button size='mini' @click="clickSearch" type="primary" class="clickSearch" style="width:2.3rem" >搜索</el-button>
      <el-button size='mini' @click="toAddBlog" type="primary" class="clickSearch" style="width:2.3rem" >新增博客</el-button>
   </div>
  <el-table
    :data="tableData.data"
    style="width: 100% ; margin-top: 1rem">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">
          {{$moment(scope.row.createtime).format('YYYY-MM-DD')}}
        </span>
      </template>
    </el-table-column>
    <!-- <el-table-column
      label="序号"
      width="180">
      <template slot-scope="scope">
          <p>{{ scope.row.id }}</p>
      </template>
    </el-table-column> -->
     <el-table-column
      label="标题"
      width="180">
      <template slot-scope="scope">
          <p>{{ scope.row.title }}</p>
      </template>
    </el-table-column>
      <el-table-column
      label="作者"
      width="180">
      <template slot-scope="scope">
          <p>{{ scope.row.author }}</p>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180" >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import {  getBlogList , delBlogList , searchBlogList } from './../service/getData'

  export default {
    data() {
      return {
        tableData: [],
        keysword:'',
      }
    },
    mounted(){
      this.getList()
    },
    methods: {
      async getList(){
        this.tableData =   await getBlogList()
      },
      toAddBlog(){
         this.$router.push(`/add`)
      },
      handleEdit(index, row) {
        const id = row.id ;
        this.$router.push(`/edit?id=${id}`)

      },
       async handleDelete(index, row) {
          const id = row.id ;
          if (confirm('确定删除？')) {
            // let author = 'zhangsan'
          const result = await delBlogList(id)
             if(result.errno===-1){
                  this.$message({
                    message: result.message,
                    type:'error'
                  });
                    this.$router.push(`/login`)
             }else{
                 this.$message({
                            message:'删除成功',
                            type:'success'
                          });
                     this.tableData =  await getBlogList()
             }
          }
      },
      // 搜素
      async clickSearch(){
          this.tableData = await searchBlogList(this.keysword)
      }
    }
  }
</script>
<style>
 .title{
   margin-bottom: 3rem;
 }
 .searchBlog{
    display: flex;
    font-size: .3rem;
    padding-left: 0.2rem;
    flex-direction: column;
 }
  .searchBlog span{
    margin-bottom: .1rem;
  }
   .searchBlog .clickSearch{
    width: 1.2rem;
    margin-top: .2rem;
  }
</style>
