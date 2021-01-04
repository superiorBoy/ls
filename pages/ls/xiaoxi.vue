<template>
	
		<view class="">
			<view class="head">  
			  <view class="head_back"></view> 
			  <view class="head_center hei_38_bold">消息</view> 
			  <view class="head_right"></view> 
			</view>
			<view class="zi_body">
			
			<view class="xiaoxi_top">
				<view class="xiaoxi_top_list">
					<view class="xiaoxi_top_list_left">
						<view class="xiaoxi_tx">
						<image src="../../static/lsimg/xiaoxi_tuisong.png" mode=""></image>
						</view>
						<view class="xiaoxi_top_list_left_txt">
							<view class="hei_30_bold top_txt">
								推送消息
							</view>
							<view class="qian_26">
								有用户支付成功向您提出问题，前去解答
							</view>
						</view>
					</view>
					<view class="top_shijian qian_20">
						10-16
					</view>
				</view>
				<view class="xiaoxi_top_list">
					<view class="xiaoxi_top_list_left">
						<view class="xiaoxi_tx">
						<image src="../../static/lsimg/xiaoxi_tongzhi.png" mode=""></image>
						</view>
						<view class="xiaoxi_top_list_left_txt">
							<view class="hei_30_bold top_txt">
								系统通知
							</view>
							<view class="qian_26">
								您有一张优惠券即将过期
							</view>
						</view>
					</view>
					<view class="top_shijian qian_20">
						10-16
					</view>
				</view>
				<view class="xiaoxi_top_list">
					<view class="xiaoxi_top_list_left">
						<view class="xiaoxi_tx">
						<image src="../../static/lsimg/xiaoxi_kefu.png" mode=""></image>
							
						</view>
						<view class="xiaoxi_top_list_left_txt" @click="go_kefu()">
							<view class="hei_30_bold top_txt">
								客服消息
							</view>
							<view class="qian_26">
								有一条案件委托信息，请查看
							</view>
						</view>
					</view>
					<view class="top_shijian qian_20">
						10-16
					</view>
				</view>
			</view>
			<view class="xiaoxi_list">
				<view class="xiaoxi_item" v-for="item in xiaoxi_list" @click="go_chat(item.user_to.userid)">
					<view class="xiaoxi_item_left">
						<view class="xiaoxi_tx">
						<image :src=img_url+item.user_to.photourl mode=""></image>
						<text class="xiaoxi_num bai_20" v-if="item.messagecount>0">{{item.messagecount}}</text>
						</view>
						<view class="xiaoxi_item_left_name">
							<view class="hei_30_bold xiaoxi_item_name">
								{{item.user_to.nickname}}
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
			<tabBar :currentPage="currentPage"></tabBar>
			
		</view>
	
</template>

<script>
	import uParse from '@/components/feng-parse/parse.vue';
	import tabBar from '@/components/tabbar/tabbar.vue';
	
	export default {
		components:{
			uParse,
			tabBar
		},
		created() {
		
		},
		onShow() {
			this.huoqu_xiaoxilist()
		},
		data() {
			return {
				currentPage:'ls/xiaoxi',
				tabs:['图文咨询','电话咨询'],
				img_url: uni.getStorageSync('img_url'),
				active:'0',
				xiaoxi_list:[]
			}
		},
		methods: {
			xiaoxi_qiehuan(index){
				this.active=index
				
			},
			replace_em(str) {
			    str = str.replace(/\</g, '&lt;');
			    str = str.replace(/\>/g, '&gt;');
			    str = str.replace(/\n/g, '<br/>');
			    str = str.replace(/\[em_([0-9]*)\]/g, '<img src="../../static/bkhumor-emoji/$1.gif" border="0" style="width:40rpx"/>');
			    return str;
			},
			go_chat(id){
				uni.navigateTo({
					url:'chat?userid='+id
				})
			},
			go_kefu(){
				uni.navigateTo({
					url:'../index/zaixian_wen?user=7'
					
				});
			},
			huoqu_xiaoxilist(){
				this.$http
					.post({
						url: '/mlawyerapi/consult/messagelist'
					})
					.then(res => {
						this.xiaoxi_list=res.data.messagelist
					});
				
				
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
	page{
		background-color: #F7F7F7;
	}
	.xiaoxi_top{
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
		
	}
	.xiaoxi_top_list{
		padding: 30rpx 30rpx;
		display: flex;
		justify-content: space-between;
		position: relative;
	}

.xiaoxi_top_list::before{
	content: '';
	display: inline-block;
	position: absolute;
	bottom: 0;
	right: 0;
	width: 80%;
	height: 2rpx;
	background-color: #EEEEEE;
}
	.top_txt{
		margin-bottom: 10rpx;
	}
	.xiaoxi_top_list:last-child{
		margin-bottom: 0;
	}
	.xiaoxi_top_list:last-child::before{
		content: none;
	}
	.xiaoxi_top_list_left{
		display: flex;
	}
	
.xiaoxi_top_list_left image{
		width: 84rpx;
		height: 84rpx;
		margin-right: 30rpx;
}
.xiaoxi_list{
	background-color: #FFFFFF;
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
	line-height: 35rpx;
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
