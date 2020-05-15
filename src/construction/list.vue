<template>
 <div class="bg-f7">
   <myhead></myhead>
   <div class="breadcrumbwrap">
     <div class="wrap pos-rlt">
       <el-breadcrumb separator="/">
         <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>找施工</el-breadcrumb-item>
       </el-breadcrumb>
       <div class="breadcrumbpic"></div>
     </div>
   </div>

   <div class="wrap">
       <div class="filter">
         <div class="fi-wrap">
           <div class="fi-key">所在城市：</div>
           <div class="fi-value">
             <ul class="fi_valueList">
               
             </ul>
           </div>
         </div>
         <div class="fi-wrap">
           <div class="fi-key">承接户型：</div>
           <div class="fi-value">
             <ul class="fi_valueList">
               <li v-for="sh of shapes"><a>{{sh.name}}</a></li>
             </ul>
           </div>
         </div>
       </div>

       <div class="sort">
         <a href="#" class="active">
           综合排序<i class="el-icon-caret-bottom"></i>
         </a>
         <a href="#">
           点评最多<i class="el-icon-caret-bottom"></i>
         </a>
       </div>

     <div class="designer-listcon">
       <div class="des-conleft">
           <div class="dse-listbox" @click="$router.push({path:'/company',query:{id:company.id}})" v-for="company of companyList.slice(0,6)">
               <div class="dse-info">
                 <div class="fl dse-infotext">
                   <a target="_blank">
                     <el-image shape="square" :src="company.avatar" class="dse-avatar m-r-md"></el-image>
                   </a>
                   <div class="designer-info">
                     <h3>
                       <a target="_blank">
                         <span class="designer-name">{{company.name}}</span>
                       </a>
                     </h3>
                     <ul class="designer-text">
                       <li>
                         <span class="con-title">所在城市</span>{{company.address}}
                         <span class="con-title m-l-xxl">承接户型</span>{{company.shapes}}
                       </li>
                       <li>
                         <span class="con-title">施工工地</span>{{company.site_nums}}个
                         <span class="con-title m-l-xxl">评价数量</span>{{company.comment_num}}
                         <span class="con-title m-l-xxl">关注数量</span>{{company.follow_num}}
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
           </div>
           <div class="text-c m-t-xxl">
             <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
           </div>
       </div>
       <div class="des-conright">
         <div class="Propaganda">
           <h4>在施工地</h4>
             <div class="site" v-for="site of siteList.slice(0,6)">
               <el-image :src="site.thumb_img" :fit="cover"></el-image>
               <div class="caseInfo">
                 <div class="name size14 text-darkgray">{{ site.quarter_name }}<br /><span class="size12">{{ site.shape_name }}</span></div>
               </div>
             </div>
         </div>
         <div class="Propaganda m-t-md">
           <h4>要装修 上荣装网</h4>
           <div class="pg-subtitle">
             万家劳务公司为您打造最佳定制<br />在线担保交易  保障您的资金安全
           </div>
           <div class="propaganda-con">
             <i class="icon-pr01"></i>
             <dl>
               <dt>不懂装修？</dt>
               <dd>
                 一对一客服服务，全程<br/>
                 跟进解决装修疑惑
               </dd>
             </dl>
           </div>
           <div class="propaganda-con">
             <i class="icon-pr02"></i>
             <dl>
               <dt>担心设计不满意？</dt>
               <dd>
                 分阶段确认设计，每个<br/>
                 阶段修改至您满意为止
               </dd>
             </dl>
           </div>
           <div class="propaganda-con">
             <i class="icon-pr03"></i>
             <dl>
               <dt>不放心在线交易？</dt>
               <dd>
                 荣装网免费帮您保障资金<br/>
                 安全，满意了才付设计费
               </dd>
             </dl>
           </div>
         </div>
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
            siteList: [],
            companyList:[],
            shapes:[]
          }
        },
        components: {
          myhead,
          myfooter
        },
      mounted() {
        this.$ajax.get('/construction/site').then((response) => { //在施工地
          if (response.status >= 200 && response.status < 300) {
            this.siteList = response.data.data
          } else {
            console.log(response.message);
          }
        });
        this.$ajax.get('construction/company').then((response) => { //施工公司
          if (response.status >= 200 && response.status < 300) {
            this.companyList = response.data.data
          } else {
            console.log(response.message);
          }
        });
        this.$ajax.get('shapes').then((response) => { //小区列表
          if (response.status >= 200 && response.status < 300) {
            this.shapes = response.data.data
          } else {
            console.log(response.message);
          }
        });
        this.$ajax.get('regions/list').then((response) => { //地区(省市区)列表 数据
          if (response.status >= 200 && response.status < 300) {
            this.regions = response.data.data
          } else {
            console.log(response.message);
          }
        });
      }
    }
</script>

<style lang="less">
  @mian-color: #c82126;

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
            li { float:left; margin:0 20px 0 0;
              a { padding:3px 10px; display:block;}
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
    .designer-listcon {
      &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
      .des-conleft { float:left; width:960px;
        .dse-listbox { margin-bottom:20px; background:#fff; cursor: pointer;
          .dse-info { padding:25px;
            &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
            .dse-avatar { float:left; width:100px; height:100px; }
            .dse-infotext {
              .designer-info { float:left; color: #000;
                &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
                h3 { margin: 0 0 10px 0;
                  .designer-name { font-size: 16px; font-weight: 700;}
                }
                .designer-text {
                  li { margin:3px 0; font-size:14px; line-height: 180%;
                    .con-title { margin-right: 15px; opacity: 0.5;}
                  }
                }
              }
            }
            .designer-price { margin:10px 0; text-align:center; font-size: 12px;
              .size24 { margin-right: 5px; font-weight:700; color:@mian-color;}
            }
          }
          .dse-pic { padding:25px;
            img { width:210px; height:200px; border-radius:5px;
              &:hover { opacity:0.9;}
            }
          }
        }
      }
      .des-conright { float:right; width:220px;
        .site { padding: 10px 20px;
          &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
          img { width: 40px;}
          .el-image { float: left;}
          .caseInfo { float: left; padding-left: 10px; width: 130px;}
        }
        .Propaganda { padding-bottom:20px; background:#fff;
          h4 { padding:25px 0 15px 0; font-size:16px; color:#000; font-weight:700; text-align:center;}
          .pg-subtitle { padding-bottom:15px; font-size:12px; color:#666; text-align:center; border-bottom:1px dashed #eee;}
          .propaganda-con { padding:20px 10px; border-bottom:1px dashed #eee;
            &:last-child { border: 0;}
            dl { display:inline-block; font-size:12px; vertical-align:middle;}
            i { margin:0 8px; display:inline-block; width:22px; height:22px;}
            .icon-pr01 { background:url("~@/assets/img/construction/propaganda.png") no-repeat;}
            .icon-pr02 { background:url("~@/assets/img/construction/propaganda.png") no-repeat -22px 0;}
            .icon-pr03 { background:url("~@/assets/img/construction/propaganda.png") no-repeat -45px 0;}
          }
        }
      }
    }

</style>
