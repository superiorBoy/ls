<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">网站公告</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">

<view class="gonggao_body">


		<view class="gonggao_list" v-for="item in gonggao_list" @click="xq(item.noticeid)">
			<view class="gonggao_list_left">
				<image src="@/static/img/gonggao_icon.png" mode=""></image>
				<view class="gonggao_list_left_txt">
					<view class="hei_30 biaoti">
						{{item.title}}
					</view>
					<view class="qian_24">
						{{ item.addtime | timeStamp }}
					</view>
				</view>
			</view>
		      <image src="@/static/lsimg/go_r.png" mode="" class="go"></image>
		</view>
	
</view>
			

			
		
		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {
				gonggao_list:[]
			}
		},
		created() {

		},
		onLoad(option) {

// 获取公告信息
		this.$http
			.post({
				url: '/mapi/user/notice',

			})
			.then(res => {
				this.gonggao_list = res.data.notice;
			});

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},
			xq(id) {
				uni.navigateTo({
					url: 'gonggao_xq?id=' + id,
				})
			}
		},
		filters: {
			timeStamp: function(value) {
				if(value==null){
					return 'null'
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
	}
</script>

<style>
	.head {
		border-bottom: 2rpx solid #F7F7F7;
	}

.gonggao_body{
	padding: 0 30rpx;
}
.gonggao_list{
	border-bottom: 2rpx solid #F7F7F7;
	padding: 28rpx 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.gonggao_list_left{
	display: flex;
}
.biaoti{
	margin-bottom: 14rpx;
	overflow:hidden;
	text-overflow:ellipsis; 
	white-space:nowrap; 
}
.gonggao_list_left image{
	width: 44rpx;
		height: 45rpx;
		margin-right: 16rpx;
		margin-top: 10rpx;
}
.go{
	width: 12rpx;
		height: 22rpx;
}
.gonggao_list_left{
	max-width: 90%;
}
.gonggao_list_left_txt{
	max-width: 90%;

}
</style>
