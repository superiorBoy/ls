<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">咨询报价</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;">
				<view class="baojia_list_top hei_28">
					<text>当面咨询</text>
					<navigator url="baojia_jianmian" class="baojia_list_top_right qian_28">
						<text>请添加</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</navigator>
				</view>

				<!-- <view class="baojia_list_bottom qian_26">
				<text>￥19/20分钟</text><text>￥19/20分钟</text><text>￥19/20分钟</text>
				<text>￥19/20分钟</text><text>￥19/20分钟</text>
			</view> -->
			</view>
			<view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;">
				<view class="baojia_list_top hei_28">
					<text>在线咨询</text>
					<view class="baojia_list_top_right qian_28" @click="go_baojia(1)">
						<text>请添加</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</view>
				<!-- <view class="baojia_list_bottom qian_26">
				<text>￥19/20分钟</text><text>￥19/20分钟</text><text>￥19/20分钟</text>
				<text>￥19/20分钟</text><text>￥19/20分钟</text>
			</view> -->
			</view>
			<view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;">
				<view class="baojia_list_top hei_28">
					<text>电话咨询</text>
					<view class="baojia_list_top_right qian_28" @click="go_baojia(2)">
						<text>请添加</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</view>
				<!-- <view class="baojia_list_bottom qian_26">
				<text>￥19/20分钟</text><text>￥19/20分钟</text><text>￥19/20分钟</text>
				<text>￥19/20分钟</text><text>￥19/20分钟</text>
			</view> -->
			</view>
			<view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;">
				<view class="baojia_list_top hei_28">
					<text>合同文书</text>
					<view class="baojia_list_top_right qian_28" @click="go_baojia(3)">
						<text>请添加</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</view>
				<!-- <view class="baojia_list_bottom qian_26">
				<text>￥19/20分钟</text><text>￥19/20分钟</text><text>￥19/20分钟</text>
				<text>￥19/20分钟</text><text>￥19/20分钟</text>
			</view> -->
			</view>
			<view class="baojia_list" style="border-bottom: 20rpx solid #E8E8E8;">
				<view class="baojia_list_top hei_28">
					<text>诉讼委托</text>
					<view class="baojia_list_top_right qian_28" @click="go_baojia(4)">
						<text>请添加</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</view>
				<!-- <view class="baojia_list_bottom qian_26">
				<text>￥19/20分钟</text><text>￥19/20分钟</text><text>￥19/20分钟</text>
				<text>￥19/20分钟</text><text>￥19/20分钟</text>
			</view> -->
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	created() {},
	onLoad(option) {
		this.$http
			.post({
				url: '/mlawyerapi/lawyer/baojia'
			})
			.then(res => {});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		go_baojia(type) {
			uni.navigateTo({
				url: 'baojia_list?type=' + type
			});
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.baojia_list {
	padding: 0 30rpx;
}
.baojia_list_bottom {
	padding-bottom: 16rpx;
}
.baojia_list_bottom text {
	height: 56rpx;
	background-color: #f7f7f7;
	border-radius: 10rpx;
	display: inline-block;
	line-height: 56rpx;
	width: 210rpx;
	text-align: center;
	margin-right: 30rpx;
	margin-bottom: 20rpx;
}
.baojia_list_bottom text:nth-child(3n) {
	margin-right: 0;
}

.shiming_list input {
	width: 500rpx;
	text-align: right;
}

.shiming_list_left {
	width: 170rpx;
}
.baojia_list_top {
	display: flex;
	height: 106rpx;
	align-items: center;
	justify-content: space-between;
}
.baocun_btn {
	padding: 0 30rpx;
	margin-top: 278rpx;
}
.baocun_btn button {
	height: 88rpx;
	background-color: #f43a51;
	border-radius: 44rpx;
	line-height: 88rpx;
}
.baojia_list_top_right image {
	width: 12rpx;
	height: 21rpx;
	margin-left: 12rpx;
}
</style>
