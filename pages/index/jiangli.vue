<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">我的奖励</view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
            <view class="jiangli_list">
            	<view class="jiangli_item" v-for="item in jiangli_list">
            		<view class="jiangli_item_top">
            			<text class="hei_28">{{item.incode}}</text>
						<text class="hong_30">+{{item.money}}</text>
            		</view>
					<view class="jiangli_item_bittom">
						<text class="hui_26">{{item.explain}}</text>
						<text class="qian_24">{{ item.addtime | timeStamp }}</text>
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
			jiangli_list:[],
			page:0,
			is_all:false
		};
	},
	onLoad() {
		this.huoqu_list()
	},
	created() {},

	methods: {
		//上拉加载
		onReachBottom() {
			if (this.is_all) {
				uni.showToast({
					title: '没有更多内容了',
					duration: 2000,
					icon: 'none'
				});
				uni.stopPullDownRefresh();
				return false;
			} else {
				this.page++;
				this.huoqu_list();
			}
		},
		navigateBack() {
			uni.navigateBack();
		},
	    huoqu_list(){
			this.$http
				.post({
					url: '/mapi/extension/rewardlist',
					data:{
						page:this.page
					}
				})
				.then(res => {
				
					this.jiangli_list = this.jiangli_list.concat(res.data.list);
					if(res.data.list.length<10){
						this.is_all=true
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
