<template>
  <div>
    <myhead></myhead>
    <!--轮播图-->
    <div class="carousel pos-rlt">
      <template>
        <el-carousel :interval="5000" arrow="always" height="700px">
          <el-carousel-item v-for="tt of titleHome">
            <h3 <el-image :src="tt.pic_url" @click="$router.push({path:tt.url})"></el-image></h3>
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
        <el-button type="danger" class="bg-miam br-mian" round>立即获取装修报价</el-button>
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
            <el-carousel-item v-for="desh of designerHome.slice(0,6)"> <!--循环6条数据-->

                <div class="homeDesigner">
                  <el-image :src="desh.img" :fit="cover"></el-image>
                  <div class="designerInfo">
                    <span class="name size16 text-darkgray">{{ desh.designer_name }}</span>
                    <span class="goodAt size12 text-lightgray">{{ desh.title }}</span>
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
                <el-col :span="8" v-for="co of companyHome.slice(0,3)" >
                  <div class="builder">
                    <el-avatar icon="el-icon-user-solid" class="fl" :size="50" :src="co.avatar"></el-avatar>
                    <div class="fl text-l m-l-md">
                      <div class="size18 text-darkgray builderText">{{ co.name }}</div>
                      <div class="size12 text-lightgray m-t-xs builderText">{{ co.brief }}</div>
                    </div>
                  </div>
                </el-col>
              </el-row>

              <div class="case m-t-xxl ">
                <el-col :span="4" v-for="site of siteHome.slice(0,6)">
                  <div class="homeCase site">
                    <el-image :src="site.thumb_img" :fit="cover"></el-image>
                    <div class="caseInfo">
                      <div class="name size16 text-darkgray">{{ site.quarter_name }}|{{ site.shape_name }}</div>
                    </div>
                  </div>
                </el-col>
              </div>

            </el-tab-pane>
            <el-tab-pane label="建材商城" name="second">
              <p class="vice text-lightgray m-t-lg text-c">用过硬的质量和服务为您搭建您的家</p>
              <el-row>
                <el-col :span="8" v-for="so of storeHome.slice(0,3)" >
                  <div class="builder">
                    <el-avatar icon="el-icon-user-solid" class="fl" :size="50" :src="so.logo_image"></el-avatar>
                    <div class="fl text-l m-l-md">
                      <div class="size18 text-darkgray builderText">{{ so.shop_name }}</div>
                      <div class="size12 text-lightgray m-t-xs builderText">{{ so.shop_category }}</div>
                    </div>

                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </template>
      </div>
    </div>
    <!--装饰案例
    <div class="bg-f7 case homeBox" style="padding-top: 40px;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ">
      <div class="wrap">
        <h2 class="text-darkgray text-c">装饰案例</h2>
        <p class="vice text-lightgray text-c">用过来人的经验和各路达人的支招为您的家保驾护航</p>
        <el-row>
          <el-col :span="6" v-for="ca of designerHome.slice(0,4)">
            <div class="homeCase" @click="$router.push({path:'/worksShow',query:{workid:ca.id,designerid:ca.designer_id}})">
              <el-image :src="ca.img" :fit="cover"></el-image>
              <div class="caseInfo">
                <div class="name size16 text-darkgray">{{ ca.title }}</div>
                <div class="case-style">
                  <span class="fl size12 text-lightgray">{{ ca.style.name }}</span>
                  <span class="fr size12 text-lightgray"><i class="el-icon-view m-r-xs"></i>{{ ca.hits }}</span>
                </div>

              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>-->
    <div class="image__lazy">
      <el-image :src="StaticImgUrl03"></el-image>
    </div>
    <!--热门攻略-->
    <div class="bg-f7 raiders homeBox">
      <div class="wrap">
        <h2 class="text-darkgray text-c">热门攻略</h2>
        <el-row class="m-t-xxl">
          <el-col :span="6" v-for="gu of guideHome.slice(0,4)">
            <div class="homeRaiders" @click="$router.push({path:'/glDetail',query:{id:gu.id}})">
              <div class="homeRaidersText">{{ gu.bbs_title }}</div>
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
          <a href="" v-for="dy of designerstyleHome.slice(0,8)">{{ dy.name }} /</a>
          <a href="">更多</a>
        </p>
        <div class="shopConBox m-t-lg">
          <a href="#" target="_blank" class="shopConImg" :class="renderingsClassName(index)" v-for="ca of designerHome.slice(0,5)">
            <el-image :src="ca.img"></el-image>
            <div class="shopConText">
              <span>{{ ca.title }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!--家装热点-->
    <div class="bg-f7 news homeBox">
      <div class="wrap">
        <h2 class="text-darkgray text-c">家装热点</h2>
        <p class="vice text-lightgray text-c">新闻资讯,一手掌握</p>
        <el-row>
          <el-col :span="12" v-for="news of guideHome.slice(0,4)">
            <div class="newsBox">
              <el-image :src="news.bbs_pic" class="newsImg"></el-image>
              <div class="newsCon">
                <h5>{{news.bbs_title}}</h5>
                <div class="newsConText">
                  在中国文化风靡全球的现今时代，中式元素与
                  现代材质的巧妙兼柔，唐宋家具、明清窗棂、
                  布艺床品相互辉映，再现了移步......
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--抢领定制设计名额-->
    <div class="booking">
      <div class="content">
        <h4>抢领定制设计名额</h4>
        <form class="banner-form">
          <input name="name" type="text" placeholder="您的姓名" style="width: 200px;">
          <input name="tel" type="tel" placeholder="您的手机号码" maxlength="11" style="width: 200px;">
          <button type="button" class="bg-miam br-mian">获取新家效果图</button>
        </form>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import myhead from '@/components/myhead'
  import myfooter from '@/components/myfooter'
  import img01 from '@/assets/img/home/img_01.jpg'
  import img02 from '@/assets/img/home/img_02.jpg'
  import img03 from '@/assets/img/home/img_03.jpg'
export default {
  name: 'home',
  data () {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      StaticImgUrl01: img01,
      StaticImgUrl02: img02,
      StaticImgUrl03: img03,
      caseImg: 'http://oss.rongzw.com/202001021533592bd022743.jpg',
      activeName: 'first',
      titleHome: [],
      designerHome: [],
      designerstyleHome: [],
      companyHome: [],
      siteHome: [],
      storeHome: [],
      guideHome: []
    }
  },
  components: {
    myhead,
    myfooter
  },
  mounted() {
    this.$ajax.get('/index/ads').then((response) => { //首页轮播图接口
      if (response.status >= 200 && response.status < 300) {
        this.titleHome = response.data.data['app_navi']
      } else {
        console.log(response.message);
      }
    });
    this.$ajax.get('designer/works').then((response) => { //首页设计师
      if (response.status >= 200 && response.status < 300) {
        this.designerHome = response.data.data
      } else {
        console.log(response.message);
      }
    });
    this.$ajax.get('designer/style').then((response) => { //设计风格列表
      if (response.status >= 200 && response.status < 300) {
        this.designerstyleHome = response.data.data
      } else {
        console.log(response.message);
      }
    });
    this.$ajax.get('construction/company').then((response) => { //首页施工公司
      if (response.status >= 200 && response.status < 300) {
        this.companyHome = response.data.data
      } else {
        console.log(response.message);
      }
    });
    this.$ajax.get('/construction/site').then((response) => { //首页在施工地
      if (response.status >= 200 && response.status < 300) {
        this.siteHome = response.data.data
      } else {
        console.log(response.message);
      }
    });
    this.$ajax.get('/shop/store').then((response) => { //首页建材商城
      if (response.status >= 200 && response.status < 300) {
        this.storeHome = response.data.data
      } else {
        console.log(response.message);
      }
    });
    this.$ajax.get('/bbs/guide').then((response) => { //首页热门攻略
      if (response.status >= 200 && response.status < 300) {
        this.guideHome = response.data.data
        console.log(response.data);
      } else {
        console.log(response.message);
      }
    });


  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
  @border-radius-5: 5px;
  @bg-color: #bd2032;

  .bg-miam { background: @bg-color;}
  .br-mian { border-color: @bg-color;}
  //轮播图
  .carousel { height: 700px;
    .el-image {
      img { cursor: pointer;}
    }
  }
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
        .sloganIcon { margin: 0 auto; display: block; width: 57px; height: 47px; background: url("~@/assets/img/home/sloganIcon.png") no-repeat;}
        .icon-02 { background-position: -57px 0;}
        .icon-03 { background-position: -114px 0;}
        .icon-04 { background-position: -171px 0;}
        .sloganText { font-size: 12px;}
      }
    }
  }
  .image__lazy {}
  //装修设计师
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
  //施工公司 建材商城
  .construction {
    .el-col-8:nth-child(1) {
      .builder { margin-left: 0;}
    }
    .el-col-8:nth-child(3) {
      .builder { margin-right: 0;}
    }
    .el-tabs__nav-wrap::after { background: none;}
    .el-tabs__item { padding: 0 40px; font-size: 36px;}
    .el-tabs__nav-scroll { height: 60px;}
    .el-tabs__active-bar { bottom: -15px; height: 4px;}
    .el-tabs__nav { float: none; display: inline-block;}
    .builder { margin: 0 10px; padding: 30px; background: #fff; border-radius: 5px; cursor: pointer;
      &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
      .builderText { width: 220px; overflow: hidden; text-overflow:ellipsis; white-space: nowrap;}
    }
  }
  //案例
  .case {
    .el-col-6:nth-child(1) {
      .homeCase { margin-left: 0;}
    }
    .el-col-6:nth-child(4){
      .homeCase { margin-right: 0;}
    }
    .homeCase { margin: 0 15px; background: #fff; border-radius: 5px; cursor: pointer;
      img { height: 220px;}
      .el-image__inner { border-radius: 5px 5px 0 0;}
      .caseInfo { padding: 10px 15px;
        &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
        .case-style { margin-top: 10px;
          &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
        }
        .name { width:100%; overflow: hidden; text-overflow:ellipsis;white-space: nowrap;}
      }
    }
  }
  //在施工地
  .site {
    img { height: 180px!important;}
  }
  //攻略
  .raiders {
    .homeRaiders { margin: 0 20px; padding: 30px 30px 20px 30px; width: 210px; height: 70px; background: url("~@/assets/img/home/raiders.jpg") no-repeat; font-size: 18px; font-weight: 600; line-height: 1.8; color: #fff; cursor: pointer;
      .homeRaidersText { width: 210px; height: 70px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;}
    }
    .el-col-6:nth-child(2) {
      .homeRaiders { background-position: -270px 0;}
    }
    .el-col-6:nth-child(3) {
      .homeRaiders { background-position: -540px 0;}
    }
    .el-col-6:nth-child(4) {
      .homeRaiders { background-position: -810px 0;}
    }
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
        .shopConImg:nth-child(1)  { width: 400px; height:430px; margin-right:10px;
          img { height:430px;}
        }
        .shopConImg:nth-child(2) { width: 510px; height: 210px; margin:0 10px 10px 0;
          img { height: 210px;}
        }
        .shopConImg:nth-child(3) { float: none; position: absolute; left: 410px; top: 220px; width: 250px; height: 210px;
          img { height: 210px;}
        }
        .shopConImg:nth-child(4) { float: none; position: absolute; left: 670px; top: 220px; width: 250px; height: 210px;
          img { height: 210px;}
        }
        .shopConImg:nth-child(5) { width: 270px; height:430px;
          img { height:430px;}
        }
    }
  }
  //家装热点
  .news {
    .newsBox { margin:0 30px 50px 0; background: #fff; border-radius: 5px; overflow: hidden;
      &:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
      .newsImg { float: left; width: 270px; height: 200px;}
      .newsCon { float: left; padding: 25px; width: 250px;
        h5 { margin-bottom: 30px; color: #333; font-size: 16px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;}
        .newsConText { color: #666; font-size: 12px; line-height: 1.8; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;}
      }
    }
    .el-col-12:nth-child(2) {
      .newsBox { margin-right: 0; margin-left: 30px;}
    }
    .el-col-12:nth-child(4) {
      .newsBox { margin-right: 0; margin-left: 30px;}
    }
  }
  //抢领定制设计名额
  .booking { padding:55px 0; text-align:center; color:#fff; background-color:#f14853;
    h4 { margin-bottom:35px; font-size:30px;}
    .banner-form {
      input[type=text],input[type=tel] { margin-right:10px; padding:12px 15px; font-size:14px; background:#fff; color:#333; border: 0; border-radius: @border-radius-5; vertical-align:top; font-weight:300;}
      button[type=button] { padding:11px 50px; font-size:14px; color: #fff; border:0; border-radius: @border-radius-5; vertical-align:top;}
    }
  }
</style>
