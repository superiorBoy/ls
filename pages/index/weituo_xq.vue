<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">委托详情</view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
			<view class="hei_28 weituo_body">
				{{ item.information }}
				<view class="time">{{ item.addtime | timeStamp }}</view>
			</view>
			<!-- <view class="weituo_list hei_28">
 	<text>涉案金额</text><text>5万以下</text>
 </view> -->
			<view class="weituo_list hei_28">
				<text>委托费用</text>
				<text>面议</text>
			</view>
			<view class="weituo_list hei_28">
				<text>案件地区</text>
				<text>{{ item.province }}-{{ item.city }}-{{ item.area }}</text>
			</view>
			<view class="weituo_list hei_28">
				<text>联系人</text>
				<text>{{ item.name }}</text>
			</view>
			<view class="weituo_list hei_28">
				<text>电话号码</text>
				<text>{{ item.phone }}</text>
			</view>
			<!-- <view class="weituo_list hei_28">
 	<text>电子邮件</text><text>15109433268@163.com</text>
 </view> -->
			<view class="tingzhi lv_30" @click="tingzhi">停止委托</view>
		</view>
	</view>
</template>

<script>
export default {
	onShow() {},
	onLoad(option) {
		this.item = JSON.parse(option.item);
	},
	data() {
		return {
			item: ''
		};
	},
	created() {},

	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		tingzhi() {
			this.$http
				.post({
					url: '/index/zixun/upentrust',
					data: {
						entrustid: this.item.entrustid,
						type: 'close'
					}
				})
				.then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: '操作成功',
							duration: 2000
						});
						setTimeout(function() {
							uni.navigateBack();
						}, 1000);
					}
				});
		}
	},
	filters: {
		timeStamp: function(value) {
			if (value == null) {
				return 'null';
			}
			var i = (value + '').length;
			while (i++ < 13) value = value + '0';
			value = Number(value);
			var date = new Date(value);
			//date.setTime(value);
			var month = date.getMonth() + 1;
			var hours = date.getHours();
			if (hours < 10) hours = '0' + hours;
			var minutes = date.getMinutes();
			if (minutes < 10) minutes = '0' + minutes;
			var time = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + hours + ':' + minutes;
			return time;
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.time {
	text-align: right;
	margin-top: 6rpx;
}
.weituo_body {
	padding: 22rpx 30rpx;
	border-bottom: 20rpx solid #f7f7f7;
}
.weituo_list {
	height: 96rpx;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	border-bottom: 2rpx solid #f7f7f7;
	justify-content: space-between;
}
.tingzhi {
	height: 80rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 20rpx solid #f7f7f7;
	border-top: 20rpx solid #f7f7f7;
}
</style>
