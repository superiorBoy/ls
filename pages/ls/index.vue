<template>
	
		<view >
			<view class="head">  
			  <view class="head_back"></view> 
			  <view class="head_center hei_38_bold">接单</view> 
			  <view class="head_right"></view> 
			</view>
			<view class="zi_body">
			<view class="jiedan_tab qian_30_bold">
				<view :class="['jiedan_tab_item' ,index==active?'jiedan_tab_item_active': '']"  v-for="(tab,index) in tabs" @click="jiedan_qiehuan(index)">
					{{tab}}
				</view>
			</view>
			<view class="jiedan_list">
				
				
				<view class="jiedan_item" v-for="index in 10">
					<view class="jiedan_item_left">
						<image src="../../static/lsimg/jiedan_tx.png" mode=""></image>
						<view class="jiedan_item_left_name">
							<view class="hei_26 jiedan_item_name">
								18147514420
							</view>
							<view class="qian_22">
								2020-10-14 11:42:08
							</view>
						</view>
					</view>
					<view class="jiedan_item_right hong_26">
						<view class="">
							20分钟/98元
						</view>
						<view class="jiedan_btn" @click="jiedan">
							接单
						</view>
					</view>
				</view>
				
				
			</view>
			
			</view>
			<view class="padding_bottom"></view>
			<tabBar :currentPage="currentPage"></tabBar>
			
		</view>
	
</template>

<script>
	import tabBar from '@/components/tabbar/tabbar.vue';
	
	export default {
		components:{
			tabBar
		},
		created() {
		
		},
		onShow() {
			
		},
		data() {
			return {
				currentPage:'ls/index',
				tabs:['图文咨询','电话咨询'],
				active:'0'
			}
		},
		methods: {
			jiedan_qiehuan(index){
				this.active=index
				
			},
			jiedan(){
				uni.navigateTo({
					url:'jiedan_xq'
				})
			}
		}
	}
</script>

<style>
.jiedan_tab{
	width: 361rpx;
		height: 74rpx;
		background-color: #f8f8f8;
		border-radius: 37rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		
		justify-content: center;
}
.jiedan_tab_item{
	line-height: 63rpx;
	text-align: center;
	width: 170rpx;
	height: 63rpx;
}
.jiedan_tab_item_active{
		background-color: #f43a51;
		border-radius: 31rpx;
		color: #FFFFFF;
}
.jiedan_item{
	padding: 30rpx 30rpx;
	border-bottom: 2rpx #e8e8e8 solid; 
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.jiedan_item_left{
	display: flex;
}
.jiedan_item_left image{
	width: 82rpx;
		height: 81rpx;
		border-radius: 100%;
		margin-right: 19rpx;
}
.jiedan_btn{
	width: 160rpx;
		height: 50rpx;
		background-color: #ffffff;
		border-radius: 25rpx;
		border: solid 1rpx #ff2b46;
		line-height: 50rpx;
		text-align: center;
		margin-top: 10rpx;
}
.jiedan_item_name{
	margin-bottom: 10rpx;
}
</style>
