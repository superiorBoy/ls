<template>
	<view>
		<view class="head">
			<view class="head_back"></view>
			<view class="head_center hei_38_bold">接单管理</view>
			<view class="head_right"></view>
		</view>
		<view class="zi_body">
			<view class="jiedan_list">
				<navigator url="tiwen_guanli?state=1" class="jiedan_item">
					<view class="jiedan_item_l">
					<view class="jiedan_item_left">
						<image src="@/static/lsimg/jiedan_bendi.png" mode="" class="jiedan_img" style="width: 60rpx;height: 60rpx;"></image>
						<image src="@/static/lsimg/new.png" mode="" class="new" v-if="geshu.bendicount>0"></image>
					</view>
					<view class="jiedan_item_right">
						<view class="hei_28 jiedan_item_title">本地咨询</view>
						<view class="qian_24">提交咨询问题，匹配专业律师，解答完成获得悬赏！</view>
				
					</view>
					</view>
					<view class="geshu">
						<text class="zixun_num"v-if="geshu.bendicount>0" >+{{geshu.bendicount}}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</navigator>
				<navigator url="zixun_jilu" class="jiedan_item">
					<view class="jiedan_item_l">
					<view class="jiedan_item_left">
						<image src="@/static/lsimg/jiedan_zaixian.png" mode="" class="jiedan_img" style="width: 60rpx;height: 60rpx;"></image>
						<image src="@/static/lsimg/new.png" mode="" class="new" v-if="geshu.zaixian>0" ></image>
					</view>
					<view class="jiedan_item_right">
						<view class="hei_28 jiedan_item_title">在线咨询</view>
						<view class="qian_24">文字/语音/图片等多种沟通，不同问题的在线咨询！</view>
				
					</view>
					</view>
					<view class="geshu">
						<text class="zixun_num" v-if="geshu.zaixian>0" >+{{geshu.zaixian}}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</navigator>
				<navigator url="dianhua_zixun" class="jiedan_item">
				<!-- <view class="jiedan_item"> -->
					<view class="jiedan_item_l">
					<view class="jiedan_item_left">
						<image src="@/static/lsimg/jiedan3.png" mode="" class="jiedan_img" style="width: 56rpx;height: 56rpx;"></image>
						<image src="@/static/lsimg/new.png" mode="" class="new" v-if="geshu.dianhua>0"></image>
					</view>
					<view class="jiedan_item_right">
						<view class="hei_28 jiedan_item_title">电话咨询</view>
						<view class="qian_24">律师给您电话针对性解答，能快速解决法律问题！</view>
				
					</view>
					</view>
					<view class="geshu">
						<text class="zixun_num "v-if="geshu.dianhua>0"  >+{{geshu.dianhua}}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				<!-- </view> -->
				</navigator>
				<navigator url="qita_jilu" class="jiedan_item">
					<view class="jiedan_item_l">
					<view class="jiedan_item_left">
						<image src="@/static/lsimg/jiedan_qita.png" mode="" class="jiedan_img" style="width: 60rpx;height: 60rpx;"></image>
						<image src="@/static/lsimg/new.png" mode="" class="new" v-if="geshu.other>0"></image>
					</view>
					<view class="jiedan_item_right">
						<view class="hei_28 jiedan_item_title">其他咨询</view>
						<view class="qian_24">了解真实案例，监督工作，保障当事人合法权益！</view>
				
					</view>
					</view>
					<view class="geshu">
						<text class="zixun_num"v-if="geshu.other>0" >+{{geshu.other}}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</navigator>
				<navigator url="index" class="jiedan_item">
					<view class="jiedan_item_l">
					<view class="jiedan_item_left">
						<image src="@/static/lsimg/jiedan1.png" mode="" class="jiedan_img" style="width: 60rpx;height: 60rpx;"></image>
						<!-- <image src="@/static/lsimg/new.png" mode="" class="new"></image> -->
					</view>
					<view class="jiedan_item_rig ht">
						<view class="hei_28 jiedan_item_title">接单大厅</view>
						<view class="qian_24">咨询类型繁多，选择擅长领域快速抢单回答问题！</view>
				
					</view>
					</view>
					<view class="geshu">
						<!-- <text class="zixun_num" >+5</text> -->
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
					</navigator>
			</view>
		</view>
		<view class="padding_bottom"></view>
		<tabBar :currentPage="currentPage" ref="ls_mainindex"></tabBar>
	</view>
