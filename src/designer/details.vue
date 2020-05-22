<template>
  <div class="bg-f7">
    <myhead></myhead>
    <div class="headCon">
      <div class="dse-info">
        <div class="fl dse-infotext">
          <a target="_blank">
            <el-image shape="square" :src="designer.avatar" class="dse-avatar m-r-md"></el-image>
          </a>
          <div class="designer-info">
            <h3>
              <a target="_blank">
                <span class="designer-name">{{designer.name}}</span>
              </a>
            </h3>
            <ul class="designer-text">
              <li>
                <span class="con-title">所在城市</span>{{designer.address}}
                <span class="con-title m-l-xxl">作品数量</span>{{designer.works_num}}
                <span class="con-title m-l-xxl">工作年限</span>{{designer.years}}年
              </li>
              <li>
                <span class="con-title">擅长风格</span>{{designer.styles_text}}
              </li>
              <li>
                <span class="con-title">预约数</span>{{designer.appointment_num}}人
                <span class="con-title m-l-xxl">点评数</span>{{designer.comment_num}}
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
          <el-button icon="el-icon-phone" class="comptel"></el-button>
        </el-row>
         <div class="fl m-l-xxl size14">
           <i class="el-icon-circle-check m-l-lg m-r-xs"></i>原创作品
           <i class="el-icon-circle-check m-l-lg m-r-xs"></i>真实评价
           <i class="el-icon-circle-check m-l-lg m-r-xs"></i>担保交易
         </div>
         <div class="fr">
           <div class="designer-price text-mainColor">
              <span class="size18">{{designer.min_money}}-{{designer.max_money}}</span>元/㎡
           </div>
         </div>
      </div>
    </div>
    <div class="wrap">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="作品(20)" name="first">
            <div class="compCon ConstructionSite bg-ff">
              <h4></h4>
              <p class="stage"></p>
              <el-row>
                <el-col :span="8" >


                </el-col>
              </el-row>

            </div>
          </el-tab-pane>
          <el-tab-pane label="公司信息" name="second">
            <div class="compCon bg-ff">
              <dl>
                <dt>公司简介</dt>
                <dd>
                  <div v-html="designer.content.content"></div>
                  <div>
                    {{designerWorks.title}}
                  </div>
                </dd>

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
          designer:[],
          designerWorks:[],
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
        this.$ajax.get('designer/designer/'+ this.$route.query.id + '?no_cached=1').then((response) => { //设计师详情
          if (response.status >= 200 && response.status < 300) {
            this.designer = response.data.data
          } else {
            console.log(response.message);
          }
        });
        this.$ajax.get('/designer/works/' + this.$route.query.id	 + '?no_cached=1').then((response) => { //设计师作品
          if (response.status >= 200 && response.status < 300) {
            this.designerWorks = response.data.data
             console.log(response.data.data.title);
          } else {
            console.log(response.message);
          }
        });
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        open() {
          this.$alert(<downloadApp/>,{
            dangerouslyUseHTMLString: true,
              showConfirmButton:false,
          });
        }
        
      }
    }
</script>

<style lang="less">
  @mian-color: #c82126;


.headCon { position: relative; height: 400px; background: url("~@/assets/img/construction/banner.jpg") no-repeat;
  .dse-info { position: absolute; left: 50%; top:50px; margin-left: -375px; padding:25px; width: 700px;
    &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
    .dse-avatar { float:left; width:160px; height:160px; border-radius: 5px; border: 3px solid #fff;}
    .dse-infotext {
      .designer-info { float:left; width: 514px;; color: #fff; text-shadow:#999 1px 1px 1px;
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
