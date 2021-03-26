<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">VIP服务</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="vip_top">
				<image :src="img_url + user.photourl" mode=""></image>
				<view class="vip_top_right">
					<view class="hei_30 dengji">用户等级：{{user.isvip==1?'vip':'普通用户'}}</view>
					<view class="hui_28" v-if="user.isvip==1">{{user.viptime | timeStamp}}</view>
					<view class="hui_28"v-if="user.isvip!=1">当前暂未开通VIP服务'</view>
				</view>
			</view>

			<view class="xuanze">
				<view class="xuanze_title hei_34_bold">选择服务</view>
				<view class="xuanze_body">
					<view class="xuanze_item hei_30" :class="xuanze == index ? 'xuanzhong' : ''" @click="xuan(index, item.lawyervipid)" v-for="(item, index) in lawyervip">
						<view class="jiage">
							￥
							<text class="hong_38">{{ item.price }}</text>
						</view>
						<view class="nian">{{ item.time }}年</view>
						<view class="tiyan bai_22" v-if="index == 0">体验</view>
						<view class="tiyan bai_22" v-if="index == 2">推荐</view>
					</view>
					<!-- <view class="xuanze_item hei_30" :class="xuanze==2?'xuanzhong':''"@click="xuan(2)">
					<view class="jiage">
						￥<text class="hong_38">3000</text> 
					</view>
					<view class="nian">
						2年
					</view>
					
				</view>
				<view class="xuanze_item hei_30" :class="xuanze==3?'xuanzhong':''"@click="xuan(3)">
					<view class="jiage">
						￥<text class="hong_38">4000</text> 
					</view>
					<view class="nian">
						3年
					</view>
					<view class="tiyan bai_22">推荐</view>
				</view> -->
				</view>
			</view>

			<view class="haochu">
				<view class="haochu_title hei_34_bold">加入VIP的好处</view>
				<view class="haochu_list hui_24">
					<view class="haochu_item">1.律师排名更前面，主页，咨询页面等排名前面！</view>
					<view class="haochu_item">2.当地律师首屏展示，显示排名前面！</view>
					<view class="haochu_item">3.加入网站律师展示广告位，得到更多展示！</view>
					<view class="haochu_item">4.加入系统订单匹配，自动分配电话咨询订单，获取更多收入！</view>
					<view class="haochu_item">5.加入系统订单匹配，自动分配在线咨询订单，获取更多收入！</view>
					<view class="haochu_item">6.加入系统案件委托，优先推送当地的案件，获取更多收入！</view>
					<view class="haochu_item">7.加入提问系统，优先推送当地提问咨询的人，获取更多收入！</view>
				</view>
			</view>

			<view class="zhifu">
				<view class="zhifu_title hei_34_bold">选择支付方式</view>

				<view class="fangshi">
					<!-- <view class="fangshi_list_pay" @click="radio(1)">
	            		<view class="fangshi_left hei_28">
	            			<image src="@/static/img/pay_weixin.png" mode="" style="width:36rpx ;height: 31rpx;"></image>
	            			微信支付
	            			<text class="tuijian hong_22">推荐</text>
	            		</view>
	            		<label class="radio"><radio value="1" :checked="zhifu == 1" /></label>
	            	</view> -->
					<view class="fangshi_list_pay" @click="radio(2)">
						<view class="fangshi_left hei_28">
							<image src="@/static/img/pay_zhifubao.png" mode="" style="width: 39rpx;height: 39rpx;"></image>
							支付宝支付
							<text class="tuijian_txt hong_22">推荐</text>
						</view>
						<label class="radio"><radio value="2" :checked="zhifu == 2" /></label>
					</view>
					<view class="fangshi_list_pay" @click="radio(3)">
						<view class="fangshi_left hei_28">
							<image src="@/static/img/yue_pay.png" mode="" style="width:36rpx ;height: 31rpx;"></image>
							余额支付
						</view>
						<label class="radio"><radio value="3" :checked="zhifu == 3" /></label>
					</view>
				</view>
				<button type="" class="kaitong_btn bai_30" @click="save">确认充值</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			user: '',
			zhifu: 2,
			xuanze: 0,
			money: '1800',
			lawyervip: '',
			lawyervipid: ''
		};
	},
	created() {},
	onLoad(option) {
		this.$http
			.post({
				url: '/mlawyerapi/user/lawyervip'
			})
			.then(res => {
				this.lawyervip = res.data.lawyervip;
				this.lawyervipid = res.data.lawyervip[0].lawyervipid;
			});
		// 获取用户信息
		this.$http
			.post({
				url: '/mlawyerapi/user/getlawyer'
			})
			.then(res => {
				this.user = res.data.user;
			});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		radio(i) {
			this.zhifu = i;
		},
		xuan(i, lawyervipid) {
			this.xuanze = i;
			this.lawyervipid = lawyervipid;
		},
		save() {
			if (this.zhifu == 2) {
				// #ifdef H5
				this.h5pay();
				// #endif

				// #ifdef APP-PLUS
				this.zhifubao_pay();
				// #endif
			} else {
				this.yue_pay();
			}
		},
		h5pay() {
			this.$http
				.post({
					url: '/mlawyerapi/user/lawyerviph5',
					data: {
						lawyervipid: this.lawyervipid
					}
				})
				.then(res => {
					if (res.code == 0) {
						window.open('' + res.data.response);
					}
				});
		},
		zhifubao_pay() {
			this.$http
				.post({
					url: '/mlawyerapi/user/lawyervipapp',
					data: {
						lawyervipid: this.lawyervipid
					}
				})
				.then(res => {
					var that = this;
					if (res.code == 0) {
						uni.requestPayment({
							provider: 'alipay',
							orderInfo: res.data.response,
							success: function(res) {
								console.log('success:' + JSON.stringify(res));
								uni.showToast({
									title: '支付成功',
									duration: 2000
								});
							},
							fail: function(err) {
								uni.showToast({
									title: '支付失败',
									duration: 2000,
									icon: 'none'
								});
								console.log('fail:' + JSON.stringify(err));
							}
						});
					}
					console.log(res);
				});
		},
		yue_pay() {
			this.$http
				.post({
					url: '/mlawyerapi/user/accountvip',
					data: {
						lawyervipid: this.lawyervipid
					}
				})
				.then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: '' + res.message,
							duration: 2000,
							icon: 'none'
						});
					}
				});
		}
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
.head {
}
.zi_body {
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.vip_top {
	display: flex;
	align-items: center;
	margin: 10rpx 0;
}
.vip_top image {
	width: 110rpx;
	height: 110rpx;
	border-radius: 100%;
	margin-right: 30rpx;
}
.dengji {
	margin-bottom: 10rpx;
}
.xuanze_item {
	width: 216rpx;
	height: 208rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	border: solid 1rpx #e3e3e3;
	text-align: center;
	padding: 36rpx 0 0;
	box-sizing: border-box;
	position: relative;
}
.jiage {
	line-height: 100rpx;
}
.nian {
	line-height: 68rpx;
	border-top: 2rpx dashed #d3d3d3;
}
.tiyan {
	width: 86rpx;
	height: 46rpx;
	background-color: #f33c3c;
	border-radius: 0rpx 0rpx 10rpx 0rpx;
	position: absolute;
	top: 0;
	left: 0;
	line-height: 46rpx;
	text-align: center;
}
.xuanze_body {
	display: flex;
	justify-content: space-between;
}
.xuanze_title {
	line-height: 110rpx;
}
.haochu_title {
	line-height: 130rpx;
}
.haochu_item {
	line-height: 42rpx;
}
.zhifu_title {
	line-height: 100rpx;
}

.fangshi_txt {
	height: 103rpx;
	line-height: 103rpx;
	padding: 0 30rpx;
}

.fangshi_left {
	display: flex;
	align-items: center;
}

.fangshi_left image {
	margin-right: 20rpx;
}

.fangshi_list_pay {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100rpx;
	border-bottom: 2rpx solid #f7f7f7;
}
.tuijian_txt {
	width: 62rpx;
	height: 30rpx;
	background-color: #ffffff;
	border-radius: 2rpx;
	border: solid 1rpx #fd4358;
	display: inline-block;
	line-height: 30rpx;
	text-align: center;
	margin-left: 10rpx;
}
.kaitong_btn {
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin-top: 80rpx;
}
.zhifu {
	padding-bottom: 50rpx;
}
.xuanzhong {
	border: solid 1rpx #f33c3c !important;
	position: relative;
}

.xuanzhong::before {
	content: '';
	display: inline-block;
	position: absolute;
	bottom: 0;
	right: 0;
	width: 58rpx;
	height: 54rpx;
	background: url(../../static/lsimg/vip_xuanzhong.png) no-repeat;
	background-size: 100% 100%;
}
</style>
