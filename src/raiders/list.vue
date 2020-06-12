<template>
 <div class="bg-f7">
   <myhead></myhead>
   <div class="breadcrumbwrap">
     <div class="wrap pos-rlt">
       <el-breadcrumb separator="/">
         <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>查攻略</el-breadcrumb-item>
       </el-breadcrumb>
       <div class="breadcrumbpic"></div>
     </div>
   </div>
   <div class="bannerPic"></div>
   <div class="wrap">
     <div class="filter">
         <div class="fi-wrap">
           <div class="fi-key">分类：</div>
           <div class="fi-value">
             <ul class="fi_valueList">
               <li :class="activeClass == index ? 'active':''" @click="getstyle(index)"><a @click="styleAll()">全部</a></li>
               <li :class="activeClass == index ? 'active':''" v-for="(bc,index) of bbsclass" @click="router(bc.id),getstyle(index)">{{bc.name}}</li>
             </ul>
           </div>
         </div>

       </div>

     <div class="sort">
         <a href="#" class="active">
           收藏最多<i class="el-icon-caret-bottom"></i>
         </a>
         <a href="#">
           更新时间<i class="el-icon-caret-bottom"></i>
         </a>
       </div>

     <div class="renderings-listcon">
       <el-row :gutter="20">
         <el-col :span="6" v-for="rai of raiders.slice(0,4)">
           <div class="case pointer" @click="$router.push({path:'/raiders',query:{id:rai.id}})">
             <el-image :src="rai.bbs_pic"></el-image>
             <div class="caseInfo">
               <div class="name size14 text-darkgray">
                 <span class="title">{{ rai.bbs_title }}</span>
                 <span class="fr text-gray v-middle">#{{ rai.class.name }}#</span>
                 </div>
             </div>
           </div>
         </el-col>

       </el-row>
       <div v-for="rai of raiders2.slice(0,8)">
         <div class="newsBox pointer" @click="$router.push({path:'/raiders',query:{id:rai.id}})">
           <el-image :src="rai.bbs_pic" class="newsImg"></el-image>
           <div class="newsCon">
             <h5>{{rai.bbs_title}}</h5>
             <p class="text-gray size12">#{{ rai.class.name }}#</p>
             <div class="raidersConText text-gray">
              <span class="fl">阅读{{rai.bbs_view}} | 评论{{rai.bbs_com_num}} |  收藏{{rai.bbs_collect_num}} |  {{rai.bbs_user_name}}</span>
              <span class="fr">{{rai.updated_at}}</span>
             </div>
           </div>
         </div>
       </div>

      <div class="text-c m-t-xxl">
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
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
            raiders:[],
            raiders2:[],
            bbsclass:[]
          }
        },
        components: {
          myhead,
          myfooter
        },
      mounted() {
        this.$ajax.get('bbs/guide',
        {
          params: {
            'is_rec' : '1'
          },
        },).then((response) => { //攻略列表
          if (response.status >= 200 && response.status < 300) {
            this.raiders = response.data.data
          } else {
            console.log(response.message);
          }
        });
        this.$ajax.get('bbs/guide').then((response) => { //攻略列表2
          if (response.status >= 200 && response.status < 300) {
            this.raiders2 = response.data.data
          } else {
            console.log(response.message);
          }
        });
        this.$ajax.get('bbs/class').then((response) => { //攻略/咨询 分类列表
          if (response.status >= 200 && response.status < 300) {
            this.bbsclass = response.data.data
          } else {
            console.log(response.message);
          }
        });
      },
      methods: {
        router(class_id){ //获取风格分类的ID
          this.$ajax.get('bbs/guide' + '?class_id	=' + class_id ).then((response) => { //商品列表
              this.raiders2 = response.data.data
          });
        },
        getstyle(index) {
          this.activeClass = index;  // 把当前点击元素的index，赋值给activeClass
        },
        styleAll() {
          this.$ajax.get('bbs/guide').then((response) => { //商品列表
              this.raiders2 = response.data.data
          });
        },
      }
    }
</script>

<style lang="less">
  @mian-color: #c82126;

  .bannerPic { height: 370px; background: url("~@/assets/img/raiders/banner.jpg") no-repeat center -50px;}
   .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col { border-radius: 4px;}
    .bg-purple-dark { background: #99a9bf;}
    .bg-purple { background: #fff;}
    .bg-purple-light { background: #e5e9f2;}
    .grid-content { border-radius: 4px; min-height: 36px;}
    .row-bg { padding: 10px 0; background-color: #f9fafc;}
    .breadcrumbwrap { padding: 10px 0; line-height:24px; background:#333;
        .el-breadcrumb__item {
          span { color:#fff; font-size: 12px;}
          .el-breadcrumb__inner { color: #eee;}
        }
        .breadcrumbpic { position:absolute; bottom: -12px; right:0; width:342px; height:68px; background: url("~@/assets/img/construction/breadcrumb.png") no-repeat;}
      }
    .filter { padding:35px 35px 25px 35px; background:#fff; font-size:12px;
      .fi-wrap { margin-bottom:10px;
        &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
        .fi-key { float: left;  padding: 3px 10px; color: #000; font-weight:700;}
        .fi-value { padding-right: 30px; padding-left: 10px; overflow: hidden; zoom: 1;
          .fi_valueList {
            &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
            li { float:left; margin:0 20px 0 0; height: 22px; line-height: 22px; cursor: pointer;
              .active { background:@mian-color; color:#fff; border-radius:3px; }
            }
          }
        }
      }
    }
    .sort { margin: 10px 0; height:38px; line-height:38px; background: #fff; border:1px solid #eee;
      a { display: inline-block; padding:0 20px; color:#888; font-size:12px; border-right: 1px solid #eee;
      }
      .active { color:@mian-color;}
    }
    .renderings-listcon {
      &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
       .case { margin:0 0 20px 0; background-color: #fff;
       .el-image__inner { width: 100%; height: 190px;}
        .caseInfo { padding:10px 15px 15px 15px;
          .title { display: inline-block; width: 180px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: sub;}
        }
       }
    }
    .newsBox { margin:0 0 20px 0; background: #fff; border-radius: 5px; overflow: hidden;
      &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
      .newsImg { float: left; width: 270px; height: 130px;}
      .newsCon { float: left; padding: 25px; width: 880px;
        h5 { margin-bottom: 10px; color: #333; font-size: 16px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;}
      }
    }
    .raidersConText { margin-top: 10px; font-size: 12px;
      &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
    }
</style>
