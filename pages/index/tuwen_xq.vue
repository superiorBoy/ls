<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">图文详情</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="zhishi_xq">
				<view class="xq_title hei_30_bold">{{ tuwen.tuwen.title }}</view>
				<view class="xq_top qian_24">
					<view class="xq_top_item1">
						<image src="@/static/img/biaoqian.png" mode=""></image>
						{{ type_list[tuwen.tuwen.typeid].typename }}
					</view>
					<view class="xq_top_item2">
						<image src="@/static/img/changshi_time.png" mode=""></image>
						{{ tuwen.tuwen.addtime | timeStamp }}
					</view>
					<view class="xq_top_item3">
						<image src="@/static/img/changshi_liulan.png" mode=""></image>
						{{ tuwen.tuwen.readnum }}浏览
					</view>
				</view>
				<view class="lvshi">
					<view class="lvshi_left">
						<image :src="img_url + tuwen.lawyer.photourl" mode=""></image>
						<view class="lvshi_left_r">
							<view class="hei_26 ls_name">{{ tuwen.lawyer.nickname }}律师</view>
							<view class="hui_24">{{ tuwen.lawyer.lvsuo }}</view>
						</view>
					</view>
					<button type="" class="bai_24" @click="go_chat(tuwen.lawyer.lawyerid)">咨询TA</button>
				</view>

				<view class="zhengwen hei_26">
					<image :src="img_url + tuwen.tuwen.pic" mode="widthFix"></image>
					<view class="zhengwen_body">{{ tuwen.tuwen.information }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			tuwen: '',
			type_list: []
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
				this.type_list = res.data.type;

				this.$http
					.post({
						url: '/mapi/lawyer/tuwen_xq',
						data: {
							lytuwenid: option.lytuwenid
						}
					})
					.then(res => {
						if (res.code == 0) {
							this.tuwen = res.data;
						}
					});
			});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		tochat(id,mobile) {
			uni.navigateTo({
				url: 'zaixian_wen?user=' + id+'&mobile='+mobile
			});
		},
		go_chat(id){
			uni.navigateTo({
				url:'chat?lawyerid='+id
			})
		},
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
	border-bottom: 2rpx solid #f7f7f7;
}
.zhishi_xq {
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.xq_title {
	margin: 15rpx 0;
}
.xq_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.xq_top_item1 image {
	width: 21rpx;
	height: 23rpx;
	margin-right: 10rpx;
}
.xq_top_item2 image {
	width: 22rpx;
	height: 23rpx;
	margin-right: 10rpx;
}
.xq_top_item3 image {
	width: 30rpx;
	height: 22rpx;
	margin-right: 10rpx;
}
.lvshi {
	display: flex;
	justify-content: space-between;
	height: 150rpx;
	align-items: center;
	background-color: #f7f7f7;
	margin: 20rpx 0;
	padding: 0 20rpx;
	box-sizing: border-box;
}
.ls_name {
	margin-bottom: 10rpx;
}
.lvshi_left {
	display: flex;
}
.lvshi button {
	width: 150rpx;
	height: 50rpx;
	background-color: #0eb77e;
	margin: 0;
	padding: 0;
	line-height: 50rpx;
}
.lvshi_left image {
	width: 80rpx;
	height: 80rpx;
	border-radius: 100%;
	margin-right: 15rpx;
}

.zhaiyao {
	margin: 35rpx 0;
	background-color: #eaeaea;
	line-height: 40rpx;
	padding: 36rpx 30rpx;
}
.zhengwen {
	line-height: 40rpx;
	padding-bottom: 30rpx;
}
.zhengwen image {
	width: 100%;
}
.xq_zhengwen_title {
	margin: 10rpx 0;
}
</style>
