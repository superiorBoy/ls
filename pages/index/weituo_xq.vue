<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">委托详情</view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
			<view class="hei_28 weituo_body">
				车借给朋友朋友卖了一直拖着不还钱怎么办?
				<view class="time">
					2020-10-16 09:26:06
				</view>
			</view>
 <view class="weituo_list hei_28">
 	<text>涉案金额</text><text>5万以下</text>
 </view>
 <view class="weituo_list hei_28">
 	<text>委托费用</text><text>面议</text>
 </view>
 <view class="weituo_list hei_28">
 	<text>案件地区</text><text>广西-南宁</text>
 </view>
 <view class="weituo_list hei_28">
 	<text>联系人</text><text>赵阳阳</text>
 </view>
 <view class="weituo_list hei_28">
 	<text>电话号码</text><text>15109433268</text>
 </view>
 <view class="weituo_list hei_28">
 	<text>电子邮件</text><text>15109433268@163.com</text>
 </view>
 <view class="tingzhi lv_30" @click="tingzhi">
 	停止委托
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

			}
		},
		created() {

		},

		methods: {
	navigateBack() {
				uni.navigateBack()
			},
		tingzhi(){
			
		}




		}
	}
</script>

<style>
	.head {
		border-bottom: 2rpx solid #E8E8E8;
	}
.time{
	text-align: right;
	margin-top: 6rpx;
}
.weituo_body{
	padding: 22rpx 30rpx;
	border-bottom: 20rpx solid #F7F7F7;
	
}	
.weituo_list{
	height: 96rpx;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	border-bottom: 2rpx solid #F7F7F7;
	justify-content: space-between;
}
.tingzhi{
	height: 80rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 20rpx solid #F7F7F7;
	border-top: 20rpx solid #F7F7F7;
}
</style>
