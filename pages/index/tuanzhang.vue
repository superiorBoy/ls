<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">升级团长</view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
			<image src="@/static/img/shengji_top.png" mode="" class="shengji_top_img"></image>
			<view class="tuanzhang_bottom">
				
			
			<view class="yaoqing bg_xian">
				<view class="tuanzhang_title bai_26_bold">
					专属链接
				</view>
				<view class="lianjie ">
				<input type="text" value="" class="hei_26" v-model="lianjie" placeholder="登录后即可生成邀请好友的专属链接" disabled="true"/>	
				</view>
				<button type="" class="bai_28" @click="lianjiego">{{deng_txt}}</button>
			</view>
			
			<view class="bg_xian quanyi">
				<view class="tuanzhang_title bai_26_bold">
					核心权益
				</view>
			<view class="qianyi_list">
				<view class="qianyi_item">
					<image src="@/static/img/quanyi1.png" mode=""></image>
					<view class="lv_26_bold">
						好物分享
					</view>
				</view>
				<view class="qianyi_item">
					<image src="@/static/img/quanyi2.png" mode=""></image>
					<view class="lv_26_bold">
						分享赚钱
					</view>
				</view>
				<view class="qianyi_item">
					<image src="@/static/img/quanyi3.png" mode=""></image>
					<view class="lv_26_bold">
						邀请有奖
					</view>
				</view>
				<view class="qianyi_item">
					<image src="@/static/img/quanyi4.png" mode=""></image>
					<view class="lv_26_bold">
						专属客服
					</view>
				</view>
			</view>
				
			</view>
			
			<view class="tiaojian">
				<view class="tiaojian_title bai_26_bold">
				<text></text>	升级条件<text></text>
				</view>
				<view class="tiaojian_list">
					<image src="../../static/img/tiaojian1.png" mode=""></image>
				</view>
				<view class="tiaojian_list">
					<image src="../../static/img/tiaojian1.png" mode=""></image>
				</view>
			</view>
			<view class="liucheng bg_xian">
				<view class="tuanzhang_title bai_26_bold liucheng_title">
					一秒看懂流程
				</view>
				<view class="liucheng_img">
					<image src="@/static/img/liucheng_img.png" mode=""></image>
				</view>
			   <view class="liucheng_list ">
			   	<view class="liucheng_item">
			   		<view class="">分享</view>
					<view class="">邀请好友</view>
			   	</view>
				<view class="liucheng_item">
					<view class="">新人注册</view>
					<view class="">你获得奖励</view>
				</view>
				<view class="liucheng_item">
					<view class="">永久获得</view>
					<view class="">下线提成</view>
				</view>
			   </view>
				
			</view>
			
			<view class="guize bg_xian">
				<view class="tuanzhang_title bai_26_bold ">
					活动规则
				</view>
				<view class="guize_list">
				<view class="guize_list_title hei_30_bold">
					<image src="@/static/img/guize_huiyuan.png"style="width:30rpx ;" mode="widthFix"></image>会员邀请奖励
				</view>	
				<view class="guize_list_body hei_22">
					<view class="guize_item">
						<text class="bai_20">1</text>邀请新用户首次消费奖励2元！
					</view>
					<view class="guize_item">
						<text class="bai_20">2</text>享受直属会员消费的10%提成！
					</view>
				</view>
				</view>
			   <view class="guize_list">
			   <view class="guize_list_title hei_30_bold">
			   	<image src="@/static/img/guize_tuanzhang.png"style="width:27rpx ;" mode="widthFix"></image>会员邀请奖励
			   </view>	
			   <view class="guize_list_body hei_22">
			   	<view class="guize_item">
			   		<text class="bai_20">1</text>请新用户首次消费奖励2元！ 
			   	</view>
			   	<view class="guize_item">
			   		<text class="bai_20">2</text>享受直属会员消费的10%提成！
			   	</view>
				<view class="guize_item">
					<text class="bai_20">3</text>享受非直属会员消费的10%作为提成！
				</view>
				<view class="guize_item">
					<text class="bai_20">4</text>非只属奖励给上线最近的团长！
				</view>
			   </view>
			   </view>
				
			</view>
			<view class="paihang bai_xian">
				<view class="tuanzhang_title bai_26_bold ">
					排行榜
				</view>
				<view class="zanwu" v-if="login=='2'">
					<image src="@/static/img/tuzhang_zanwu.png" mode=""></image>
					<view class="chakan qian_26" >
						登录后即可查看
					</view>
				</view>
				<view class="paihang_list" v-if="login=='1'">
				<view class="paihang_item">
					<view class="paihang_item_left hei_28">
					<view class="paihang_item_left_paiming">
						1
					</view>	
					150*******54
					</view>	
					<view class="paihang_item_right hong_20">
						￥<text class="hong_30_bold">1290.41</text>
					</view>	
				</view>	
				<view class="paihang_item">
					<view class="paihang_item_left hei_28">
					<view class="paihang_item_left_paiming">
						2
					</view>	
					150*******54
					</view>	
					<view class="paihang_item_right hong_20">
						￥<text class="hong_30_bold">1290.41</text>
					</view>	
				</view>
				<view class="paihang_item">
					<view class="paihang_item_left hei_28">
					<view class="paihang_item_left_paiming">
						3
					</view>	
					150*******54
					</view>	
					<view class="paihang_item_right hong_20">
						￥<text class="hong_30_bold">1290.41</text>
					</view>	
				</view>
				<view class="paihang_item">
					<view class="paihang_item_left hei_28">
					<view class="paihang_item_left_paiming">
						4
					</view>	
					150*******54
					</view>	
					<view class="paihang_item_right hong_20">
						￥<text class="hong_30_bold">1290.41</text>
					</view>	
				</view>
				<view class="paihang_item">
					<view class="paihang_item_left hei_28">
					<view class="paihang_item_left_paiming">
						5
					</view>	
					150*******54
					</view>	
					<view class="paihang_item_right hong_20">
						￥<text class="hong_30_bold">1290.41</text>
					</view>	
				</view>
				</view>
			
			</view>
				<button type="" class="shenqing">立即申请团长</button>
			</view>
		</view>

		
	</view>
