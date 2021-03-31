<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">联系客服</view>
			<view class=" head_right hei_30_bold" ></view>
		</view>

		<view class="zi_body ">
			<image src="../../static/lsimg/kefu_banner.png" mode="widthFix" class="kefu_banner"></image>
			<view class="kefu_center hei_26">
			<view class="kefu_list">
				<view class="kefu_list_left">
					<image src="../../static/lsimg/kefu_zhuanyuan.png" mode="" style="width: 30rpx;height: 32rpx;"></image>客服专员
				</view>
				<text>小虎律师</text>
			</view>
			<view class="kefu_list">
				<view class="kefu_list_left">
					<image src="../../static/lsimg/kefu_shouji.png" mode="" style="width: 26rpx;height: 32rpx;"></image>客服电话
				</view>
				<text>18158424282</text>
			</view>
			<view class="kefu_list">
				<view class="kefu_list_left">
					<image src="../../static/lsimg/kefu_weixin.png" mode=""style="width: 38rpx;height: 32rpx;"></image>微信
				</view>
				<text>xhlvshi5</text>
			</view>
			</view>
			
			<view class="kefu_bottom">
				<image src="../../static/lsimg/kefu_erweima.png" mode=""></image>
				<view class="qian_28">
					扫一扫，添加客服
				</view>
			</view>
			
			
		</view>
	
		
	</view>
</template>

<script>
export default {
	data() {
		return {

		};
	},
	created() {},
	onLoad(option) {
		
	},
	onShow() {
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		
		huoqu_lawyer(){
			this.$http
				.post({
					url: '/mlawyerapi/user/getlawyer'

				})
				.then(res => {
					this.isvip = res.data.user.isvip;
				});
		},
		huoqu_kaiqi(){
			
		}

		
	}
};
</script>

<style>

.kefu_banner {
		height: 319rpx;
		width: 100%;
}
.kefu_list{
	display: flex;
	justify-content: space-between;
	border-bottom: 2rpx solid #eeeeee;
	height: 100rpx;
	align-items: center;
}
.kefu_center{
	padding: 0 30rpx;
}
.kefu_list_left image{
	vertical-align: middle;
	margin-right: 16rpx;
}
.kefu_bottom{
	text-align: center;
	margin-top: 110rpx;
}
.kefu_bottom image{
	width: 320rpx;
		height: 320rpx;
		margin-bottom: 40rpx;
}
</style>
