<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">成功案例</view>
			<view class=" head_right hei_30_bold" >
				<text @click="add">上传案例</text>
			</view>
		</view>

		<view class="zi_body ">
	
			
		<view class="anli_list" v-for="(item,index) in anli_list">
			<view class="anli_list_top hui_26">
				<text class="zhuangtai bai_24">{{item.jieguo}}</text>
				{{item.title}}
			</view>
			<view class="laiyuan qian_24">
				来源：<text class="hong_24">{{item.daili}}</text>
			</view>
			<view class="anli_list_bottom">
				<text class="qian_24">{{ item.addtime | timeStamp }}</text>
				<button type="" class="bai_26">详情</button>
			</view>
		</view>
		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {
					page:0,
					is_all:false,
					anli_list: [],
				
			}
		},
		created() {

		},
		onLoad(option) {
           
			
		},
		onShow() {
			this.huoqu_list()
			uni.removeStorageSync('neirong')
		},
		//下拉刷新
		onPullDownRefresh: function() {
			this.page=0
			this.anli_list=[]
			this.is_all=false
			this.huoqu_list()
			
		},
		methods: {
			//上拉加载
			onReachBottom() {
			  if(this.is_all){
				uni.showToast({
					title: '没有更多内容了',
					duration: 2000,
					icon: "none"
				});
				uni.stopPullDownRefresh();
				return false
			}else{
				this.page++
				this.huoqu_list()
			}
			},
			navigateBack() {
				uni.navigateBack()
			},
	      huoqu_list(){
				this.$http.post({
						url: '/mlawyerapi/lawyer/successanli',
						data: {
							page: this.page,
						}
					})
					.then(res => {
						this.anli_list=this.anli_list.concat(res.data.anli);
					});
			},
			add() {
				uni.navigateTo({
					url:'up_anli'
				})
			},

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
	page{
		background-color: #F8F8F8;
	}
.anli_list{
	padding: 20rpx 30rpx 30rpx;
	background-color: #FFFFFF;
	margin-bottom: 20rpx;
}
.anli_list:first-child{
	margin-top: 20rpx;
}
.anli_list_top{
	line-height: 40rpx;
}
.anli_list_bottom{
	
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.anli_list_bottom button{
	width: 160rpx;
	margin: 0;
		height: 56rpx;
		background-color: #f43a51;
		border-radius: 28rpx;
		line-height: 56rpx;
}
.zhuangtai{
	display: inline-block;
	height: 36rpx;
		background-color: #0eb77e;
		border-radius: 2rpx;
		margin-right: 10rpx;
		padding: 2rpx 8rpx;
		line-height: 36rpx;
}
.laiyuan{
	margin: 10rpx 0 20rpx;
}
</style>
