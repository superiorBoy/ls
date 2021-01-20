<template>
	<view class="">
		<!-- <view class="head">  
			  <view class=""></view> 
			  <view class="head_center hei_38_bold">接单</view> 
			  <view class=""></view> 
			</view> -->
		<view class="my_top">
			<view class="my_top_left">
				<image :src=img_url+user.photourl mode="" class="ls_tx"></image>
				<view class="my_top_left_r" v-if="is_login">
					<view class="my_name hei_30_bold">{{user.nickname}}</view>
					<view class="renzheng bai_20">普通用户</view>
				</view>
				<view class="my_top_weoienglu hei_26" v-if="!is_login">
					<navigator url="login" class="go_denglu">登录</navigator>
					<navigator url="zhuce" class="go_denglu">注册</navigator>
				</view>
			</view>
			<view class="my_top_right hei_30_bold" @click="qiehuan">切换到律师中心</view>
		</view>

		<view class="my_ziliao">
			<navigator url="guanzhu" class="my_ziliao_item">
				<view class="my_ziliao_item_top hei_28">{{geshu.guanzhu}}</view>
				<view class="my_ziliao_item_bottom hei_22">关注</view>
			</navigator>
			<navigator url="shoucang" class="my_ziliao_item">
				<view class="my_ziliao_item_top hei_28">{{geshu.shoucang}}</view>
				<view class="my_ziliao_item_bottom hei_22">收藏</view>
			</navigator>
			<navigator url="tuandui" class="my_ziliao_item">
				<view class="my_ziliao_item_top hei_28">{{geshu.tuandui}}</view>
				<view class="my_ziliao_item_bottom hei_22">团队</view>
			</navigator>
			<navigator url="chongzhi" class="my_ziliao_item">
				<view class="my_ziliao_item_top hei_28">{{user.rmb}}</view>
				<view class="my_ziliao_item_bottom hei_22">余额</view>
			</navigator>
		
		
		</view>

		<view class="my_bottom">
			<navigator url="zhineng_pay" class="xianshi">
					<image src="@/static/img/hy_guanggao.png" mode=""></image>
					<view class="jiage hei_20_bold">限时29元/小时</view>
			</navigator>

			<view class="my_guanli zixun_guanli">
				<view class="my_title hei_30_bold">咨询管理</view>
				<view class="my_list">
					<navigator url="tiwen" class="ls_item">
							<image src="@/static/img/hy_tiwen_icon.png" mode="" style="width: 37rpx;height: 40rpx;"></image>
							<view class="hui_24 ">我要提问</view>
					</navigator>
					<navigator url="tiwen_list" class="ls_item">
						<image src="@/static/img/hy_tiwen_jilu_icon.png" mode="" style="width: 34rpx;height: 40rpx;"></image>
						<view class="hui_24 ">提问记录</view>
					</navigator>
				
					<navigator url="zixun_jilu" class="ls_item">
						<image src="@/static/img/hy_zixun_jilu.png" mode="" style="width: 36rpx;height: 40rpx;"></image>
						<view class="hui_24 ">咨询记录</view>
					</navigator>
					<navigator url="dianhua_jilu" class="ls_item">
						<image src="@/static/img/hy_dianhua.png" mode="" style="width: 40rpx;height: 40rpx;"></image>
						<view class="hui_24 ">电话咨询</view>
					</navigator>
					<navigator url="zaixian_list" class="ls_item">
						<image src="@/static/img/hy_other.png" mode="" style="width: 40rpx;height: 41rpx;"></image>
						<view class="hui_24 ">其他服务</view>
					</navigator>
					<navigator url="weituo_list" class="ls_item">
						<image src="@/static/img/hy_weituo.png" mode="" style="width: 36rpx;height: 40rpx;"></image>
						<view class="hui_24 ">委托记录</view>
					</navigator>
				</view>
			</view>

			<view class="my_guanli tuiguang_guanli">
				<view class="my_title hei_30_bold">推广中心</view>
				<view class="my_list">
					<navigator url="tuanzhang" class="jiedan_item">
						<image src="@/static/img/hy_tuiguang1.png" mode=""></image>
						<view class="hui_24 ">升级团长</view>
					</navigator>
					<navigator url="jiangli" class="jiedan_item">
						<image src="@/static/img/hy_tuiguang2.png" mode=""></image>
						<view class="hui_24 ">我的奖励</view>
					</navigator>
					<navigator url="tuandui" class="jiedan_item">
						<image src="@/static/img/hy_tuiguang3.png" mode=""></image>
						<view class="hui_24 ">我的团队</view>
					</navigator>
					
					<navigator url="sucai?state=1" class="jiedan_item">
						<image src="@/static/img/hy_tuiguang4.png" mode=""></image>
						<view class="hui_24 ">营销素材</view>
					</navigator>
					<navigator url="app_down" class="jiedan_item">
						<image src="@/static/img/hy_tuiguang5.png" mode=""></image>
						<view class="hui_24 ">APP下载</view>
					</navigator>
				</view>
			</view>

			<view class="my_guanli zhanghao_guanli">
				<view class="my_title hei_30_bold">账户管理</view>
				<view class="my_list">
					<navigator url="geren_xinxi" class="zhanghao_item">
						<image src="@/static/img/hy_xinxi.png" mode="" style="width: 50rpx;height: 46rpx;"></image>
						<view class="hui_24 ">个人信息</view>
					</navigator>
					<navigator url="ls_tixian" class="zhanghao_item">
						<image src="@/static/img/hy_tixian.png" mode="" style="width: 45rpx;height: 52rpx;"></image>
						<view class="hui_24 ">账号提现</view>
					</navigator>
					<navigator url="chongzhi" class="zhanghao_item">
						<image src="@/static/img/hy_chongzhi.png" mode="" style="width: 56rpx;height: 49rpx;"></image>
						<view class="hui_24 ">我要充值</view>
					</navigator>
					<navigator url="ls_liushui" class="zhanghao_item">
						<image src="@/static/img/hy_liushui.png" mode="" style="width: 50rpx;height: 56rpx;"></image>
						<view class="hui_24 ">流水明细</view>
					</navigator>
					<navigator url="help" class="zhanghao_item">
						<image src="@/static/img/hy_help.png" mode="" style="width: 47rpx;height: 54rpx;"></image>
						<view class="hui_24 ">帮助中心</view>
					</navigator>
					<navigator url="gonggao" class="zhanghao_item">
						<image src="@/static/img/hy_gonggao.png" mode="" style="width: 50rpx;height: 50rpx;"></image>
						<view class="hui_24 ">网站公告</view>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	created() {},
	onShow() {
		this.huiqu_login()
	},
	data() {
		return {
			user:'',
			img_url: uni.getStorageSync('img_url'),
			is_login:false,
			geshu:''
			
		};
	},
	methods: {
		qiehuan() {
			uni.reLaunch({
				url: '../ls/my'
			});
		},
		huoqu_user(){
			// 获取用户信息
			this.$http
				.post({
					url: '/mapi/user/user'
				})
				.then(res => {
					this.user = res.data.user;
					
				});
		},
		huiqu_login(){
			this.$http
				.post({
					url: '/index/login/islogin'
				})
				.then(res => {
					if(res.data.user!=''){
						this.is_login=true
						this.huoqu_user()
						this.huoqu_geshu()
						
						this.$http
							.post({
								url: '/mapi/consult/messagelist'
							})
							.then(res => {
								var num=0
								for (var i in res.data.messagelist){
								num+=res.data.messagelist[i].messagecount
								}
								if(num>0){
									uni.setTabBarBadge({
									  index: 3,
									  text: ''+num
									})
								}else{
									 uni.removeTabBarBadge({
											 index:3
									})
								}
							});
						
						
					}else{
						this.is_login=false
					}
				});
		},
		huoqu_geshu(){
			this.$http
				.post({
					url: '/mapi/index/usercount'
				})
				.then(res => {
					
					this.geshu=res.data.count
				});
		}
	},
	
};
</script>