</template>

<script>
import tabBar from '@/components/tabbar/tabbar.vue';

export default {
	components: {
		tabBar
	},
	created() {},
	onLoad() {
		(this.list = []), this.huoqu_user();
		this.$http
			.post({
				url: '/lawyer/login/islogin'
			})
			.then(res => {
				if (res.data.user != '') {
					this.$refs.ls_mainindex.huoqunum();
					this.huoqu_diqu()
				} else {
					this.is_login = false;
				}
			});
	},
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			currentPage: 'ls/jiedan',
			is_all: false,
			geshu:'',
			province:'',
			city:'',
			area:''
		};
	},

	methods: {
		huoqu_user() {
			// 获取用户信息
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
					if (res.data.user.isreal == 2 || res.data.user.isreal == 3) {
						uni.redirectTo({
							url: 'shiming_renzheng'
						});
					} else if (res.data.user.iszhiye == 2 ||res.data.user.iszhiye == 3) {
						uni.redirectTo({
							url: 'zhiye_renzheng'
						});
					} else {
						
						
					}
				});
		},
huoqu_diqu(){
	this.$http
		.post({
			url: '/mlawyerapi/lawyer/auth',
			data: {
				type:2
			}
		}).then(res => {
		
				this.province=res.data.lawyerauth.province
				this.city=res.data.lawyerauth.city
				
			
			this.jiedan_shujv()
			
		});
},
		jiedan_shujv(){
			this.$http
				.post({
					url: '/mlawyerapi/user/lawyercount',
					data:{
						province:this.province,
						city:this.city
					}
				})
				.then(res => {
					
					this.geshu=res.data.count
				});
		},
	},
	filters: {
		timeStamp: function(value) {
			if (value == null) {
				return 'null';
			}
			var i = (value + '').length;
			while (i++ < 13) value = value + '0';
			value = Number(value);
			var date = new Date(value);
			//date.setTime(value);
			var month = date.getMonth() + 1;
			var hours = date.getHours();
			if (hours < 10) hours = '0' + hours;
			var minutes = date.getMinutes();
			if (minutes < 10) minutes = '0' + minutes;
			var time = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + hours + ':' + minutes;
			return time;
		}
	}
};
</script>

<style>
page {
	background-color: #f6f6f6;
}
.jiedan_item {
	display: flex;
	align-items: center;
	background-color: #ffffff;
	margin-top: 20rpx;
	padding:38rpx 30rpx ;
	box-sizing: border-box;
	justify-content: space-between;
	position: relative;
}
.jiedan_item_l{
	display: flex;
	align-items: center;
}
.jiedan_item_left {
	position: relative;
	margin-right: 18rpx;
	display: flex;
	align-items: center;
	
}
.new {
	width: 26rpx;
	height: 26rpx;
	position: absolute;
	top: -12rpx;
	right: -12rpx;
}
/* .jiedan_item_right{
	position: relative;
} */
.geshu{
	position: absolute;
	right: 30rpx;
	top: 40rpx;
}
.geshu image{

	 width: 12rpx;
		height: 22rpx;

}
.zixun_num{
	background-color: #f43a51;
	border-radius: 20rpx;
	color: #FFFFFF;
	font-size: 20rpx;
	padding: 2rpx 6rpx;
	margin-right: 4rpx;
}
.jiedan_item_title{
	margin: 0rpx  0 4rpx;
}
</style>
