<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">VIP服务</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="vip_body">
				<view class="vip_list"@click="radio(1)">
					<view class="vip_biaoqian vip_biaoqian1 bai_22">限时体验</view>
					<view class="vip_list_left">
						<view class="vip_jiage">
							<text class="lv_30">
								<text style="font-size: 44rpx;font-weight: bold;">1</text>
								个月
							</text>
							<text class="hui_30">￥399.00</text>
						</view>
						<view class="hui_24 youxiao">有效时间：自购买之日起到一个月之内有效</view>
						<view class="hui_24">购买须知：凡是购买VIP服务可以随时咨询在线律师</view>
					</view>
					<radio value="1" :checked="zhifu==1"/>
				</view>
				<view class="vip_list"@click="radio(2)">
					<view class="vip_biaoqian vip_biaoqian2 bai_22">限时特惠</view>
					<view class="vip_list_left">
						<view class="vip_jiage">
							<text class="hong_30">
								<text style="font-size: 44rpx;font-weight: bold;">12</text>
								个月
							</text>
							<text class="hui_30">￥1999.00</text>
						</view>
						<view class="hui_24 youxiao">有效时间：自购买之日起到一年之内有效</view>
						<view class="hui_24">购买须知：购买年度VIP更优惠，享更多服务</view>
					</view>
					<radio value="2" :checked="zhifu==2"/>
				</view>
			<button type="" class="tixian_btn bai_30" @click="pay">立即开通VIP服务</button>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			zhifu: 1,
		};
	},
	created() {},
	onLoad(option) {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		radio(i) {
			this.zhifu = i
		},
		pay(){
			console.log(this.zhifu)
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #f7f7f7;
}
.vip_body {
	padding: 0 30rpx;
	margin-top: 30rpx;
}
.vip_list {
	height: 208rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	border: solid 1rpx #626262;
	margin-bottom: 30rpx;
	display: flex;
	justify-content: space-between;
	padding: 0 27rpx 0 40rpx;
	align-items: center;
	position: relative;
}
.vip_biaoqian {
	width: 134rpx;
	height: 46rpx;
	border-radius: 8rpx 0rpx 10rpx 0rpx;
	position: absolute;
	left: 0;
	top: 0;
	line-height: 46rpx;
	text-align: center;
}
.vip_biaoqian1 {
	background-color: #0eb77e;
}
.vip_biaoqian2 {
	background-color: #f21f25;
}
.vip_list:first-child {
	border: solid 1rpx #0eb77e;
}
.vip_jiage {
	margin: 10rpx 0 14rpx 120rpx;
}
.youxiao {
	margin-bottom: 10rpx;
}
	.tixian_btn {
		height: 88rpx;
		background-color: #0eb77e;
		border-radius: 44rpx;
		line-height: 88rpx;
		margin: 425rpx 0 50rpx;
	}
</style>