<style>
page {
	background-color: #f7f7f7;
}

.ls_tx {
	width: 110rpx;
	height: 110rpx;
	border: 10rpx solid #d7e7e1;
	border-radius: 100%;
	margin-right: 32rpx;
}

.my_top_left {
	display: flex;
}

.my_top {
	display: flex;
	justify-content: space-between;
	padding: 30rpx;
	background-color: #ffffff;
}

.renzheng {
	width: 120rpx;
	text-align: center;
	line-height: 30rpx;
	height: 30rpx;
	background-color: #ffad2b;
	border-radius: 15rpx;
	margin-top: 20rpx;
}

.my_top_left_r {
	padding-top: 20rpx;
}

.my_name {
	display: flex;
}

.my_top_right {
	margin-top: 5rpx;
}

.my_ziliao_item {
	text-align: center;
	width: 25%;
}

.my_ziliao {
	display: flex;
	justify-content: space-between;
	background-color: #ffffff;
	padding-bottom: 30rpx;
}

.my_title {
	height: 100rpx;
	line-height: 100rpx;
	border-bottom: solid 2rpx #e2e2e2;
	margin-bottom: 34rpx;
}

.my_guanli {
	background-color: #ffffff;
	margin-top: 20rpx;
	padding: 0 27rpx 38rpx;
}

.jiedan_item {
	text-align: center;
	width: 20%;
}

.jiedan_item image {
	width: 78rpx;
	height: 79rpx;
	margin-bottom: 20rpx;
}

.my_list {
	display: flex;
	/* justify-content: space-between; */
	flex-wrap: wrap;
}
.my_bottom {
	padding: 0 30rpx;
}
.ls_item {
	text-align: center;
	width: 33.33%;
	margin-bottom: 60rpx;
}

.ls_item image {
	margin-bottom: 16rpx;
}

.zixun_guanli {
	padding-bottom: 0rpx;
}

.zhanghao_guanli {
	margin-bottom: 30rpx;
	padding-bottom: 0;
}

.zhanghao_item {
	width: 33.33%;
	text-align: center;
	margin-bottom: 60rpx;
}

.zhanghao_guanli .zhanghao_item {
	margin-bottom: 37rpx;
}
.zhanghao_item image {
	margin-bottom: 16rpx;
}
.zhanghao_guanli .zhanghao_item image {
	margin-bottom: 8rpx;
}
.xianshi {
	height: 82rpx;
	position: relative;
	display: flex;
}
.jiage {
	position: absolute;
	right: 24rpx;
	top: 50%;
	text-align: center;
	line-height: 48rpx;
	transform: translate(-0%, -50%);
	width: 180rpx;
	height: 48rpx;
	background-color: #ffad2b;
	border-radius: 24rpx;
}
.xianshi image {
	width: 100%;
	height: 100%;
}
.zhanghao_guanli .my_title {
	margin-bottom: 50rpx;
}
.tuiguang_guanli {
	padding-bottom: 30rpx;
}
.my_top_weoienglu{
	display: flex;
	align-items: center;
	}

	.go_denglu{
		margin-right: 20rpx;
		border: 2rpx solid #EEEEEE;
		border-radius: 6rpx;
		width: 120rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
	}
	.go_zhuce{
		border-radius: 6rpx;
		width: 120rpx;
		height: 50rpx;
		line-height: 50rpx;
		border: 2rpx solid #EEEEEE;
		text-align: center;
	}
</style>
