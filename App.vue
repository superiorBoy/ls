<script>
	
	var timer_id = 0;
	if (typeof window != 'undefined') {
		
	if (window.innerWidth > 750) {
	window.innerWidth = 750;
	timer_id = setInterval(function() {
		
	//适配尺寸
	var el = document.querySelector('html');
	var n = Number(el.style.fontSize.replace('px', ''));
	console.log(n)
	if (n > 30) {
	el.style.fontSize = '30px';
	}
	clearInterval(timer_id);
	}, 100);
	}
	}
	
export default {
	onLaunch: function() {
		console.log('App Launch');
		this.$http.get({
			url: '/mapi/index/geturl',
		}).then(res => {
		uni.setStorageSync("img_url",res.data.url)
		})
		// uni.hideTabBar({})

	},

	onShow: function() {

		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}

};
</script>

<style>
@import url("./common/font.css");
	
	
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
*{
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.head{
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 100%;
	padding: 26rpx 30rpx;
	background-color: #FFFFFF;
	z-index: 99;
	box-sizing: border-box;
	align-items: center;	
} 
.head_back,.head_center,.head_right{width: 33%;}
.head_center{text-align: center;}
.head_right{text-align: right;}
.head_back image{width: 22rpx;height: 41rpx;}
.zi_body{padding-top: 104rpx;position: relative;}
.tab_zi_body{padding-top: 154rpx;}
.padding_bottom{height: 100rpx;}
input{border: none !important;}
.uni-picker-container{z-index: 9;}
view{
	max-width: 750px;
}
uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:before,uni-radio .uni-radio-input.uni-radio-input-checked:before{
	content: none !important;
}

uni-checkbox:not([disabled]) .uni-checkbox-input:hover,uni-radio:not([disabled]) .uni-radio-input:hover{
	border-color: #E8E8E8 !important;
	content: none !important;
}
.uni-popup__wrapper-box{
	max-height: 100%;
	overflow: auto;
}
/* 最大宽度 */
/* #ifdef H5 */
  body,.head,.uni-transition,.uni-tabbar,.tab_top,.huifu_anxiu,.chat_bottom{max-width: 750px; margin: 0 auto;}
  .uni-tabbar{
	  right: 0;
  }

@media screen and (min-width: 500px){
	.uni-picker-container .uni-picker {
		  right: 0 !important;
		    left: 0 !important;
			width: 750px;
			margin: 0 auto;
		}
	
}

/* #endif */
.uni-popup__wrapper-box{
		margin-top: 120rpx;
	}
	
/* app沉浸式配置	 */
/* APP-PLUS */
   /* #ifdef APP-PLUS */
  .head{
  	padding-top: 70rpx !important;
  }
  .zi_body {
  	padding-top: 148rpx;
  }
  .tab_zi_body{
  	padding-top: 198rpx;
  }
  .tab_top{
  	top: 140rpx !important;
  }
  .index_top{
  	padding-top: 80rpx !important;
  }
  .my_top{
  	padding-top: 84rpx !important;
  }
  .chat_jiage{
	  top: 156rpx !important;
  }
  .index_top_dingwei{
	  padding-top: 74rpx !important;
	  
  }
  .chat_body{
	  padding-top: 40rpx !important;
  }
/*  .tab{
	  margin-top: 80rpx !important;
  } */
    /* #endif */


</style>
