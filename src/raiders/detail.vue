<template>
 <div class="bg-f7">
    <myhead></myhead>
    <div class="newList">

    <div class="breadcrumbwrap">
      <div class="wrap pos-rlt">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>查攻略</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="breadcrumbpic"></div>
      </div>
    </div>


      <div class="wrap f-content m-t-sm">
        <div class="f-article">

          <div class="f-section">

            <div class="f-page-header">
              <div class="f-title">{{raiders.bbs_title}}</div>
              <div class="f-time">{{raiders.updated_at}}</div>
            </div>

              <div class="f-body">
                <div class="f-page-content" v-html="raiders.bbs_content"></div>
              </div>
          </div>
        </div>

        <div class="f-aside">
          <div class="f-aside-title">攻略推荐</div>
          <div class="f-aside-list">
            <div class="f-aside-item f-v-center" v-for="raid of raiders">
              <div class="f-a-i-number f-both-center f-orange">1</div>
              <a href="" class="f-a-i-title">a</a>
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
          raiders:[],
          raidersList:[]
        }
      },
      components: {
        myhead,
        myfooter
      },
    mounted() {
      this.$ajax.get('bbs/guide/' + this.$route.query.id + '?no_cached=1').then((response) => { //攻略详情页
        if (response.status >= 200 && response.status < 300) {
          this.raiders = response.data.data
        } else {
          console.log(response.message);
        }
      });
      this.$ajax.get('bbs/guide/').then((response) => { //攻略列表
        if (response.status >= 200 && response.status < 300) {
          this.raidersList = response.data.data
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
      .breadcrumbpic { position:absolute; bottom: -12px; right:0; width:342px; height:68px; background: url("~@/assets/img/construction/breadcrumb.png") no-repeat;}
    }

.f-content { display: flex;justify-content: center;}
.f-article{ width: 880px;margin-right: 20px;
  .f-section{ background: white;
    .f-newsItem{ height: 226px;padding-top: 22px;margin: 0 21px;border-bottom: #f7f7f7 solid 2px;display: flex;justify-content: flex-start;
      .f-img { width: 280px;height: 184px;margin-right: 23px;img{width: 100%;height: 100%;}}
      .f-msg{width: 505px;overflow: hidden;
        .f-title{height: 26px;margin-top: 17px;margin-bottom: 18px;font-size: 20px;color: #333333;overflow: hidden;}
        .f-date{font-size: 12px;color: #999999;}
        .f-article-intro{height: 75px;padding-top: 15px;font-size: 12px;}
      .f-get-detail{height: 25px;width: 120px;background: #d04246;font-size: 12px;color: white;display: flex;justify-content: center;align-items: center;}
      }
    }
    .f-page-header{margin: 0 auto;width: 808px;padding-top: 25px;border-bottom: #eeeeee solid 1px;display: flex;flex-direction: column;align-items: center;
          .f-title{font-size: 20px;color: #333333;margin-bottom: 12px;}
          .f-time{margin-bottom: 20px;font-size: 12px;color: #999999;}
          }
  .f-body{padding: 30px 70px 55px;
      p{margin: 0 0 23px !important;
        img { max-width: 100%;}
      }
  }
}
.f-footer{margin: 61px auto 41px;height: 32px;justify-content: center;.nl-footer-item{height: 30px;padding: 0 12px;color: #666666;font-size: 12px;cursor: pointer;}
.footer-red{background-color: #dd4f50;border-radius: 4px;color: white;}} .f-page-footer{margin-top: 25px;margin-bottom: 36px;font-size: 14px;color: #666666;.f-neighbor{display: block;}}}
.f-aside{background: white;height: 300px;width: 300px;padding: 14px 18px 0;.f-aside-title{font-size: 16px;color: #333333;padding-bottom: 12px;margin-bottom: 24px;border-bottom: 1px #eeeeee solid;}
.f-aside-item{margin-bottom: 15px;.f-a-i-number{width: 18px;height: 18px;background-color: #d2d2d2;font-size: 11px;color: #ffffff;}
.f-a-i-title{font-size: 14px;color: #333333;margin-left: 7px;}
.f-orange{background-color: #ff9000;}
.f-red{background-color: #f97560;}
.f-green{background-color: #009b75;}}}
.f-both-center { display: flex; justify-content: center; align-items: center;}
.f-v-center { display: flex; align-items: center;}

</style>
