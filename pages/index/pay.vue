<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">支付</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="pay_top">
				<view class="pay_list">
					<text class="qian_30">服务项目</text>
					<text class="hei_30">
						在线图文咨询
						<text class="qian_26">（服务时长:24小时）</text>
					</text>
				</view>
				<view class="pay_list">
					<text class="qian_30">服务律师</text>
					<text class="hei_30">杨再坤律师</text>
				</view>
				<view class="pay_list">
					<text class="qian_30">咨询内容</text>
					<text class="hei_30">离婚了孩子的抚养权归谁？</text>
				</view>
				<view class="pay_list_jine">
					<view class="pay_list_top">
						<text class="qian_30">咨询内容</text>
						<text class="hei_30">
							实付款：
							<text class="hong_30">￥{{ jine }}</text>
						</text>
					</view>
					<view class="hei_30 qian_26 yuanjia">
						原价：
						<text>99.00</text>
					</view>
				</view>
			</view>

			<view class="fangshi_txt hei_30_bold">支付方式</view>
			<view class="fangshi">
				<view class="fangshi_list_pay" @click="radio(1)">
					<view class="fangshi_left hei_28">
						<image src="@/static/img/pay_weixin.png" mode="" style="width:36rpx ;height: 31rpx;"></image>
						微信支付
						<text class="tuijian hong_22">推荐</text>
					</view>
					<label class="radio"><radio value="1" :checked="zhifu == 1" /></label>
				</view>
				<view class="fangshi_list_pay" @click="radio(2)">
					<view class="fangshi_left hei_28">
						<image src="@/static/img/pay_zhifubao.png" mode="" style="width: 39rpx;height: 39rpx;"></image>
						支付宝支付
					</view>
					<label class="radio"><radio value="2" :checked="zhifu == 2" /></label>
				</view>
			</view>
			<view class="pay_btn">
				<button type="" class="tixian_btn bai_30" @click="save">去支付（{{ jine }}）</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			zhifu: '1',
			jine: '58.00'
		};
	},
	created() {
	},
	onLoad(option) {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		save() {
			uni.request({
				url: 'http://81.68.238.59:3000/captcha/sent',
				dataType: 'json',
				data: {
					phone: '15993999344'
				},
				success: res => {
					console.log(res.data);
				}
			});

			// uni.request({
			//     url: '/dpc/ws/geocoder/v1/?location=39.984154,116.307490&key=FVRBZ-F3A3I-J5TGK-5PWRJ-4AFGJ-2UBHR&get_poi=1',
			//     success: (res) => {
			//         console.log(res.data);
			//     }
			// });
			// this.$http.get({
			// 	url: '/dpc/ws/geocoder/v1/?location=39.984154,116.307490&key=FVRBZ-F3A3I-J5TGK-5PWRJ-4AFGJ-2UBHR&get_poi=1',
			// 	data:{
			// 		// phone: '1509676254',
			// 		// passWord: '12345689',
			// 	}
			// }).then(resp => {
			// 	console.log(resp)
			// })

			console.log(this.zhifu);
		},
		radio(i) {
			this.zhifu = i;
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

.tixian_body {
	padding: 0 30rpx;
}

.tixian_top {
	height: 237rpx;
	background: url(../../static/img/chongzhi_bg.png) no-repeat;
	background-size: 100% 100%;
	text-align: center;
	padding-top: 75rpx;
	box-sizing: border-box;
}

.tixian_top image {
	width: 30rpx;
	height: 28rpx;
	margin-right: 13rpx;
}

.jine {
	font-size: 60rpx;
	color: #ffffff;
	font-weight: bold;
}

.tixian_btn {
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin: 125rpx 0 50rpx;
}

.jine_shuru {
	display: flex;
	border-bottom: 2rpx solid #f7f7f7;
	padding-bottom: 8rpx;
}

.chong_txt {
	margin: 30rpx 0 36rpx;
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

.pay_list,
.pay_list_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.pay_top {
	background-color: #ffffff;
	padding: 0 30rpx;
	margin-top: 20rpx;
}

.pay_list {
	height: 100rpx;
	border-bottom: 2rpx solid #f7f7f7;
}

.pay_list_jine {
	height: 153rpx;
	box-sizing: border-box;
	padding: 27rpx 0;
}

.yuanjia {
	text-align: right;
	margin-top: 20rpx;
}

.yuanjia text {
	text-decoration: line-through;
}

.fangshi {
	background-color: #ffffff;
	padding: 0 30rpx;
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
}
</style>
