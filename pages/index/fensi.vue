<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">粉丝</view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
			<view class="fensi_body">
<view class="fensi_list" v-for="item in 5">
	<view class="fensi_list_left">
		<view class="fensi_list_left_tx">
			<image src="@/static/lsimg/tx.png" mode="" class="fensi_list_tx"></image>
			<image src="@/static/img/renzheng2.png" mode="" class="fensi_list_ren"></image>
		</view>
		<view class="fensi_list_left_r">
			<view class="hei_26 fensi_list_name">
				佘春鹏律师
			</view>
			<view class="hui_24">
				150个粉丝
			</view>
		</view>
	</view>
	<view class="fensi_list_right weiguan lv_26">
		+ 关注
	</view>
	<!-- <view class="fensi_list_right huanguan qian_26">
		<image src="@/static/img/huguan.png" mode=""></image> 互关
	</view> -->
</view>

		</view>
</view>


	</view>



</template>

<script>
	export default {

onLoad() {
	this.huoqu_list()
},
		onShow() {
		},

		data() {
			return {
                      zhuangtai:2,
					  jilu_list:[],
					  page:0,
					  is_all:false,
					  img_url: uni.getStorageSync('img_url'),
			}
		},
		created() {

		},
		//下拉刷新
		onPullDownRefresh: function() {
			this.page=0
			this.jilu_list=[]
			this.is_all=false
			this.huoqu_list()
		},
		// stopPullDownRefresh:function(){

		// },
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

xq(id){
	
	uni.navigateTo({
		url:'tiwen_list_xq?id='+id
	})
},
	// 获取提问记录列表
huoqu_list(){
	this.$http
		.post({
			url: '/mapi/consult/tiwenlist',
			data:{
				page: this.page
			}
		})
		.then(res => {
			if(res.data.consult<10){
				this.is_all=true
			}
			this.jilu_list=this.jilu_list.concat(res.data.consult);
			
		});
	
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
	.head {
		border-bottom: 2rpx solid #E8E8E8;
	}

.fensi_list_tx{
width: 100%;
height: 100%;
		
}
	
.fensi_list_left_tx{
	width: 94rpx;
	height: 94rpx;
	position: relative;
	margin-right: 18rpx;
}
.fensi_list_ren{
		width: 15rpx;
		height: 16rpx;
		background-color: #FFFFFF;
		border: solid 2rpx #ffffff;
		position: absolute;
		right: 6rpx;
		bottom: 0;border-radius: 100%;
}
.fensi_list_left{

	display: flex;
	position: relative;
}
	
.fensi_list_name{
	margin-bottom: 20rpx;
}
.fensi_list{
	padding:25rpx 11rpx 25rpx 0 ;
	border-bottom: 1px solid #E8E8E8;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.fensi_body{
	padding: 0 30rpx; 
}
.fensi_list_right{
	width: 118rpx;
		height: 52rpx;
	
	}
.weiguan{
		background-color: #ffffff;
		border-radius: 5rpx;
		border: solid 2rpx #0eb77e;
		line-height: 52rpx;
		text-align: center;
}
.huanguan{
	display: flex;
	align-items: center;
	justify-content: center;
		background-color: #e4e4e4;
		border-radius: 5rpx;
}
.huanguan image{
		width: 18rpx;
		height: 16rpx;
		margin-right: 6rpx;
}
</style>
