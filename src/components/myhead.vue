<template>
  <div class="myhead">
    <div class="top">
    		<div class="wrap">
    			<div class="fl">

    			</div>
    			<ul class="fr text-gray">
              <li class="text-mainColor pointer" id="loginIfon">{{realnameData}} <span class="m-l-sm text-gray" @click="$router.push({path:'/userIndex'})">用户中心</span></li>
    				  <li class="text-gray pointer" id="notlogin">
    						<a @click="$router.push({path:'/login'})">登录</a>
    					</li>
    					<li id="notlogin2 pointer">
    						<a href="/Home/Index/reg" class="text-gray">注册</a>
    					</li>
    									<li class="spacer"></li>
    				<li><a href="http://www.ehonge.com/" target="_blank" class="text-gray">易空间</a></li>
    				<li class="spacer"></li>
    				<li class="tel"><i class="el-icon-phone m-r-xs"></i>400-622-1988</li>
            <li class="spacer"></li>
            <li class="tel" @click="open">下载APP</li>
    			</ul>
    		</div>
    	</div>
    <div class="wrap">
      <a href="/" class="logo"></a>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item :class="{active:shows==1}" index="1" @click="$router.push({path:'/'}),getItme1()">首页</el-menu-item>
        <el-menu-item :class="{active:shows==2}" index="2" @click="$router.push({path:'/constructionList'}),getItme2()">找施工</el-menu-item>
        <el-menu-item :class="{active:shows==3}" index="3" @click="$router.push({path:'/designerList'}),getItme3()">找设计</el-menu-item>
        <el-menu-item :class="{active:shows==4}" index="4" @click="$router.push({path:'/shop'}),getItme4()">买材料</el-menu-item>
        <el-menu-item :class="{active:shows==5}" index="5" @click="$router.push({path:'/renderingsList'}),getItme5()">效果图</el-menu-item>
        <el-menu-item :class="{active:shows==6}" index="6" @click="$router.push({path:'/raidersList'}),getItme6()">查攻略</el-menu-item>
        <el-menu-item :class="{active:shows==7}" index="7" @click="$router.push({path:'/qaList'}),getItme7()">咨询问答</el-menu-item>
        <el-submenu index="8">
          <template slot="title">更多</template>
          <el-menu-item index="8-1">创客空间</el-menu-item>
          <el-menu-item index="8-2">城市合作</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
  import comment from '@/public/Comment'
  import downloadApp from '@/public/downloadApp' //弹出框APP引导

    export default {
        name: "myhead",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          shows:1
        };
      },
      components: {
        comment,
        downloadApp
      },
      created (){
        document.cookie
        var realname = this.$cookies.get("real_name")
        this.realnameData = realname
      },
      mounted() {
         document.cookie
         var realname = this.$cookies.get("real_name")
         var idObject = document.getElementById('notlogin');
         var idObject2 = document.getElementById('notlogin2');
         var loginIfon = document.getElementById('loginIfon');
         if(realname != null){
           idObject.parentNode.removeChild(idObject);
         }
         if(realname != null){
           idObject2.parentNode.removeChild(idObject2);
         }
         else {
           loginIfon.parentNode.removeChild(loginIfon);
         }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        open() {
          this.$alert(<downloadApp/>,{
            dangerouslyUseHTMLString: true,
              showConfirmButton:false,
          });
        },
        getItme1:function() {
          this.shows = 1;  // 把当前点击元素的index，赋值给activeClass
        },
         getItme2:function() {
           this.shows = 2;  // 把当前点击元素的index，赋值给activeClass
         },
        getItme3:function() {
          this.shows = 3;  // 把当前点击元素的index，赋值给activeClass
        },
        getItme4:function() {
          this.shows = 4;  // 把当前点击元素的index，赋值给activeClass
        },
        getItme5:function() {
          this.shows = 5;  // 把当前点击元素的index，赋值给activeClass
        },
        getItme6:function() {
          this.shows = 6;  // 把当前点击元素的index，赋值给activeClass
        },
        getItme7:function() {
          this.shows = 7;  // 把当前点击元素的index，赋值给activeClass
        }
      }
    }
</script>

<style lang="less">
   @mian-color: #c82126;

   .active { color:@mian-color !important; font-weight: 700;}
.myhead { height: 116px; background: #fff;
  .logo { margin-top: 30px; float: left; display: block; width: 177px; height: 23px; background: url("~@/assets/img/components/logo.png") no-repeat;}
  .el-menu.el-menu--horizontal { margin-top: 11px; float: right; border: 0;}
}
.top { height:34px; line-height:34px; background:#f6f6f6; font-size:12px;
	.fl {
		.citytext { float: left; color: @mian-color; font-weight: 700;}
	}
	.fr {
		li { margin-left:15px; float:left;}
		li.spacer { overflow: hidden; margin: 12px 0 0 15px; width: 1px; height: 10px; background-color: #ccc;}
		li.tel { color: @mian-color; font-weight:700;}

	}
}
</style>
