<template>
	
		<view class="">
			<view class="head">
				<view class="head_back" >
					<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
				</view>
				<view class="head_center hei_38_bold">在线咨询</view>
				<view class=" head_right hei_30_bold" >
					
				</view>
			</view>
			<view class="zi_body">
			

			<view class="xiaoxi_list">
				<view class="xiaoxi_item" v-for="item in xiaoxi_list" @click="go_chat(item.user_to.userid)">
					<view class="xiaoxi_item_left">
						<view class="xiaoxi_tx">
						<image :src=img_url+item.user_to.photourl mode=""></image>
						<text class="xiaoxi_num bai_20" v-if="item.messagecount>0">{{item.messagecount}}</text>
						</view>
						<view class="xiaoxi_item_left_name">
							<view class="hei_30_bold xiaoxi_item_name">
								{{item.user_to.mobile}}
							</view>
							<view class="qian_26 txt_over">
								<view class="" v-if="item.msgtype==1">
								<u-parse :content="replace_em(item.content)"></u-parse>	
									</view>
									<view class="" v-if="item.msgtype==2">
										[图片]
									</view>
							</view>
						</view>
					</view>
					<view class="xiaoxi_item_right qian_20">
					{{ item.addtime | timeStamp }}
					
					</view>
				</view>
				
				
			</view>
			
			</view>
			<view class="padding_bottom"></view>
			
			
		</view>
	
</template>

<script>
	
	import uParse from '@/components/feng-parse/parse.vue';
	export default {
        components:{
			uParse
			
		},
		created() {
		
		},
		onLoad() {
	
			
			
		},
		onShow() {
			this.huoqu_xiaoxilist()
		},
		data() {
			return {
				xiaoxi_list:[],
                page:0,
				is_all:false,
				img_url: uni.getStorageSync('img_url'),
			}
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
			go_chat(id){
				uni.navigateTo({
					url:'chat?userid='+id
				})
			},
			huoqu_xiaoxilist(){
				this.$http
					.post({
						url: '/mlawyerapi/consult/messagelist'
					})
					.then(res => {
						this.xiaoxi_list=res.data.messagelist
					});
			},
			replace_em(str) {
			    str = str.replace(/\</g, '&lt;');
			    str = str.replace(/\>/g, '&gt;');
			    str = str.replace(/\n/g, '<br/>');
			    str = str.replace(/\[em_([0-9]*)\]/g, '<img src="../../static/bkhumor-emoji/$1.gif" border="0" style="width:40rpx"/>');
			    return str;
			},
			navigateBack() {
				uni.navigateBack()
			},
			// 获取记录
			huoqu_list(){
				this.$http
					.post({
						url: '/mlawyerapi/consult/zixun_jilu',
						data:{
							page: this.page,
						}
					})
					.then(res => {
				
						this.jilu_list=this.jilu_list.concat(res.data.consult);
						if (res.data.consult.length < 10) {
							this.is_all = true;
						}
						
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
page{
	background-color: #F7F7F7;
}

.xiaoxi_list{
	background-color: #FFFFFF;
	margin-top: 20rpx;
}
.xiaoxi_item{
	padding: 30rpx 30rpx;
	display: flex;
	position: relative;
	justify-content: space-between;
}
.xiaoxi_item::before{
	content: '';
	display: inline-block;
	position: absolute;
	bottom: 0;
	right: 0;
	width: 80%;
	height: 2rpx;
	background-color: #EEEEEE;
}
.xiaoxi_item:last-child::before{
		content: none;
	}
.xiaoxi_item_left{
	display: flex;
}
.xiaoxi_tx{
	width: 84rpx;
	height:84rpx;
	margin-right: 30rpx;
	position: relative;
}
.xiaoxi_num{
	position: absolute;
	right: 0;
	top: -10rpx;
	background-color: #ff5267;
	border-radius: 100%;
	width:35rpx;
	height: 35rpx;
	padding: 2rpx;
	overflow:hidden; 
	text-overflow:ellipsis; 
	white-space:nowrap; 
	text-align: center;
}
.xiaoxi_tx image{
    width: 84rpx;
	height: 84rpx;
	border-radius: 100%;	
}
.xiaoxi_btn{
	width: 160rpx;
	height: 50rpx;
	background-color: #ffffff;
	border-radius: 25rpx;
	border: solid 1rpx #ff2b46;
	line-height: 50rpx;
	text-align: center;
	margin-top: 10rpx;
}
.xiaoxi_item_name{
	margin-bottom: 10rpx;
}
.txt_over{
	max-width: 450rpx;
	overflow:hidden; 
	text-overflow:ellipsis; 
	white-space:nowrap;
}
</style>
