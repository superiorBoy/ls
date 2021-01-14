<template>
	<view class="" >
		<!-- <view class="head">  
			  <view class=""></view> 
			  <view class="head_center hei_38_bold">接单</view> 
			  <view class=""></view> 
			</view> -->
		<view class="my_top">
			<view class="my_top_left">
				<image :src="img_url + user.photourl" mode="" class="ls_tx" v-if="user"></image>
				<image src="@/static/lsimg/moren_tx.png" mode="" class="ls_tx" v-if="!user"></image>
				<view class="my_top_left_r" v-if="is_login">
					<view class="my_name hei_30_bold">
						{{ user?user.nickname:'' }}律师
						<view class="renzheng_xinxi" v-if="user">
							<image src="../../static/lsimg/yi_renzheng1.png" mode="" class="renzheng1" v-if="user.isreal == 1"></image>
							<image src="../../static/lsimg/yi_renzheng2.png" mode="" class="renzheng2" v-if="user.iszhiye == 1"></image>
							<image src="../../static/lsimg/yi_renzheng3.png" mode="" class="renzheng3" v-if="user.iszhiye == 1"></image>
						</view>
					</view>
					<view class="renzheng bai_20" v-if="user&&user.isreal == 1">认证律师</view>
				</view>
				<view class="my_top_weoienglu hei_26" v-if="!is_login">
					<navigator url="login" class="go_denglu">登录</navigator>
					<navigator url="../index/zhuce?state=2" class="go_denglu">注册</navigator>
				</view>
			</view>
			<view class="my_top_right hei_30_bold" @click="qiehuan">切换到用户中心</view>
		</view>

		<view class="my_ziliao">
			<view  class="my_ziliao_item" @click="tiaozhuan('../index/guanzhu')">
				<view class="my_ziliao_item_top hei_28">0</view>
				<view class="my_ziliao_item_bottom hei_22">关注</view>
			</view>
			<view  class="my_ziliao_item" @click="tiaozhuan('fensi')">
				<view class="my_ziliao_item_top hei_28">0</view>
				<view class="my_ziliao_item_bottom hei_22">粉丝</view>
			</view>
			<view  class="my_ziliao_item" @click="tiaozhuan('../index/shoucang')">
				<view class="my_ziliao_item_top hei_28">0</view>
				<view class="my_ziliao_item_bottom hei_22">收藏</view>
			</view>
			<view  class="my_ziliao_item" @click="tiaozhuan('../index/tuandui')">
				<view class="my_ziliao_item_top hei_28_b">0</view>
				<view class="my_ziliao_item_bottom hei_22">团队</view>
			</view>
		</view>

		<view class="my_bottom">
			<view class="my_guanli">
				<view class="my_title hei_30_bold">接单管理</view>

				<view class="my_list">
					<view  class="jiedan_item" @click="tiaozhuan('tiwen_guanli')">
						<image src="../../static/lsimg/my_jiedan1.png" mode=""></image>
						<view class="hui_24 ">提问管理</view>
					</view>
					<view  class="jiedan_item" @click="tiaozhuan('tiwen_jilu')">
						<image src="../../static/lsimg/my_jiedan2.png" mode=""></image>
						<view class="hui_24 ">提问记录</view>
					</view>
					<view  class="jiedan_item" @click="tiaozhuan('zaixian_list')">
						<image src="../../static/lsimg/my_jiedan3.png" mode=""></image>
						<view class="hui_24 ">在线咨询</view>
					</view>
					<view  class="jiedan_item" @click="tiaozhuan('zixun_jilu')">
						<image src="../../static/lsimg/my_jiedan4.png" mode=""></image>
						<view class="hui_24 ">咨询记录</view>
					</view>
					<view  class="jiedan_item" @click="tiaozhuan('dianhua_zixun')">
						<image src="../../static/lsimg/my_jiedan5.png" mode=""></image>
						<view class="hui_24 ">电话咨询</view>
					</view>
				</view>
			</view>

			<view class="my_guanli ls_guanli">
				<view class="my_title hei_30_bold">律师管理</view>
				<view class="my_list">
					<navigator url="shiming_renzheng" class="ls_item" >
						<image src="../../static/lsimg/my_ls1.png" mode=""></image>
						<view class="hui_24 ">实名认证</view>
					</navigator>
					<view  class="ls_item" @click="tiaozhuan('zhiye_renzheng')">
						<image src="../../static/lsimg/my_ls2.png" mode=""></image>
						<view class="hui_24 ">执业认证</view>
					</view>
					<view  class="ls_item" @click="tiaozhuan('ls_renzheng')">
						<image src="../../static/lsimg/my_ls3.png" mode="" style="width: 50rpx;height: 50rpx;"></image>
						<view class="hui_24 ">律师认证</view>
					</view>
					<view  class="ls_item" @click="tiaozhuan('anli')">
						<image src="../../static/lsimg/my_ls4.png" mode="" style="width: 48rpx;height: 50rpx;"></image>
						<view class="hui_24">成功案例</view>
					</view>
					<view  class="ls_item" @click="tiaozhuan('zixun_baojia')">
						<image src="../../static/lsimg/my_ls5.png" mode=""></image>
						<view class="hui_24 ">咨询报价</view>
					</view>
					<view  class="ls_item" @click="tiaozhuan('fuwu_baojia')">
						<image src="../../static/lsimg/my_ls6.png" mode=""></image>
						<view class="hui_24 ">服务报价</view>
					</view>
				</view>
			</view>

			<view class="my_guanli">
				<view class="my_title hei_30_bold">网站管理</view>
				<view class="my_list">
					<view  class="wangzhan_item" @click="tiaozhuan('kaitong')">
						<image src="../../static/lsimg/my_wangzhan1.png" mode=""></image>
						<view class="hui_24 ">开通站点</view>
					</view>
					<view  class="wangzhan_item" @click="tiaozhuan('peizhi')">
						<image src="../../static/lsimg/my_wangzhan2.png" mode=""></image>
						<view class="hui_24 ">网站配置</view>
					</view>
					<view  class="wangzhan_item" @click="tiaozhuan('shezhi')">
						<image src="../../static/lsimg/my_wangzhan3.png" mode=""></image>
						<view class="hui_24 ">信息设置</view>
					</view>
					<view class="wangzhan_item">
						<image src="../../static/lsimg/my_wangzhan4.png" mode=""></image>
						<view class="hui_24 ">选择设置</view>
					</view>
				</view>
			</view>
			<view class="my_guanli zhanghao_guanli">
				<view class="my_title hei_30_bold">账号管理</view>
				<view class="my_list">
					<navigator url="geren_xinxi" class="zhanghao_item">
						<image src="../../static/lsimg/my_zhanghao1.png" mode="" style="width: 40rpx;height: 32rpx;margin-bottom: 32rpx;"></image>
						<view class="hui_24 ">个人信息</view>
					</navigator>
					<view  class="zhanghao_item" @click="tiaozhuan('liushui?state=2')">
						<image src="../../static/lsimg/my_zhanghao2.png" mode="" style="width: 39rpx;height: 40rpx;"></image>
						<view class="hui_24 ">流水明细</view>
					</view>
					<view  class="zhanghao_item" @click="tiaozhuan('tixian')">
						<image src="../../static/lsimg/my_zhanghao3.png" mode="" style="width: 40rpx;height: 39rpx;"></image>
						<view class="hui_24 ">账号提现</view>
					</view>
					<view  class="zhanghao_item" @click="tiaozhuan('gaimima')">
						<image src="../../static/lsimg/my_zhanghao4.png" mode="" style="width: 40rpx;height:40rpx;"></image>
						<view class="hui_24 ">修改密码</view>
					</view>
				</view>
			</view>
		</view>

		<view class="padding_bottom"></view>
		<tabBar :currentPage="currentPage"></tabBar>
	</view>
