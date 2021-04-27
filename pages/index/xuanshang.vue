<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">悬赏</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="xuanshang_title qian_30">
				<image src="@/static/img/xuanshang_dd.png" mode="" style="width: 24rpx;height: 29rpx;"></image>
				订单信息
			</view>
			<view class="pay_top">
				<view class="pay_list">
					<text class="qian_30">咨询地区</text>
					<text class="hei_30">{{ data.province }}-{{ data.city }}-{{ data.area }}</text>
				</view>
				<view class="pay_list" v-if="leibie_arry && leibie_arry[data.typeid]">
					<text class="qian_30">咨询类型</text>
					<text class="hei_30">{{ leibie_arry[data.typeid].typename }}</text>
				</view>
				<!-- <view class="pay_list">
					<text class="qian_30">手机号码</text>
					<input type="text" value="" v-model="phone" placeholder="请输入" class="hei_30" />
				</view> -->
				<view class="pay_list wen_list">
					<view class="qian_30 wen_list_top">咨询内容</view>
					<view class="hei_30 wen_neirong ">{{ data.information }}</view>
				</view>
			</view>
		</view>

		<view class="xuanshang_title qian_30">
			<image src="@/static/img/xuangshang_jin.png" mode="" style="width: 28rpx;height: 28rpx;"></image>
			请选择悬赏金额
		</view>

		<view class="jine_list qian_30">
			<view class="" v-for="(item, index) in jine_arry" :class="['jine_item', money == item ? 'xuan_active' : '']" @click="xuan(index)" v-if="item != 0">
				<image src="@/static/img/qian_on.png" mode="" class="qian_on"></image>
				<image src="@/static/img/qian_no.png" mode="" class="qian_no"></image>
				{{ item }}元
			</view>
		</view>
	<view class="qian_26 xuanshang_tishi">
		<image src="../../static/img/xuanshang_tishi.png" mode=""></image>
				马上悬赏，您的问题会被更多的律师快速有效解答哦~
				</view>
		<view class="pay_btn">
			<button type="" class="xuanshang bai_30" @click="save">支付</button>
			<button type="" class="zanbu qian_30" @click="zanbu">返回</button>
		</view>
		<view class="xuan_tishi qian_26">
			<view class="xuan_tishi_fir">悬赏提问，律师一分钟内优先解答！</view>
			<view class="">99%的问题都得到了优质解决方案！</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			jine_arry: [],
			xuan_index: 0,
			data: '',
			consultid: '',
			fenlei_arry: [],
			leibie_arry: [],
			laiyuan: 2,
			apppaytype: '',
			money: '',
			is_click: true
		};
	},

	created() {},
	onLoad(option) {
		// 获取分类

		if (option.information) {
			this.data = {
				information: option.information,
				typeid: option.typeid,
				province: option.province,
				city: option.city,
				area: option.area
			};
			this.laiyuan = 1;
			this.$http
				.post({
					url: '/mapi/index/gettype'
				})
				.then(res => {
					this.leibie_arry = res.data.type;
					var array = [];
					for (var key in res.data.type) {
						array.push(res.data.type[key]);
					}
					this.fenlei_arry = array;
				});
		} else {
			this.consultid = option.consultid;
			this.$http
				.post({
					url: '/mapi/index/gettype'
				})
				.then(res => {
					this.leibie_arry = res.data.type;
					var array = [];
					for (var key in res.data.type) {
						array.push(res.data.type[key]);
					}
					this.fenlei_arry = array;
					this.huoqu_xq();
				});
		}

		this.huoqu_pay_fs();
		this.huoqu_xuanshang_num();
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_xuanshang_num() {
			this.$http
				.post({
					url: '/mapi/index/getxuanshang'
				})
				.then(res => {
					var array = [];
					for (var key in res.data.zhan) {
						array.push(res.data.zhan[key]);
					}
					this.jine_arry = array;
					this.money = res.data.zhan.xuanshang1;
				});
		},
		huoqu_pay_fs() {
			this.$http
				.post({
					url: '/mapi/index/getapppaytype'
				})
				.then(res => {
					if (res.code == 0) {
						this.apppaytype = res.data.zhan.apppaytype;
					}
				});
		},
		xuan(index) {
			this.xuan_index = index;
			this.money = this.jine_arry[index];
		},
		huoqu_xq() {
			this.$http
				.post({
					url: '/mapi/consult/zixun_xq',
					data: {
						consultid: this.consultid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.data = res.data.consult;
						if (this.jine_arry.includes(res.data.consult.paymoney)) {
							this.money = res.data.consult.paymoney;
						} else {
						}
					}
					console.log(res);
				});
		},
		save() {
			if (this.laiyuan == 1) {
				this.$http
					.post({
						url: '/mapi/consult/addconsult',
						data: {
							information: this.data.information,
							typeid: this.data.typeid,
							province: this.data.province,
							city: this.data.city,
							area: this.data.area
						}
					})
					.then(res => {
						if (res.code == 0) {
							this.consultid = res.data;
							this.fukuan();
						}
						console.log(res);
					});
			} else {
				this.fukuan();
			}
		},
		fukuan() {
			if (this.apppaytype == 1) {
				this.h5_pay();
			} else {
				// #ifdef H5
				this.zfb_pay(res.data.consultid);
				// #endif
				// #ifdef APP-PLUS
				this.app_pay();
				// #endif
			}
		},

		h5_pay() {
			var that = this;
			if (this.is_click) {
				that.is_click = false;
				setTimeout(function() {
					that.is_click = true;
				}, 3000);
				this.$http
					.post({
						url: '/mapi/consult/payh5',
						data: {
							consultid: that.consultid,
							paymoney: that.money
						}
					})
					.then(res => {
						if (res.code == 0) {
							// #ifdef H5

							that.$http.jspost(res.data.response);

							// #endif
							// #ifdef APP-PLUS
							plus.runtime.openURL('' + res.data.response);
							// #endif
						}
					});
			} else {
				uni.showToast({
					title: '稍后操作',
					duration: 2000,
					icon: 'none'
				});
			}
		},
		app_pay() {
			this.$http
				.post({
					url: '/mapi/consult/pay',
					data: {
						consultid: this.consultid,
						paymoney: this.money
					}
				})
				.then(res => {
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
								this.shuru_txt = '';
								setTimeout(function() {
									uni.navigateTo({
										url: 'tiwen_list'
									});
								}, 2000);
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
				});
		},
		pay(consultid) {
			uni.requestPayment({
				provider: 'alipay',
				orderInfo: res.data.response,
				success: function(res) {
					console.log('success:' + JSON.stringify(res));
					uni.showToast({
						title: '支付成功',
						duration: 2000
					});

					setTimeout(function() {
						uni.navigateBack();
					}, 2000);
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
		},
		zanbu() {
			uni.navigateBack();
		}
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}

.head {
	border-bottom: 2rpx solid #e8e8e8;
}

.jine {
	font-size: 60rpx;
	color: #ffffff;
	font-weight: bold;
}

.jine_shuru {
	display: flex;
	border-bottom: 2rpx solid #f7f7f7;
	padding-bottom: 8rpx;
}

.fangshi_list_pay {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100rpx;
	border-bottom: 2rpx solid #f7f7f7;
}

.pay_list,
.pay_list_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.pay_list input {
	text-align: right;
}
.xuanshang_title {
	display: flex;
	align-items: center;
	height: 98rpx;
	padding-left: 27rpx;
}
.xuanshang_title image {
	margin-right: 10rpx;
}
.pay_top {
	background-color: #ffffff;
	padding: 0 30rpx;
}

.pay_list {
	height: 100rpx;
	border-bottom: 2rpx solid #f7f7f7;
}

.pay_list_jine {
	height: 92rpx;
	box-sizing: border-box;
	padding: 27rpx 0;
}

.fangshi {
	background-color: #ffffff;
	padding: 0 30rpx;
}
.xuanshang {
	width: 335rpx;
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
}
.zanbu {
	width: 335rpx;
	height: 88rpx;
	background-color: #dcdcdc;
	border-radius: 44rpx;
	line-height: 88rpx;
}
.tuijian {
	border: 2rpx solid #fd4358;
	width: 62rpx;
	height: 30rpx;
	display: inline-block;
	line-height: 30rpx;
	text-align: center;
	margin-left: 7rpx;
}
.pay_btn {
	padding: 0 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 108rpx;
}
.wen_list {
	display: block;
	padding-bottom: 30rpx;
	height: auto;
}
.wen_list_top {
	line-height: 80rpx;
}
.wen_neirong {
	width: 100%;
	padding: 0rpx 16rpx 10rpx 0;
	box-sizing: border-box;
	word-break: break-all;
}
.wen_neirong_txt {
	height: 100rpx;
	overflow: auto;
	word-break: break-all;
}
.wen_neirong_textarea {
	height: 264rpx;
}

.height_auto {
	height: auto;
	padding: 20rpx 0;
}

.dis_fir {
	align-items: flex-start;
}
.jine_list {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	background-color: #ffffff;
	padding: 46rpx 30rpx 10rpx 30rpx;
}
.jine_item {
	width: 210rpx;
	height: 90rpx;
	background-color: #efefef;
	border-radius: 3rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 30rpx 30rpx 0;
	box-sizing: border-box;
}
.jine_item:nth-child(3n) {
	margin-right: 0;
}
.jine_item image {
	width: 26rpx;
	height: 30rpx;
	margin-right: 9rpx;
}
.qian_on {
	display: none;
}
.xuan_active {
	border: 2rpx solid #0eb77e;
	color: #0eb77e;
	background-color: #ffffff;
	position: relative;
}
.xuan_active .qian_on {
	display: inline-block;
}
.xuan_active .qian_no {
	display: none;
}
.xuan_active::before {
	content: '';
	display: inline-block;
	width: 58rpx;
	height: 54rpx;
	position: absolute;
	bottom: 0;
	right: 0;
	background: url(../../static/img/xuanshang_xuan.png) no-repeat;
	background-size: 100% 100%;
}
.xuan_tishi {
	text-align: center;
	padding-bottom: 50rpx;
	margin-top: 30rpx;
}
.xuan_tishi_fir {
	margin-bottom: 10rpx;
}
.xuanshang_tishi{
	display: flex;
	align-items: center;
	padding-left: 23rpx;
	margin-top: 18rpx;
}
.xuanshang_tishi image{
	width: 34rpx;
		height: 34rpx;
		margin-right: 16rpx;
}
</style>
