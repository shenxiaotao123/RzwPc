<template>
  <div>
    <myhead></myhead>
    <!--轮播图-->
    <div class="carousel pos-rlt">
      <template>
        <el-carousel :interval="5000" arrow="always" height="700px">
          <el-carousel-item v-for="item in 3" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </template>
      <div class="search">
        <el-input placeholder="找设计、找施工、买建材、看案例、搜攻略" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <!--互联网高品质家装平台-->
    <div class="bg-f7 slogan homeBox text-c">
      <div class="wrap">
        <h2 class="text-darkgray">互联网高品质家装平台</h2>
        <p class="vice text-lightgray">大数据洞察需求，创新你的生活方式</p>
        <div class="sloganCon">
          <el-row>
            <el-col :span="6">
              <div class="slogan-content">
                <i class="sloganIcon icon-01"></i>
                <h6>革新工艺</h6>
                <p class="sloganText">全系列的水性环保家装材料</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="slogan-content">
                <i class="sloganIcon icon-02"></i>
                <h6>贴心服务</h6>
                <p class="sloganText">客服在线咨询，在线监工</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="slogan-content">
                <i class="sloganIcon icon-03"></i>
                <h6>品质保障</h6>
                <p class="sloganText">项目总监品质监控品质制度</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="slogan-content">
                <i class="sloganIcon icon-04"></i>
                <h6>专业顾问 </h6>
                <p class="sloganText">专业的装饰装修顾问和助理</p>
              </div>
            </el-col>
          </el-row>
        </div>
        <el-button type="danger" round>立即获取装修报价</el-button>
      </div>
    </div>
    <div class="image__lazy">
      <el-image :src="StaticImgUrl01"></el-image>
    </div>
    <!--装修设计师-->
    <div class="bg-f7 designer homeBox">
      <div class="wrap">
        <h2 class="text-darkgray text-c">装修设计师</h2>
        <p class="vice text-lightgray text-c">用专业的态度为您设计您想要的家</p>

        <template>
          <el-carousel :interval="4000" type="card" height="555px">
            <el-carousel-item v-for="item in 6" :key="item">

                <div class="homeDesigner">
                  <el-image :src="caseImg" :fit="cover"></el-image>
                  <div class="designerInfo">
                    <span class="name size16 text-darkgray">胡定国</span>
                    <span class="goodAt size12 text-lightgray">擅长空间：住宅空间,餐饮空间,办公空间,酒店空间......</span>
                  </div>
                </div>

            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
    </div>
    <div class="image__lazy">
      <el-image :src="StaticImgUrl02"></el-image>
    </div>
    <!--施工公司、建材商城-->
    <div class="bg-f7 construction homeBox">
      <div class="wrap">
        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick" class="text-c">
            <el-tab-pane label="施工公司" name="first">
              <p class="vice text-lightgray m-t-lg text-c">用专业的态度为您打造您的家</p>
              <el-row>
                <el-col :span="8" v-for="builder in 3" >
                  <div class="builder">
                    <el-avatar icon="el-icon-user-solid" class="fl" :size="50"></el-avatar>
                    <div class="fl text-l m-l-md">
                      <div class="size18 text-darkgray builderText">荣装网自营店</div>
                      <div class="size12 text-lightgray m-t-xs builderText">擅长风格  北欧,中式,现代简约,地中海</div>
                    </div>

                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="建材商城" name="second">
              <p class="vice text-lightgray m-t-lg text-c">用过硬的质量和服务为您搭建您的家</p>
              <el-row>
                <el-col :span="8" v-for="shop in 3" >
                  <div class="builder">
                    <el-avatar icon="el-icon-user-solid" class="fl" :size="50"></el-avatar>
                    <div class="fl text-l m-l-md">
                      <div class="size18 text-darkgray builderText">欧普照明专卖店</div>
                      <div class="size12 text-lightgray m-t-xs builderText">灯具照明</div>
                    </div>

                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </template>



      </div>
    </div>
    <!--装饰案例-->
    <div class="bg-f7 case homeBox">
      <div class="wrap">
        <h2 class="text-darkgray text-c">装饰案例</h2>
        <p class="vice text-lightgray text-c">用过来人的经验和各路达人的支招为您的家保驾护航</p>
        <el-row>
          <el-col :span="6" v-for="homeCase in 4">
            <div class="homeCase">
              <el-image :src="caseImg" :fit="cover"></el-image>
              <div class="caseInfo">
                <div class="name size16 text-darkgray">专属中国人的生活格调的盛世嫡妃电饭锅</div>
                <div class="case-style">
                  <span class="fl size12 text-lightgray">北欧</span>
                  <span class="fr size12 text-lightgray"><i class="el-icon-view m-r-xs"></i>3121</span>
                </div>

              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="image__lazy">
      <el-image :src="StaticImgUrl03"></el-image>
    </div>
    <!--热门攻略-->
    <div class="bg-f7 raiders homeBox">
      <div class="wrap">
        <h2 class="text-darkgray text-c">热门攻略</h2>
        <el-row class="m-t-xxl">
          <el-col :span="6" v-for="(homeRaiders,index) in 4">
            <div class="homeRaiders" :class="generateClassName(index)">
              <div class="homeRaidersText">小户型新房入住买家具5个技巧,后悔买早了!电饭锅梵蒂冈等多个风格电饭锅地方</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--效果图-->
    <div class="bg-f7 renderings homeBox">
      <div class="wrap">
        <h2 class="text-darkgray text-c">效果图</h2>
        <p class="vice text-lightgray text-c">网罗各路装修美图,找到装修新灵感</p>
        <p class="vice text-lightgray text-c renderingsTabs">
          <a href="">现代简约</a>
          /
          <a href="">欧式风格</a>
          /
          <a href="">新中式</a>
          /
          <a href="">美式乡村</a>
          /
          <a href="">地中海式</a>
          /
          <a href="">北欧风格</a>
          /
          <a href="">更多</a>
        </p>
        <div class="shopConBox m-t-lg">
          <a href="#" target="_blank" class="shopConImg" :class="renderingsClassName(index)" v-for="(renderingsList,index) in 5">
            <el-image :src="renderings02"></el-image>
            <div class="shopConText">
              <span>暖色调的家~  简简单单的装修，但在装饰物上下足了功夫，每个小细节都让这个家更加温暖暖色调的家~</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import myhead from '@/components/myhead'
  import img01 from '@/assets/img/home/img_01.jpg'
  import img02 from '@/assets/img/home/img_02.jpg'
  import img03 from '@/assets/img/home/img_03.jpg'
