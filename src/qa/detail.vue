<template>
 <div class="bg-f7">
    <myhead></myhead>
    <div class="newList">

    <div class="breadcrumbwrap">
      <div class="wrap pos-rlt">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>咨询问答</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="breadcrumbpic"></div>
      </div>
    </div>

    <div class="wrap f-content m-t-sm">
        <div class="f-article">
          <div class="advisoryBox">
            <div class="advisoryAsk">
              <i class="advicon askIcon"></i>{{ qa.bbs_title }}<el-tag type="danger" class="size12 m-l-sm">#{{ qa.class.name }}#</el-tag>
            </div>
            <p class="text-darkgray l-h-1-6x">{{qa.bbs_content}}</p>
            <div class="advisoryAll text-gray size12">
              <span class="m-r-xs">{{qa.bbs_user_name}}</span>提问于<span class="m-l-xs">{{qa.updated_at}}</span>

              </div>
          </div>
          <div class="answerList">
            <h6> 全部 <span class="text-mainColor">{{qa.bbs_com_num}}</span> 个回答</h6>
            <QaComment></QaComment>
            <div class="m-t-sm m-b-lg text-c"><el-button type="danger" @click="open">我要回答</el-button></div>
          </div>
        </div>

        <div class="f-aside">
          <div class="wrapper-sm">
           <el-button type="danger" plain class="fr" @click="open">关注</el-button>
           <el-avatar :size="50" :src="qa.bbs_user_image" class="v-middle fl m-r-sm"></el-avatar>
           <p class="size18 l-h-1-6x bbs_user_name">{{qa.bbs_user_name}}</p>
           <p class="size12 text-gray">粉丝{{qa.follow_num}}人</p>
          </div>
          <div class="guess">
            <h6>你可能感兴趣</h6>
             <ul class="guessUl" >
               <li v-for="dadv of advisory.slice(0,6)">
                 <a @click="$router.push({path:'/qa',query:{id:dadv.id}})"><i class="advicon askIcon"></i>{{ dadv.bbs_title }}</a>
               </li>
             </ul>
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
  import QaComment from '@/public/QaComment' //问答评论 - 组件
  import downloadApp from '@/public/downloadApp' //弹出框APP引导
  export default {
      name: "list",
      data() {
        return {
          qa:[],
          advisory:[]
        }
      },
      components: {
        myhead,
        myfooter,
        QaComment,
        downloadApp
      },
    mounted() {
      this.$ajax.get('bbs/guide/' + this.$route.query.id + '?no_cached=1').then((response) => { //攻略详情页
        if (response.status >= 200 && response.status < 300) {
          this.qa = response.data.data
          this.$nextTick(() => {
            var com_num =  response.data.data.bbs_com_num
            if(com_num == 0){
              var child = document.getElementById("noComment");
              child.style.display = 'block';
            }
          })
        } else {
          console.log(response.message);
        }
      });
      this.$ajax.get('bbs/advisory?no_cached=1').then((response) => { //咨询列表
        if (response.status >= 200 && response.status < 300) {
          this.advisory = response.data.data
          var class_id = this.$route.query.class_id
        } else {
          console.log(response.message);
        }
      });
     // advisory:function(advisory){
     //                     return advisory.filter(function(item){
     //                        return item.id==6
     //                    })
     //                };
    },
    methods: {
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
  .breadcrumbwrap { padding: 10px 0; line-height:24px; background:#333;
      .el-breadcrumb__item {
        span { color:#fff; font-size: 12px;}
        .el-breadcrumb__inner { color: #eee;}
      }
      .breadcrumbpic { position:absolute; bottom: -12px; right:0; width:342px; height:68px; background: url("~@/assets/img/construction/breadcrumb.png") no-repeat;}
    }

.f-content { display: flex;justify-content: center;}
.f-article{ width: 880px;margin-right: 20px; background-color: #fff;
  .advisoryBox { padding: 25px 40px; border-bottom: 1px solid #eee; font-size: 14px;
    .advisoryAsk { padding:0 0 15px 0; font-weight: 700; font-size: 16px;
       .askIcon { background: url("~@/assets/img/qa/ask.jpg") no-repeat center top;}
    }
    .advisoryAnswer {
      .answerIcon { background: url("~@/assets/img/qa/answer.jpg") no-repeat center top;}
    }
    .advicon { margin-right: 10px;; display: inline-block; width: 18px; height: 19px; vertical-align: middle;}
    .advisoryAll { padding: 10px 0 0 0; }
  }
  .answerList { padding: 20px 40px;;
    h6 { font-size: 14px;}
  }
}
.f-aside{background: white;width: 300px;padding: 14px 18px 0;}
.bbs_user_name { width: 125px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap}
.guess { margin-top: 15px; padding: 15px 0 35px; border-top: 1px solid #eee;
  h6 { font-size: 14px; margin-bottom: 10px;}
  .guessUl {
    li { padding: 8px 0; font-size: 12px;
     .askIcon { background: url("~@/assets/img/qa/ask.jpg") no-repeat center top;}
     .advicon { margin-right: 10px;; display: inline-block; width: 18px; height: 19px; vertical-align: middle;}
      a { color:#666; cursor: pointer;}
    }
  }
}
</style>
