<template>
<div>
  <myhead></myhead>
  <div class="breadcrumbwrap">
    <div class="wrap pos-rlt">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>账户中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
  <div class="userTop">
    <div class="wrap">
       <div class="fl">
         <el-avatar :size="50" :src="userInfo.user_image" class="v-middle fl m-r-sm"></el-avatar>
         <p class="size18 l-h-1-6x bbs_user_name">{{userInfo.real_name}}</p>
         <p class="size12 text-gray">进入个人主页</p>
       </div>
    </div>
  </div>
  <myfooter></myfooter>
</div>
</template>

<script>
  import myhead from '@/components/myhead'
  import myfooter from '@/components/myfooter'

  export default {
      name: "list",
      data() {
        return {
          userInfo:[]
        }
      },
      components: {
        myhead,
        myfooter
      },
      mounted() {
        this.$ajax.post('consumer/getUserInfos' + 'id=1').then((response) => { //咨询分类列表
          if (response.status >= 200 && response.status < 300) {
            this.userInfo = response.data.data
          } else {
            console.log(response.message);
          }
        });
      }
  }
</script>

<style lang="less">
  .breadcrumbwrap { padding: 10px 0; line-height:24px; background:#333;
      .el-breadcrumb__item {
        span { color:#fff; font-size: 12px;}
        .el-breadcrumb__inner { color: #eee;}
      }
      .breadcrumbpic { position:absolute; bottom: -12px; right:0; width:342px; height:68px;}
    }
    .userTop { height: 140px; background: url("~@/assets/img/user/bg.jpg") repeat-x;}
</style>