export default {
  name: 'home',
  data () {
    return {
      StaticImgUrl01: img01,
      StaticImgUrl02: img02,
      StaticImgUrl03: img03,
      caseImg: 'http://oss.rongzw.com/202001021533592bd022743.jpg',
      activeName: 'first'
    }
  },
  components: {
    myhead
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    generateClassName (index) {
      // 调用方法，动态生成index
      return `img_item-${index}`
    },
    renderingsClassName (index) {
      // 调用方法，动态生成index
      return `shopConImg-${index}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @miam-color: #c82126;

  .carousel { height: 700px;}
  .el-carousel__item h3 {color: #475669;font-size: 18px;opacity: 0.75;line-height: 700px;margin: 0;}
  .el-carousel__item:nth-child(2n) {background-color: #99a9bf;}
  .el-carousel__item:nth-child(2n+1) {background-color: #d3dce6;}
  .search { position: absolute; left: 50%; top: 400px; margin-left: -400px; width: 800px; height: 60px; z-index: 10; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    input { height: 60px; font-size: 18px;}
    .el-icon-search { font-size: 24px;}
  }
  .homeBox { padding: 90px 0;
    h2 { margin-bottom: 20px; font-size: 36px; font-weight: 300;}
    .vice { margin-bottom: 55px; font-size: 16px;}
  }
  .slogan {
    .sloganCon { margin: 0 100px 50px 100px;
      .slogan-content {  margin-top: 50px; color: #878c9a;
        h6 { margin: 10px 0; font-size: 18px;}
        .sloganIcon { margin: 0 auto; display: block; width: 57px; height: 47px; background:  url("~@/assets/img/home/sloganIcon.png") no-repeat;}
        .icon-02 { background-position: -57px 0;}
        .icon-03 { background-position: -114px 0;}
        .icon-04 { background-position: -171px 0;}
        .sloganText { font-size: 12px;}
      }
    }
  }
  .image__lazy {}
  .designer {
    .el-carousel__item { background: none;}
    .el-image img { height: 450px; border-radius: 10px}
    .el-carousel__button { background-color: @miam-color;}
    .homeDesigner { margin: 0 auto; width: 360px;
      .designerInfo { margin-top: 20px;
        &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
        .name { display: inline-block; width: 75px; vertical-align: middle;}
        .goodAt { display: inline-block; width: 280px; vertical-align: middle; overflow: hidden; text-overflow:ellipsis;white-space: nowrap;}
      }
    }
  }
  .construction {
    .el-tabs__nav-wrap::after { background: none;}
    .el-tabs__item { padding: 0 40px; font-size: 36px;}
    .el-tabs__nav-scroll { height: 60px;}
    .el-tabs__active-bar { bottom: -15px; height: 4px;}
    .el-tabs__nav { float: none; display: inline-block;}
    .builder { margin: 0 10px; padding: 30px; background: #fff; border-radius: 5px;
      &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
      .builderText { width: 220px; overflow: hidden; text-overflow:ellipsis; white-space: nowrap;}
    }
  }
  .homeCase { margin: 0 10px; background: #fff; border-radius: 5px;
    .el-image__inner { border-radius: 5px 5px 0 0;}
    .caseInfo { padding: 10px 15px;
      &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
      .case-style { margin-top: 10px;
        &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
      }
      .name { width:100%; overflow: hidden; text-overflow:ellipsis;white-space: nowrap;}
    }
  }
  .raiders {
    .homeRaiders { margin: 0 20px; padding: 30px 30px 20px 30px; width: 210px; height: 70px; background: url("~@/assets/img/home/raiders.jpg") no-repeat; font-size: 18px; font-weight: 600; line-height: 1.8; color: #fff;
      .homeRaidersText { width: 210px; height: 70px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;}
    }
    .img_item-1 { background-position: -270px 0;}
    .img_item-2 { background-position: -540px 0;}
    .img_item-3 { background-position: -810px 0;}
  }
  //效果图
  .renderings {
    .renderingsTabs {
      a { margin: 0 10px; color: #666; text-decoration: none;}
    }
    .shopConBox { position: relative;
        &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
        .shopConImg { position:relative; float:left; background: #ddd;
          img { width:100%; height:210px;
            &:hover { opacity:1;}
          }
          .shopConText { position:absolute; bottom:0; left:0; width:100%; text-align:left; background: linear-gradient(transparent,grey);
            span { display: block; padding: 10px 15px; font-size: 14px; color: #fff; overflow: hidden; text-overflow:ellipsis; white-space: nowrap;}
          }
        }
        .shopConImg-0 { width: 400px; height:430px; margin-right:10px;
          img { height:430px;}
        }
        .shopConImg-1 { width: 510px; height: 210px; margin:0 10px 10px 0;
          img { height: 210px;}
        }
        .shopConImg-2 { float: none; position: absolute; left: 410px; top: 220px; width: 250px; height: 210px;
          img { height: 210px;}
        }
        .shopConImg-3 { float: none; position: absolute; left: 670px; top: 220px; width: 250px; height: 210px;
          img { height: 210px;}
        }
        .shopConImg-4 { width: 270px; height:430px;
          img { height:430px;}
        }
    }
  }
</style>