</template>

<script>
import clipboard from "@/common/copy.js"


export default {
	data() {
		return {
		lianjie:'',
		deng_txt:'立即登录',  //复制邀请链接 --- 立即登录
		user:'',
		login:'2'
		};
	},
	created() {
		
	},

	components: {
		
	},
	onLoad() {
		this.is_login()
	},
	onShow() {
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
	      is_login(){
	      	
	      	this.$http
	      		.post({
	      			url: '/index/login/islogin'
	      		})
	      		.then(res => {
	      			if(res.data.user==''){
	      				this.deng_txt=='立即登录'
						this.login='2'
	      			}else{
	      				this.login='1'
	      				this.huoqu_lianjie()
	      				
	      				
	      			}
	      			
	      		});
	      	},
	         huoqu_lianjie(){
	      	   this.$http
	      	   	.post({
	      	   		url: '/mapi/user/yaoqing'
	      	   	})
	      	   	.then(res => {
	      	   		this.deng_txt='复制邀请链接'
	      			this.lianjie=res.data.inviteurl
	      	   	});
	         },
			 lianjiego(){
			 	if(this.deng_txt=='立即登录'){
			 		wx.navigateTo({
			 			url:'/pages/index/login'
			 		})
			 	}else{
			 		  // #ifdef H5
			 		                this.$copyText(this.lianjie).then(
			 		                    res => {
			 		                        uni.showToast({
			 		                            title: '复制成功'
			 		                        })
			 		                    }
			 		                )
			 		                // #endif
			 		                // #ifndef H5
			 		                uni.setClipboardData({
			 		                    data: this.lianjie,
			 		                    success: () => {
			 		                        uni.showToast({
			 		                            title: '复制成功'
			 		                        })
			 		                    }
			 		                })
			 		                // #endif
			 	}
			 	
			 }
		
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}
.shengji_top_img{
	width: 100%;
	height: 579rpx;
	vertical-align: bottom;
}
.tuanzhang_title{
	background: url(../../static/img/tuanzhang_title.png) no-repeat;
	background-size: 100% 100%;
	width: 213rpx;
	height: 66rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	position: relative;
	top: -34rpx;
	
}
.yaoqing{
	text-align: center;

	height: 260rpx;
	margin-bottom: 86rpx;
}
	
.bg_xian{
	background: url(../../static/img/tuanzhang_xian_bg.png) no-repeat;
	background-size: 100% 100%;
}
.bai_xian{
	background: url(../../static/img/bai_xian.png) no-repeat;
	background-size: 100% 100%;	
}
.tuanzhang_bottom{
	padding: 0 20rpx;
	background: url(../../static/img/tuanzhang_bg.png) no-repeat;
	
	padding-bottom: 70rpx;
}
.lianjie{
	width: 628rpx;
	border: solid 1rpx #b5b5b5;
	margin: 8rpx auto 25rpx;
	
}
.lianjie input{
	height: 60rpx;
		background-image: linear-gradient(180deg, 
			#f5f5f5 0%, 
			#ffffff 100%);
		border-radius: 3rpx;
		padding: 0 13rpx;
		line-height: 60rpx;
		text-align: left;
}
.yaoqing button{
	width: 250rpx;
		height: 60rpx;
		background-color: #0eb77e;
		border-radius: 30rpx;
		line-height: 60rpx;
}
.qianyi_item{
	width: 25%;
	text-align: center;
}
.qianyi_item image{
		width: 111rpx;
		height: 111rpx;
		margin: 10rpx 0 6rpx;
}
.qianyi_list{
	display: flex;
	align-items: center;
	
}
.quanyi{
	height: 270rpx;
	margin-bottom: 50rpx;
}
.tiaojian_title{
	width: 228rpx;
		height: 66rpx;
		background-color: #0eb77e;
		border-radius: 8rpx;
		line-height: 66rpx;
		margin: 0 auto;
}
.tiaojian_title text{
	width: 13rpx;
	height: 13rpx;
	display: inline-block;
	background-color: #FFFFFF;
	border-radius: 100%;
}
.tiaojian_title text:first-child{
	margin-right: 10rpx;
}
.tiaojian_title text:last-child{
	margin-left: 10rpx;
}
.tiaojian{
	text-align: center;
}
.tiaojian_list{
	margin-top: 30rpx ;
}
.tiaojian_list image{
	height: 132rpx;
	width: 100%;
	vertical-align: bottom;
}
.liucheng{
	margin: 90rpx 0 99rpx;
	padding: 0 67rpx;
	height: 300rpx;
}
.liucheng_title{
	width: 297rpx;
}
.liucheng_img{
	margin: 10rpx 0 6 rpx;
}
.liucheng_img image{
	width: 100%;
		height: 96rpx;
}
.liucheng_list{
	display: flex;
	justify-content: space-between;
	color: #006543;
	font-size: 24rpx;
	
}
.liucheng_item{
	text-align: center;
	line-height: 32 rpx;
}
.guize{
	height: 510rpx ;
	}
	.guize .tuanzhang_title {
		margin-bottom: 10rpx;
	}
	.guize_list_title{
		margin-bottom: 15rpx;
	}
	.guize_list_title image{
		margin-right: 16rpx;
	}
	.guize_list{
		padding: 0 10rpx 0 60rpx;
		margin-bottom: 30rpx;
	}
	.guize_list_body{
		padding-left: 50rpx;
		
	}
	.guize_item{
		margin-bottom: 12rpx;
		display: flex;
		align-items: center;
	}
	.guize_item text{
		display: inline-block;
			width: 24rpx;
			height: 24rpx;
			background-image: linear-gradient(0deg, 
				#0eb77e 0%, 
				#2fc19c 100%), 
			linear-gradient(
				#ffff00, 
				#ffff00);
			background-blend-mode: normal, 
				normal;
			box-shadow: inset -0.1rpx 7rpx 10rpx 0rpx 
				rgba(200, 244, 233, 0.59);
			border-radius: 12rpx;
			margin-right: 9rpx;
			vertical-align: middle;
			line-height: 24rpx;
			text-align: center;
	}
	.paihang{
		height: 424rpx;
		margin: 89rpx 0 84rpx;
	}
	.paihang_item{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 46rpx 0 50rpx;
		line-height: 48rpx;
		margin-bottom: 14rpx;
		
	}
	.paihang_item_left{
		display: flex;
		align-items: center;
	}
	.paihang_item_left_paiming{
			width: 48rpx;
			height: 48rpx;
			margin-right: 20rpx;
			text-align: center;
			
	}
	.paihang_item:nth-child(1) 
	.paihang_item_left_paiming{
		color: #FFFFFF;
		background: url(../../static/img/paiming1.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
		top: -8rpx;
		line-height: 58rpx;
		
	}
	.paihang_item:nth-child(2)
	.paihang_item_left_paiming{
		color: #FFFFFF;
		background: url(../../static/img/paiming2.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
		top: -8rpx;
		line-height: 58rpx;
		
	}
	.paihang_item:nth-child(3)
	.paihang_item_left_paiming{
		color: #FFFFFF;
		background: url(../../static/img/paiming3.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
		top: -8rpx;
		line-height: 58rpx;
		
	}
	.shenqing{
			height: 100rpx;
			background-color: #0eb77e;
			border-radius: 50rpx;
			box-shadow: 0 4rpx 4rpx 0 #006543;
			color: #FFFFFF;
			font-size: 46rpx;
			line-height: 100rpx;
			
	}
	.zanwu{
		text-align: center;
	}
	.zanwu image{
		width: 424rpx;
		height: 230rpx;
		margin-bottom: 20rpx;
	}
</style>
