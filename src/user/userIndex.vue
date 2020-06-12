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
       <div class="fl m-t-lg">
         <el-avatar :size="80" :src="userInfo.user_image" class="v-middle fl m-r-md"></el-avatar>
         <div class="fl">
           <strong><p class="size24 l-h-1-6x bbs_user_name">{{userInfo.real_name}}</p></strong>
           <p class="m-t-xs size14 text-gray pointer" @click="$router.push({path:'/user'})">基本信息设置<i class="el-icon-arrow-right"></i></p>
         </div>
       </div>
       <ul class="fl countFollow">
         <li>关注<strong class="m-l-sm">{{countFollow.count}}</strong></li>
         <li>收藏<strong class="m-l-sm">{{countCollect.count}}</strong></li>
       </ul>
    </div>
  </div>
  <div class="wrap userTab">
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="商品" name="commodity">
          <div class="wrap m-t-sm">
            <div class="userCon">
              <el-row>
                <el-col :span="6" v-for="goo of goods">
                  <div class="recommendList">
                    <el-image :src="goo.goods.goods_thumb" @click="$router.push({path:'/shopdetails',query:{spuid:goo.goods.spu_id,shopid:goo.goods.shop_id}})"></el-image>
                    <div class="name size14 text-darkgray">
                       <p class="goods_name m-t-xs m-b-xs" @click="$router.push({path:'/shopdetails',query:{spuid:goo.goods.spu_id,shopid:goo.goods.shop_id}})">{{ goo.goods.goods_name }}</p>
                       <span class="size12 text-mainColor">￥{{goo.goods.low_price}}</span>
                       <span class="size12 text-gray fr">已售: {{goo.goods.sales_actual}}件 </span>
                    </div>
                  </div>
                </el-col>
               </el-row>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="攻略" name="Raiders">
          <div v-for="rai of guide">
            <div class="newsBox" @click="$router.push({path:'/raiders',query:{id:rai.id}})">
              <el-image :src="rai.guide.bbs_pic" class="newsImg"></el-image>
              <div class="newsCon">
                <h5>{{rai.guide.bbs_title}}</h5>
                <div class="raidersConText text-gray">
                 <span class="fl size12">阅读{{rai.guide.bbs_view}} | 评论{{rai.guide.bbs_com_num}} |  收藏{{rai.guide.bbs_collect_num}} |  {{rai.guide.bbs_user_name}}</span>
                 <span class="fr size12">{{rai.guide.updated_at}}</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="案例" name="Case">

        </el-tab-pane>
        <el-tab-pane label="效果图" name="Renderings">
          <div class="renderings-listcon">
            <el-row :gutter="20">
              <el-col :span="6" v-for="site of demo">
                <div class="case">
                  <el-image :src="site.demo.img" :preview-src-list="site.demo.images.oss_url"></el-image>
                  <div class="caseInfo">
                    <div class="name size14 text-darkgray"><span class="title">{{ site.demo.title }}</span><span class="fr text-gray v-middle">{{ site.demo.mianji }}㎡</span></div>
                  </div>
                </div>
              </el-col>

            </el-row>

          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
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
          userInfo:[],
          activeName: 'commodity',
          goods:[],
          guide:[],
          demo:[],
          countFollow:[],
          countCollect:[]
        }
      },
      components: {
        myhead,
        myfooter
      },
      mounted() {
        document.cookie
        var token = this.$cookies.get("token")
        this.tokenData = token
        var tokenData= {
          'user_token' : this.tokenData,
        };
        var token = tokenData; // 这里才是你的表单数据
        this.$ajax.post('consumer/getUserInfos',tokenData).then((response) => { //用户个人信息
          if (response.status >= 200 && response.status < 300) {
            this.userInfo = response.data.data
          } else {
            console.log(response.message);
          }
        });

        this.$ajax.get('consumer/collect', //商品
          {
            params: {
              'user_token' : this.tokenData,
              'target_type' : 'goods'
            },
          }
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            this.goods = response.data.data
          } else {
            console.log(response.message);
          }
        });

        this.$ajax.get('consumer/collect', //案例
          {
            params: {
              'user_token' : this.tokenData,
              'target_type' : 'work'
            },
          }
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            this.work = response.data.data
          } else {
            console.log(response.message);
          }
        });

        this.$ajax.get('consumer/collect', //攻略
          {
            params: {
              'user_token' : this.tokenData,
              'target_type' : 'guide'
            },
          }
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            this.guide = response.data.data
          } else {
            console.log(response.message);
          }
        });

        this.$ajax.get('consumer/collect', //效果图
          {
            params: {
              'user_token' : this.tokenData,
              'target_type' : 'demo'
            },
          }
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            this.demo = response.data.data
          } else {
            console.log(response.message);
          }
        });

        this.$ajax.post('consumer/countFollow', tokenData).then((response) => { //关注数量统计
            this.countFollow = response.data.data
        });
        this.$ajax.post('consumer/countCollect', tokenData).then((response) => { //关注数量统计
            this.countCollect = response.data.data
        });

      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
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
    .userTop { height: 140px; background: url("~@/assets/img/user/bg.jpg") repeat-x;
      .countFollow { margin: 50px 0 0 50px;
        &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
        li { margin-right: 50px; float: left; font-size: 16px;}
      }
    }
    .userTab {
      .el-tabs__header { padding:0 30px; background-color: #fff;}
      .el-tabs__item { height: 60px; line-height: 60px; font-size: 16px;}
    }
    .userCon { padding: 30px; width: 1160px; background-color: #fff;
        .recommendList { margin: 0 10px 20px 10px; height: 300px;;
          .el-image { width: 100%; background-color: #f8f8f8;}
          img { height: 180px;}
        }
    }
    .noComment { padding-bottom: 20px; text-align: center; color: #999; display: none;
        img { margin-top: 30px;}
    }
    .newsBox { margin:0 0 20px 0; background: #fff; border-radius: 5px; overflow: hidden;
      &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
      .newsImg { float: left; width: 270px; height: 130px;}
      .newsCon { float: left; padding: 25px; width: 880px;
        h5 { margin-bottom: 10px; color: #333; font-size: 16px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;}
      }
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
