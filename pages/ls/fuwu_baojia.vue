<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">服务报价</view>
			<view class=" head_right hei_30_bold" @click="add()">新增</view>
		</view>

		<view class="zi_body ">
			<view class="baojia_list hei_28" v-for="(item, index) in fuwu_list">
				<view class="baojia_list_left">
					<view class="list_top">
						<text class="paixu bai_24">{{ index + 1 }}</text>
						{{ fenlei[item.typeid].typename }}
					</view>
					<view class="hong_28">￥{{ item.minmoney }}~{{ item.maxmoney }}</view>
				</view>
				<view class="baojia_list_center">
					<view class="list_top">{{ item.province }}-{{ item.city }}</view>
					<view class="">{{ item.agent == 1 ? '接受' : '不接受' }}</view>
				</view>
				<button type="" class="xiugai hong_26" @click="xiugai(index, num)">修改</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			page: 0,
			is_all: false,
			fenlei: [],
			fuwu_list: [],
			num: ''
		};
	},
	created() {},
	onLoad(option) {
		// 获取分类
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.fenlei = res.data.type;
			});
	},
	onShow() {
		this.huoqu_list();
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_list() {
			// 获取列表
			this.$http
				.post({
					url: '/mlawyerapi/lawyer/quoted_price',
					data: {
						page: this.page
					}
				})
				.then(res => {
					this.num = res.data.quoted_price.length;
					this.fuwu_list = res.data.quoted_price;
				});
		},

		xiugai(index, num) {
			uni.navigateTo({
				url: 'add_baojia?index=' + index + '&num=' + num
			});
		},
		add() {
			uni.navigateTo({
				url: 'add_baojia?num=' + this.num
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
	padding: 26rpx 30rpx;
	display: flex;
	justify-content: space-between;
	border-bottom: 20rpx solid #e8e8e8;
	align-items: center;
}
.baojia_list_left {
}
.xiugai {
	margin: 0;

	width: 160rpx;
	height: 56rpx;
	background-color: #ffffff;
	border-radius: 28rpx;
	border: solid 2rpx #f43a51;
	line-height: 56rpx;
}
.list_top {
	margin-bottom: 22rpx;
}
.paixu {
	display: inline-block;
	height: 36rpx;
	background-color: #f43a51;
	border-radius: 2rpx;
	line-height: 36rpx;
	width: 36rpx;
	text-align: center;
	margin-right: 9rpx;
}
</style>