</template>

<script>
import tabBar from '@/components/tabbar/tabbar.vue';

export default {
	components: {
		tabBar
	},
	created() {},
	onShow() {
		this.huiqu_login();
	},
	onHide() {
		// if(this.user){
			
		// 	 if(this.user.iszhiye==2){
		// 		uni.navigateTo({
		// 			url:'zhiye_renzheng'
		// 		})
		// 	}
			
		// }else{
		// 	uni.navigateTo({
		// 		url:'shiming_renzheng'
		// 	})
		// }
	
		
		
	},
	data() {
		return {
			currentPage: 'ls/my',
			user: '',
			img_url: uni.getStorageSync('img_url'),
			is_login: false
		};
	},
	methods: {
		qiehuan() {
			uni.switchTab({
				url: '/pages/index/my'
			});
		},
		huoqu_user() {
			// 获取用户信息
			this.$http
				.post({
					url: '/mlawyerapi/user/getlawyer'
				})
				.then(res => {
					this.user = res.data.user;
				});
		},
		huiqu_login() {
			this.$http
				.post({
					url: '/lawyer/login/islogin'
				})
				.then(res => {
					if (res.data.user != '') {
						this.is_login = true;
						this.huoqu_user();
					} else {
						this.is_login = false;
					}
				});
		},
       tiaozhuan(url){
		   
		   if(this.user!=null){
			   
			   if(this.user.isreal==2){
				   uni.navigateTo({
				   	url:'shiming_renzheng'
				   })
				   
			   }else if(this.user.iszhiye==2){
				   uni.navigateTo({
				   	url:'zhiye_renzheng'
				   })
			   }else{
				   uni.navigateTo({
				   	url:url
				   })
			   }

		   }else{
			   uni.navigateTo({
			   	url:'shiming_renzheng'
			   })
			   
		   }
		 
	   }
	}
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
	background-color: #f43a51;
	border-radius: 15rpx;
	margin-top: 20rpx;
}

.my_top_left_r {
	padding-top: 20rpx;
}

.my_name {
	display: flex;
}

.renzheng1 {
	margin-left: 10rpx;
}

.renzheng1,
.renzheng2 {
	width: 17rpx;
	height: 17rpx;
	margin-right: 10rpx;
}

.renzheng3 {
	width: 18rpx;
	height: 14rpx;
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
	margin-bottom: 30rpx;
}

.my_guanli {
	background-color: #ffffff;
	margin-top: 20rpx;
	padding: 0 18rpx 40rpx;
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
	width: 51rpx;
	height: 51rpx;
	margin-bottom: 30rpx;
}

.ls_guanli {
	padding-bottom: 0rpx;
}

.wangzhan_item {
	width: 25%;
	text-align: center;
}

.wangzhan_item image {
	width: 74rpx;
	height: 74rpx;
	margin-bottom: 10rpx;
}

.zhanghao_guanli {
	margin-bottom: 30rpx;
}

.zhanghao_item {
	width: 25%;
	text-align: center;
}

.zhanghao_item image {
	width: 40rpx;
	height: 39rpx;
	margin-bottom: 25rpx;
}
.my_top_weoienglu {
	display: flex;
	align-items: center;
}

.go_denglu {
	margin-right: 20rpx;
	border: 2rpx solid #eeeeee;
	border-radius: 6rpx;
	width: 120rpx;
	height: 50rpx;
	line-height: 50rpx;
	text-align: center;
}
.go_zhuce {
	border-radius: 6rpx;
	width: 120rpx;
	height: 50rpx;
	line-height: 50rpx;
	border: 2rpx solid #eeeeee;
	text-align: center;
}
</style>
