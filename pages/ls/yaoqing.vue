<template >
	
		<view >
			<view class="head">  
			  <view class="head_back">

			  </view> 
			  <view class="head_center hei_38_bold">邀请好友</view> 
			  <view class="head_right"></view> 
			</view>
			<view class="zi_body">
			
			<view class="yaoqing_bg">
				<view class="txt bai_30">
					邀请好友  领取红包  
				</view>
			</view>
			<view class="yaoqing_bottom">
				
			<view class="lianjie">
				<input type="text" value="" v-model="lianjie" class="qian_26" disabled/>
				<button type="" class="fuzhi" @click="lianjiego">{{deng_txt}}</button>
			</view>
			<view class="guize bai_26">
				<view class="guize_list">
					<text></text>首次下单并成功邀请好友，即有资格领取现金红包！
				</view>
				<view class="guize_list">
					<text></text>请好友注册会员奖励10元
				</view>
				<view class="guize_list">
					<text></text>邀请好友注册律师并且完成律师认证奖励100元
				</view>
				<view class="guize_list">
					<text></text>享受直属会员消费的1%的提成！
				</view>
			</view>
			<view class="mingdan">
			
			<view class="none" v-if="list.length==0">
				<image src="../../static/lsimg/none_mingdan.png" mode=""></image>
			</view>
		   <view class="mimgdan_list bai_30" v-for="(item,index) in list"v-if="list.length>0&&index<5">
								<text class="paixu">{{index+1}}</text> <text>{{item.mobile}}</text> <text>{{item.usercount}}人</text>
			</view>
			
			</view>
			<button type="default" class="fenxiang" @click="lianjiego">立即分享给好友</button>
			</view>

			</view>
			<view class="padding_bottom" ></view>
			<tabBar :currentPage="currentPage" ref="ls_mainindex"></tabBar>
			
		</view>
	
</template>

<script>
	import tabBar from '@/components/tabbar/tabbar.vue';
	import clipboard from "@/common/copy.js"
	export default {
		components:{
			tabBar
		},
		created() {
		
		},
		onLoad(option){	
			this.is_login()
		},
		onShow() {
			
		},
		onHide() {
		// #ifdef APP-PLUS
		socket.closeSocket();
		// #endif
		},
		data() {
			return {
				currentPage:'ls/yaoqing',
				lianjie:'用户端登录后即可生成邀请好友的专属链接',
				deng_txt:'立即登录',  //复制邀请链接 --- 立即登录
				weidu:0,
				list:[]
				
			}
		},
		methods: {
		navigateBack() {
			uni.navigateBack()
		},
		is_login(){
			
			this.$http
				.post({
					url: '/index/login/islogin'
				})
				.then(res => {
					if(res.data.user==''){
						this.deng_txt=='立即登录'
					}else{
	                     this.huoqu_ls_login()
						 this.huoqu_lianjie()
						 this.huoqu_list()
						 this.$refs.ls_mainindex.huoqunum();
					}
					
				});
			},
			huoqu_list(){
						   this.$http
						   	.post({
						   		url: '/mapi/user/invitecount'
						   	})
						   	.then(res => {
						   		
								this.list=res.data.rewardlist
						   	});
			},
			huoqu_ls_login(){
				this.$http
					.post({
						url: '/lawyer/login/islogin'
					})
					.then(res => {
						if(res.data.user==''){
							
						}else{
							this.user=res.data.user
							this.huoqu_user()
							// this.$http
							// 	.post({
							// 		url: '/mlawyerapi/consult/messagecount'
							// 	})
							// 	.then(res => {
							// 		this.weidu=res.data.messagecount
									
							// 	});
							
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
			huoqu_user() {
				// 获取用户信息
				var that=this
				this.$http
					.post({
						url: '/mlawyerapi/user/getlawyer'
					})
					.then(res => {
						if(!res.data.user){
							uni.redirectTo({
								url:'shiming_renzheng'
							})
						}
						if(res.data.user.isreal==2 || res.data.user.isreal==3){
							uni.redirectTo({
								url:'shiming_renzheng'
							})
						}else if(res.data.user.iszhiye==2|| res.data.user.iszhiye==3){
							uni.redirectTo({
								url:'zhiye_renzheng'
							})
						}else{

							
						}
					});
			},
			lianjiego(){
				if(this.deng_txt=='立即登录'){
					wx.navigateTo({
						url:'../index/login?type=3'
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
					                // #ifdef APP-PLUS
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
	}
</script>

<style>
.yaoqing_bg{
	background: url(../../static/lsimg/yaoqing_bg.png) no-repeat;
	background-size: 100% 100%;
	height: 670rpx;
	padding-top: 20rpx;
}
.zi_body{
	background-color: #4c38d8;
	
}
.txt{
	width: 356rpx;
		height: 56rpx;
	box-shadow: 0rpx 5rpx 2rpx 0rpx 
			rgba(172, 48, 3, 0.44);
		border: solid 1rpx #ffffff;
		margin: 0 auto;
		text-align: center;
		line-height: 56rpx;
		border-radius: 30rpx;
}
.yaoqing_bottom{
	padding: 0 16rpx 40rpx;
	margin-top: -84rpx;
}
.lianjie{
	height: 376rpx;
		background: url(../../static/lsimg/lianjie_bg.png) no-repeat;
		background-size: 100% 100%;
		margin-bottom: 54rpx;
		padding: 108rpx 44rpx 0;
		box-sizing: border-box;
	}
	.lianjie input{
		height: 88rpx;
			background-image: linear-gradient(180deg, 
				#f5f5f5 0%, 
				#ffffff 100%);
			border-radius: 10rpx;
			border: solid 1rpx #f0f0f0;
			padding-left: 30rpx;
			box-sizing: border-box;
	}
	.fuzhi{
		height: 80rpx;
			background-color: #f3f5f9;
			border-radius: 40rpx;
			margin-top: 30rpx;
			line-height: 80rpx;
			font-size: 28rpx;
				font-weight: bold;
				color: #4300a0;
				letter-spacing: 2rpx;
	}
	.guize{
		height: 376rpx;
		background: url(../../static/lsimg/guize_bg.png) no-repeat;
		background-size: 100% auto;
		padding: 110rpx   20rpx  0 62rpx;
		box-sizing: border-box;
		margin: 45rpx 0;
	}
	.guize_list{
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
	}
	.guize_list text{
		display: inline-block;
		margin-right: 12rpx;
		width: 6rpx;
	    height: 25rpx;
	    background-color: #ffdb00;
	}
	.mingdan{
		height: 673rpx;
		background: url(../../static/lsimg/mingdan_bg.png) no-repeat;
		background-size: 100% auto;
		padding: 85rpx 85rpx 0 70rpx;
		box-sizing: border-box;
	}
	.fenxiang{
			height: 114rpx;
				box-shadow: 0rpx 8rpx 8rpx 0rpx 
					#ff3200;
					border-radius:70rpx;
					line-height: 114rpx;
					margin: 40rpx 0 0;
					font-size: 50rpx;
					color: #FFFFFF;
					background: url(../../static/lsimg/btn_bg.png) no-repeat;
					background-size: 100% 100%;
	}
	.none{
		text-align: center;
		margin-top: 60rpx;
	}
	.none image{
			width: 422rpx;
			height: 372rpx;
	}
	.mimgdan_list{
		height: 84rpx;
			background-color: #7c6aff;
			border-radius: 40rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 27rpx 0 76rpx;
			margin-bottom: 25rpx;
	}
	.paixu{
		font-size: 44rpx;
			font-style: italic;
			color: #ffdb00;
	}
</style>
