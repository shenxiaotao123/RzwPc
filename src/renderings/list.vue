<template>
 <div class="bg-f7">
   <myhead></myhead>
   <div class="breadcrumbwrap">
     <div class="wrap pos-rlt">
       <el-breadcrumb separator="/">
         <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>效果图</el-breadcrumb-item>
       </el-breadcrumb>
       <div class="breadcrumbpic"></div>
     </div>
   </div>

   <div class="wrap">
     <div class="filter">
         <div class="fi-wrap">
           <div class="fi-key">风格：</div>
           <div class="fi-value">
             <ul class="fi_valueList">
                <li :class="activeClass == index ? 'active':''" @click="getstyle(index)"><a @click="styleAll()">全部</a></li>
                <li :class="activeClass == index ? 'active':''" v-for="(ds,index) of designerStyle" @click="router(ds.id),getstyle(index)">{{ds.name}}</li>
             </ul>
           </div>
         </div>
         <div class="fi-wrap">
           <div class="fi-key">户型：</div>
           <div class="fi-value">
             <ul class="fi_valueList">
                <li :class="SactiveClass == index2 ? 'active':''" @click="getshapes(index2)"><a @click="styleAll()">全部</a></li>
                <li :class="SactiveClass == index2 ? 'active':''" v-for="(sh,index2) of shapes" @click="router(sh.id),getshapes(index2)"><a>{{sh.name}}</a></li>
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
         <el-col :span="6" v-for="site of renderings.slice(0,12)">
           <div class="case">
             <el-image :src="site.img" :preview-src-list="site.work_images"></el-image>
             <div class="caseInfo">
               <div class="name size14 text-darkgray"><span class="title">{{ site.title }}</span><span class="fr text-gray v-middle">{{ site.mianji }}㎡</span></div>
             </div>
           </div>
         </el-col>

       </el-row>


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
  import downloadApp from '@/public/downloadApp' //弹出框APP引导
    export default {
        name: "list",
        data() {
          return {
            renderings:[],
            designerStyle:[],
            shapes:[],
            activeClass:'全部',
            SactiveClass:'全部',
          }
        },
        components: {
          myhead,
          myfooter,
          downloadApp
        },
      mounted() {
        this.$ajax.get('designer/works').then((response) => { //设计师作品
          if (response.status >= 200 && response.status < 300) {
            this.renderings = response.data.data
          } else {
            console.log(response.message);
          }
        });
        this.$ajax.get('designer/style').then((response) => { //设计风格列表
          if (response.status >= 200 && response.status < 300) {
            this.designerStyle = response.data.data
          } else {
            console.log(response.message);
          }
        });
        this.$ajax.get('shapes').then((response) => { //户型列表
          if (response.status >= 200 && response.status < 300) {
            this.shapes = response.data.data
          } else {
            console.log(response.message);
          }
        });
      },
      methods: {
        open() {
          this.$alert(<downloadApp/>,{
            dangerouslyUseHTMLString: true,
              showConfirmButton:false,
          });
        },
        router(style_id){ //获取风格分类的ID
          //console.log(style_id);
          this.$ajax.get('designer/works' + '?style_id=' + style_id ).then((response) => { //商品列表
              this.renderings = response.data.data
          });
        },
        getstyle(index) {
          this.activeClass = index;  // 把当前点击元素的index，赋值给activeClass
        },
        styleAll() {
          this.$ajax.get('designer/works').then((response) => { //商品列表
              this.renderings = response.data.data
          });
        },

        router(shape_id){ //获取户型分类的ID
          console.log(shape_id);
          this.$ajax.get('designer/works' + '?shape_id=' + shape_id ).then((response) => { //商品列表
              this.renderings = response.data.data
          });
        },
        getshapes(index2) {
          this.SactiveClass = index2;  // 把当前点击元素的index，赋值给activeClass
        },
      }
    }
</script>

<style lang="less">
  @mian-color: #c82126;
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

</style>
