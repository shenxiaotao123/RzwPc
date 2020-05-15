<template>
  <div class="bg-f7">
    <myhead></myhead>
    <div class="headCon">
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
              <li><span class="con-title">所在城市</span>{{company.address}}</li>
              <li><span class="con-title">承接户型</span>{{company.shapes}}</li>
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
    <div class="operating">
      <div class="wrap">
      <el-row class="fl">
        <el-button type="danger" @click="open">预约</el-button>
        <el-button icon="el-icon-phone" class="comptel">{{company.phone}}</el-button>
      </el-row>
       <div class="fl m-l-xxl size14">
         <i class="el-icon-circle-check m-l-lg m-r-xs"></i>先施工再支付
         <i class="el-icon-circle-check m-l-lg m-r-xs"></i>工地全程记录
         <i class="el-icon-circle-check m-l-lg m-r-xs"></i>施工过程透明
       </div>
      </div>
    </div>
    <div class="wrap">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="施工工地(20)" name="first">
            <div class="compCon ConstructionSite bg-ff" v-for="(site of siteHome">
              <h4>{{ site.quarter_name }}|{{ site.shape_name }}</h4>
              <p class="stage">{{ site.stage_name }}</p>
              <el-row>
                <!--<el-col :span="8" v-for="siteInfo of siteInfos.slice(0,3)"> {{siteInfo.note}}</el-col>-->
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="公司信息" name="second">
            <div class="compCon bg-ff">
              <dl>
                <dt>公司简介</dt>
                <dd>{{company.brief}}</dd>
                <dt>承接户型 </dt>
                <dd>{{company.shapes}}</dd>
                <dt>服务区域 </dt>
                <dd>{{company.address}}</dd>
                <dt>公司规模</dt>
                <dd>{{company.scale}}</dd>
                <dt>营业执照</dt>
                <dd><img :src="company.business_license_pic"/></dd>
              </dl>

            </div>
          </el-tab-pane>
          <el-tab-pane label="用户评价" name="third">
            <comment></comment>
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
  import comment from '@/public/Comment'
  import downloadApp from '@/public/downloadApp' //弹出框APP引导
    export default {
      name: "comDetails",
      data() {
        return {
          company:[],
          siteHome:[],
          // siteInfos:[],
          activeName: 'second'
        }
      },
      components: {
        myhead,
        myfooter,
        comment,
        downloadApp
      },
      mounted() {
        this.$ajax.get('construction/company/'+ this.$route.query.id + '?no_cached=1').then((response) => { //施工公司详情
          if (response.status >= 200 && response.status < 300) {
            this.company = response.data.data
          } else {
            console.log(response.message);
          }
        });
        this.$ajax.get('/construction/site').then((response) => { //施工工地
          if (response.status >= 200 && response.status < 300) {
            this.siteHome = response.data.data
          } else {
            console.log(response.message);
          }
        });
        // this.$ajax.get('/construction/construction/siteStageInfos' + this.$route.query.id + '?site_id=1').then((response) => { //工地详情
        //   if (response.status >= 200 && response.status < 300) {
        //     this.siteInfos = response.data.data
        //     console.log(response.data.data)
        //   } else {
        //     console.log(response.message);
        //   }
        // });
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        open() {
          this.$alert(<downloadApp></downloadApp>,{
            dangerouslyUseHTMLString: true,
              showConfirmButton:false,

        });

        }
      }
    }
</script>

<style lang="less">
  @mian-color: #c82126;
  .el-message-box { width: 600px;}

.headCon { position: relative; height: 400px; background: url("~@/assets/img/construction/banner.jpg") no-repeat;
  .dse-info { position: absolute; left: 50%; top:50px; margin-left: -325px; padding:25px; width: 600px;
    &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
    .dse-avatar { float:left; width:160px; height:160px; border-radius: 5px; border: 3px solid #fff;}
    .dse-infotext {
      .designer-info { float:left; color: #fff; text-shadow:#999 1px 1px 1px;
        &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
        h3 { margin: 0 0 20px 0;
          .designer-name { font-size: 24px; font-weight: 700;}
        }
        .designer-text {
          li { margin:3px 0; font-size:14px; line-height: 180%;
            .con-title { margin-right: 15px; opacity: 0.8;}
          }
        }
      }
    }
    .designer-price { margin:10px 0; text-align:center; font-size: 12px;
      .size24 { margin-right: 5px; font-weight:700; color:@mian-color;}
    }
  }
}
  .operating { height: 60px; line-height: 60px; background: #333; color: #fff;
    .comptel { color: @mian-color; font-weight: 700;}
  }
  .el-tabs__header { background: #fff;}
  .compCon { padding: 45px;
    dt { padding-bottom: 15px; font-size: 16px; font-weight: 700;}
    dd { padding-bottom: 30px; line-height: 1.6;}
  }
  .ConstructionSite { margin-bottom: 10px;
    h4 {}
    .stage {}
  }
</style>
