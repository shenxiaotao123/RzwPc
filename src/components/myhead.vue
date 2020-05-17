<template>
  <div class="myhead">
    <div class="wrap">
      <a href="/" class="logo"></a>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="$router.push({path:'/'})">首页</el-menu-item>
        <el-menu-item index="2" @click="$router.push({path:'/constructionList'})">找施工</el-menu-item>
        <el-menu-item index="3" @click="$router.push({path:'/designerList'})">找设计</el-menu-item>
        <el-menu-item index="4">买材料</el-menu-item>
        <el-menu-item index="5">效果图</el-menu-item>
        <el-menu-item index="6">查攻略</el-menu-item>
        <el-menu-item index="7">咨询问答</el-menu-item>
        <el-submenu index="8">
          <template slot="title">更多</template>
          <el-menu-item index="8-1">创客空间</el-menu-item>
          <el-menu-item index="8-2">城市合作</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
    export default {
        name: "myhead",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style lang="less">
.myhead { height: 82px; background: #fff;
  .logo { margin-top: 30px; float: left; display: block; width: 177px; height: 23px; background: url("~@/assets/img/components/logo.png") no-repeat;}
  .el-menu.el-menu--horizontal { margin-top: 11px; float: right; border: 0;}
}
</style>
