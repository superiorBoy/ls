<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold" style="width: 40%;">全部知识分类</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="zhishi_list">
				<view class="zhishi_item hei_26" v-for="item in fenlei">
					<image :src="item.img" mode=""></image>
					<view>{{ item.text }}</view>
				</view>
			</view>
			
			<view class="fenlei_item">
				<view class="fenlei_title hei_26_bold">
					<image src="@/static/img/changshi1.png" mode=""></image>
					婚姻家庭
				</view>
				<view class="xiaolei hui_22">
					<text>结婚</text>
					<text>离婚</text>
					<text>子女抚养</text>
				</view>
			</view>
			<view class="fenlei_item">
				<view class="fenlei_title hei_26_bold">
					<image src="@/static/img/changshi2.png" mode=""></image>
					交通事故
				</view>
				<view class="xiaolei hui_22">
					<text>交通事故处理</text>
					<text>交通事故责任</text>
					<text>交通事故类鉴定</text>
					<text>交通事故赔偿</text>
					<text>交通肇事</text>
					
				</view>
			</view> 
			
			
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			fenlei: [
				{
					img: '../../static/img/changshi1.png',
					text: '婚姻家庭'
				},
				{
					img: '../../static/img/changshi2.png',
					text: '交通事故'
				},
				{
					img: '../../static/img/changshi3.png',
					text: '刑事辩护'
				},
				{
					img: '../../static/img/changshi4.png',
					text: '合同纠纷'
				},
				{
					img: '../../static/img/changshi5.png',
					text: '公司法'
				},
				{
					img: '../../static/img/changshi6.png',
					text: '拆迁安置'
				},
				{
					img: '../../static/img/changshi7.png',
					text: '劳动纠纷'
				},
				{
					img: '../../static/img/changshi8.png',
					text: '债券债务'
				},
				{
					img: '../../static/img/changshi9.png',
					text: '医疗纠纷'
				},
				{
					img: '../../static/img/changshi10.png',
					text: '房产纠纷'
				},
				{
					img: '../../static/img/changshi11.png',
					text: '知识产权'
				},
				{
					img: '../../static/img/changshi12.png',
					text: '侵权纠纷'
				}
			]
		};
	},
	created() {},
	onLoad(option) {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}

.zhishi_item {
	text-align: center;
	height: 136rpx;
	width: 25%;
	border-right: 2rpx solid #f7f7f7;
	border-bottom: 2rpx solid #f7f7f7;
	padding-top: 20rpx;
	box-sizing: border-box;
}
.zhishi_item image {
	width: 34rpx;
	height: 34rpx;
	margin-bottom: 10rpx;
}
.zhishi_list {
	background-color: #ffffff;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 20rpx;
}
.fenlei_item {
	background-color: #ffffff;
	margin-bottom: 20rpx;
}
.fenlei_title {
	height: 82rpx;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	border-bottom: 2rpx solid #f7f7f7;
}
.fenlei_title image {
	width: 34rpx;
	height: 34rpx;
	margin-right: 14rpx;
}
.xiaolei {
	padding: 30rpx 0 10rpx;
}
.xiaolei text {
	margin: 0 0 20rpx 25rpx;
	display: inline-block;
	border: solid 1rpx #dcdcdc;
	height: 44rpx;
	line-height: 44rpx;
	padding: 0 25rpx;
	min-width: 160rpx;
	text-align: center;
	border-radius: 10rpx;
	box-sizing: border-box;
}
</style>
