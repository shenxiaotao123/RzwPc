<template>
  <div class="myhead">
    <div class="top">
    		<div class="wrap">
    			<div class="fl">

    			</div>
    			<ul class="fr text-gray">
    				<li>
    						<a @click="$router.push({path:'/login'})" class="text-gray">登录</a>
    					</li>
    					<li>
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
        <el-menu-item index="1" @click="$router.push({path:'/'})">首页</el-menu-item>
        <el-menu-item index="2" @click="$router.push({path:'/constructionList'})">找施工</el-menu-item>
        <el-menu-item index="3" @click="$router.push({path:'/designerList'})">找设计</el-menu-item>
        <el-menu-item index="4" @click="$router.push({path:'/shop'})">买材料</el-menu-item>
        <el-menu-item index="5" @click="$router.push({path:'/renderingsList'})">效果图</el-menu-item>
        <el-menu-item index="6" @click="$router.push({path:'/raidersList'})">查攻略</el-menu-item>
        <el-menu-item index="7" @click="$router.push({path:'/qaList'})">咨询问答</el-menu-item>
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
          activeIndex2: '1'
        };
      },
      components: {
        comment,
        downloadApp
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
        }
      }
    }
</script>

<style lang="less">
   @mian-color: #c82126;
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
