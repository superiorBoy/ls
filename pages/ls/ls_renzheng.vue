<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">律师认证</view>
			<view class=" head_right hong_30">

			</view>
		</view>

		<view class="zi_body shiming_body">
            <navigator url="ls_geren">
			<view class="shiming_list hei_28" >
				<view class="shiming_list_left">
					个人简介
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			</navigator>
			<navigator url="ls_jiben">
			<view class="shiming_list hei_28 border-bott">
				<view class="shiming_list_left">
					基本信息
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			</navigator>
			<navigator url="ls_ren_list?title=教育背景">
			<view class="shiming_list hei_28"  >
				<view class="shiming_list_left">
					教育背景
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			</navigator>
			<navigator url="ls_lianxi">
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					联系方式
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			</navigator>
			<navigator url="ls_more">
			<view class="shiming_list hei_28 border-bott">
				<view class="shiming_list_left">
					更多信息
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			</navigator>
			<navigator url="ls_ren_list?title=工作经历">
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					工作经历
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			</navigator>
			<navigator url="ls_ren_list?title=社会职务">
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					社会职务
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			</navigator>
			<navigator url="ls_ren_list?title=荣誉奖励">
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					荣誉奖励
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			</navigator>
			<navigator url="ls_ren_list?title=媒体报道">
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					媒体报道
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			</navigator>
			<navigator url="ls_ren_list?title=学术成果">
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					学术成果
				</view>
				<image src="@/static/lsimg/go_r.png" mode=""></image>
			</view>
			</navigator>





		</view>




	</view>



</template>

<script>
	export default {

		data() {
			return {
			}
		},
		created() {

		},
		onLoad(option) {

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},

		}
	}
</script>

<style>
	.head {
		border-bottom: 2rpx solid #E8E8E8;
	}

	.shiming_list {
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2rpx solid #E8E8E8;
		padding-left: 30rpx;
		padding-right: 30rpx;
	}

	.shiming_list input {
		width: 500rpx;
	}

	.shiming_list_left {
		width: 169rpx;
	}

	.shiming_list image {
		width: 13rpx;
		height: 23rpx;
	}

	.border-bott {
		border-bottom: 20rpx solid #f9f9f9;
	}
</style>
