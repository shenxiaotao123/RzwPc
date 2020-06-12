<template>
 <div class="bg-f7">
   <myhead></myhead>
   <div class="breadcrumbwrap">
     <div class="wrap pos-rlt">
       <el-breadcrumb separator="/">
         <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>咨询问答</el-breadcrumb-item>
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
         <el-col :span="8" v-for="radv of recommendAdvisory.slice(0,3)">
           <div class="case">
             <el-image></el-image>
             <div class="caseInfo">
               <div class="name size14 text-darkgray">
                 <span class="text-gray">#{{ radv.class.name }}#</span>
                 <span class="title pointer" @click="$router.push({path:'/qa',query:{id:radv.id,class_id:radv.class_id}})">{{ radv.bbs_title }}</span>
               </div>
             </div>
           </div>
         </el-col>
       </el-row>

       <div class="advisoryWrap">
         <div class="advisoryBox" v-for="adv of advisory.slice(0,8)">
           <div class="advisoryAsk pointer" @click="$router.push({path:'/qa',query:{id:adv.id,class_id:adv.class_id}})">
             <span class="fr text-gray font-normal">#{{ adv.class.name }}#</span>
             <i class="advicon askIcon"></i>{{ adv.bbs_title }}
           </div>
           <div class="advisoryAnswer"><i class="advicon answerIcon"></i>{{ adv.last_comment }}</div>
           <div class="advisoryAll text-gray pointer" @click="$router.push({path:'/qa',query:{id:adv.id,class_id:adv.class_id}})">
             <span class="fr">{{adv.updated_at}}</span>
             全部 <span class="text-mainColor">{{adv.bbs_com_num}}</span> 个回答
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
            advisory:[],
            bbsclass:[],
            recommendAdvisory:[]
          }
        },
        components: {
          myhead,
          myfooter
        },
      mounted() {
        this.$ajax.get('bbs/advisory',
        {
          params: {
            'is_rec' : '1'
          },
        },).then((response) => { //咨询列表
          if (response.status >= 200 && response.status < 300) {
            this.recommendAdvisory = response.data.data
          } else {
            console.log(response.message);
          }
        });
        this.$ajax.get('bbs/advisory').then((response) => { //咨询列表
          if (response.status >= 200 && response.status < 300) {
            this.advisory = response.data.data
          } else {
            console.log(response.message);
          }
        });
        this.$ajax.get('bbs/class').then((response) => { //咨询分类列表
          if (response.status >= 200 && response.status < 300) {
            this.bbsclass = response.data.data
          } else {
            console.log(response.message);
          }
        });
      },
      methods: {
        router(class_id){ //获取风格分类的ID
          this.$ajax.get('bbs/advisory' + '?class_id	=' + class_id ).then((response) => { //商品列表
              this.advisory = response.data.data
          });
        },
        getstyle(index) {
          this.activeClass = index;  // 把当前点击元素的index，赋值给activeClass
        },
        styleAll() {
          this.$ajax.get('bbs/advisory').then((response) => { //商品列表
              this.advisory = response.data.data
          });
        },
      }
    }
</script>

<style lang="less">
  @mian-color: #c82126;

  .bannerPic { height: 360px; background: url("~@/assets/img/qa/banner.jpg") no-repeat center top;}

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
          .title { display: inline-block; width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: sub;}
        }
       }
    }

   .advisoryWrap { padding: 5px 30px 30px 30px; background-color: #fff;
     .advisoryBox { padding: 25px 0; border-bottom: 1px solid #eee; font-size: 14px;
        &:last-of-type { border: 0;}
       .advisoryAsk { padding:0 0 10px 0; font-weight: 700; cursor: pointer;
          .askIcon { background: url("~@/assets/img/qa/ask.jpg") no-repeat center top;}
       }
       .advisoryAnswer {
         .answerIcon { background: url("~@/assets/img/qa/answer.jpg") no-repeat center top;}
       }
       .advicon { margin-right: 10px;; display: inline-block; width: 18px; height: 19px; vertical-align: middle;}
       .advisoryAll { padding: 10px 0 0 0; cursor: pointer;}
     }
   }

</style>
