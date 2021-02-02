<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">提示页</view>
			<view class="head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="tishi_name"><image src="@/static/img/tishi_logo.png" mode="widthFix"></image></view>
			<view class="tishi_tu"><image src="@/static/img/tishi_tu.png" mode="widthFix"></image></view>
			<view class="tishi_txt">为了更好体验，请下载APP入驻使用！</view>
			<view class="tishi_txt">每天有大量订单等你来接!</view>
			<view class="down">
				<button type="" class="ios bai_26" @click="down_ios"><image src="@/static/img/ios.png" mode="" ></image>iphone版本下载</button>
				<button type="" class="Android bai_26" @click="down_anzhuo"><image src="@/static/img/anzhuo.png" mode="" ></image>Android版本下载</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			down:''
		};
	},
	created() {},
	onLoad(option) {
		this.$http
			.post({
				url: '/mapi/index/banben'
			})
			.then(res => {
				this.down = res.data.banben;
			});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		down_ios() {
			// //#ifdef H5
			// window.location.href = this.down.iosurl;
			
			// // #endif
			// //#ifdef APP-PLUS
			// var urlStr = encodeURI(this.down.iosurl); //把字符串作为url进行编码
			// plus.runtime.openURL(urlStr);
			// // #endif
			uni.navigateTo({
				url:'app_down'
			})
		},
		down_anzhuo() {
		// 	//#ifdef H5
		// 	window.location.href = this.down.androidurl;
		// 	// #endif
		
		// 	//#ifdef APP-PLUS
		// 	var urlStr = encodeURI(this.down.androidurl); //把字符串作为url进行编码
		// 	plus.runtime.openURL(urlStr);
		// 	// #endif
           uni.navigateTo({
				url:'app_down'
			})
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #f7f7f7;
}
.tishi_name {
	text-align: center;
	margin: 67rpx 0 70px;
}
.tishi_name image {
	width: 467rpx;
}
.tishi_tu {
	text-align: center;
}
.tishi_tu image {
	width: 600rpx;
}
.tishi_txt {
	font-size: 36rpx;
	text-align: center;
	color: #00a16b;
	line-height: 68rpx;
	font-weight: bold;
}
.down{
	display: flex;
	align-items: center;
	margin-top: 80rpx;
}
.down button{
		width: 330rpx;
		height: 80rpx;
		background-color: #0eb77e;
		border-radius: 40rpx;
		line-height: 80rpx;
}
.ios ,.Android{
	display: flex;
	align-items: center;
	justify-content: center;
}
.ios image{
		width: 27rpx;
		height: 32rpx;
		margin-right: 18rpx;
}
.Android image{
		width: 33rpx;
		height: 32rpx;
		margin-right: 12rpx;
}
</style>
