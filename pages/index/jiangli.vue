<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">我的奖励</view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
			
            <view class="jiangli_list">
            	<view class="jiangli_item" v-for="item in 5">
            		<view class="jiangli_item_top">
            			<text class="hei_28">18026288020</text>
						<text class="hong_30">+6</text>
            		</view>
					<view class="jiangli_item_bittom">
						<text class="hui_26">邀请好友首次消费</text>
						<text class="qian_24">2021-01-05 16:03:43</text>
					</view>
            	</view>
            </view>
			
		</view>
	</view>
</template>

<script>

export default {
	onShow() {
	
	},

	data() {
		return {
			
			
		};
	},
	onLoad() {
		this.$http
			.post({
				url: '/mapi/user/rewardlist'
			})
			.then(res => {
				
				
			});
	},
	created() {},

	methods: {
		navigateBack() {
			uni.navigateBack();
		},
	
		
	}
};
</script>

<style>
page{
	background-color: #F7F7F7;
}
.jiangli_item{
	background-color: #FFFFFF;
	padding:20rpx 30rpx;
	margin-top: 10rpx;
}
.jiangli_item_top,.jiangli_item_bittom{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.jiangli_item_top{
	margin-bottom: 10rpx;
}

</style>
