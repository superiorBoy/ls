<template>
	
		<view >
			<view class="head">  
			  <view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
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
				
				
				<view class="jiedan_item" v-for="item in list">
					<view class="jiedan_item_left">
						<image :src="img_url+item.photourl" mode=""></image>
						<view class="jiedan_item_left_name">
							<view class="hei_26 jiedan_item_name">
								{{item.phone}}
							</view>
							<view class="qian_22">
								{{ item.addtime | timeStamp }}
							</view>
						</view>
					</view>
					<view class="jiedan_item_right hong_26">
						<view class=""v-if="active==0">
							{{item.paymoney}}元/{{item.zixunshicahng==24?'1天':item.zixunshicahng==72?'3天':item.zixunshicahng==720?'1个月':item.zixunshicahng+'小时'}}
						</view>
						<view class=""v-if="active==1" >
							{{item.paymoney}}元/{{item.zixunshicahng==24?'1天':item.zixunshicahng==72?'3天':item.zixunshicahng==720?'1个月':item.zixunshicahng+'分钟'}}
						</view>
						<view class="jiedan_btn" @click="jiedan(item)">
							接单
						</view>
					</view>
				</view>
				
				
			</view>
			
			</view>
			<!-- <view class="padding_bottom"></view> -->
			<!-- <tabBar :currentPage="currentPage" ref="ls_mainindex"></tabBar> -->
			
		</view>
	
</template>

<script>
	// import tabBar from '@/components/tabbar/tabbar.vue';
	
	export default {
		components:{
			// tabBar
		},
		created() {
		
		},
		onHide() {
			
			// #ifdef APP-PLUS
			uni.closeSocket();
			// #endif
			
		},
		onShow() {
			this.list=[],
			this.huoqu_user()
			this.$http
				.post({
					url: '/lawyer/login/islogin'
				})
				.then(res => {
					if (res.data.user != '') {
					
					} else {
						this.is_login = false;
						
					}
				});
		},
		data() {
			return {
				img_url: uni.getStorageSync('img_url'),
				currentPage:'ls/index',
				tabs:['在线咨询','电话咨询'],
				active:0,
				weidu:0,
				page:0,
				is_all:false,
				list:[]
			}
		},
		//下拉刷新
		onPullDownRefresh: function() {
			this.page=0,
			this.is_all=false,
			this.list=[],
			this.jiedan_list()
		
		},
		methods: {
			navigateBack() {
				uni.navigateBack();
			},
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
					this.jiedan_list()
				}
			},
			huoqu_user() {
				// 获取用户信息
				this.$http
					.post({
						url: '/mlawyerapi/user/getlawyer'
					})
					.then(res => {
						if(res.data.user.isreal==2){
							uni.navigateTo({
								url:'shiming_renzheng'
							})
						}else if(res.data.user.iszhiye==2){
							uni.navigateTo({
								url:'zhiye_renzheng'
							})
						}else{
							// this.$http
							// 	.post({
							// 		url: '/mlawyerapi/consult/messagecount'
							// 	})
							// 	.then(res => {
							// 		this.weidu=res.data.messagecount
									
							// 	});
								this.jiedan_list()
							
						}
					});
			},
			
			jiedan_qiehuan(index){
				this.active=index
				this.page=0,
				this.is_all=false,
				this.list=[],
				this.jiedan_list()
			},
			jiedan_list(){
				this.$http
					.post({
						url: '/mlawyerapi/consult/qiangdanlist',
						data:{
							page:this.page,
							type:this.active+1
							
						}
					})
					.then(res => {
						
						this.list=this.list.concat(res.data.consult)
						if (res.data.consult.length < 10) {
							this.is_all = true;
						}
					})
			},
			jiedan(item){
				
				uni.navigateTo({
					url:'jiedan_xq?item='+JSON.stringify(item)
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
