<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">退款详情</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			
			<view class="tui_top hei_30" >
				<image :src="img_url+item.photourl" mode=""></image>
				<view class="">
					{{item.mobile}}
				</view>
			</view>
		<!-- 	<view class="tui_top hei_30" v-if="type==3">
				<image :src="img_url+item.user.photourl" mode=""></image>
				<view class="">
					{{item.user.mobile}}
				</view>
			</view> -->
			<view class="tui_center">
				
			
			<view class="tui_list hei_26">
				类型/时长 <text class="hei_30">{{type==1?'在线咨询':type==2?'电话咨询':''}}/
				<text v-if="type==1" style="margin-left: 0;">
				
				{{huoqu_name(item.baojiamode)?huoqu_name(item.baojiamode):item.zixunshicahng+'小时'}}
				</text>
				<text v-if="type==2" style="margin-left: 0;">
				{{huoqu_name(item.baojiamode)?huoqu_name(item.baojiamode):item.zixunshicahng+'分钟'}}
				</text>	
				
				</text>
			</view>
			<view class="tui_list hei_26">
				咨询地区 <text class="hei_30">{{item.province}}-{{item.city}}</text>
			</view>
			<view class="tui_list hei_26" v-if="fenlei&&fenlei[item.typeid].typename">
				咨询类型 <text class="hei_30">{{fenlei[item.typeid].typename}}</text>
			</view>
			</view>
			<view class="tui_jine">
			<view class="tui_list hei_26">
				退款金额 <text class="hei_30">￥{{xq.refundmoney}}</text>
			</view>
			<view class="tuiyuanyin hei_26">
				退款原因 <text class="hei_26">{{xq.refundreason}}</text>
			</view>
				</view>
				<view class=" hei_26 jindu">
					<text>退款进度</text> <text class="hei_30">{{xq.state==1?'退款中':xq.state==2?'同意退款':xq.state==3?'拒绝退款':'取消退款'}}</text>
				</view>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			xq:'',
			item:'',
			fenlei:'',
			zixun_baojia:''
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
				this.fenlei = res.data.type;
			});
		this.item=JSON.parse(option.item) 
		console.log(this.item)
		this.type=option.type
		this.huoqu_baijiatime()
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_baijiatime(){
			this.$http
				.post({
					url: '/mapi/index/lawyerservice'
				})
				.then(res => {
					this.zixun_baojia = res.data;
					this.huoqu_xq()
				});
		},
		huoqu_name(baojiamode){
			
			for (var value of this.zixun_baojia){
			if(value.baojiamode==baojiamode){
				return value.name
			}
			}
			
		},
         huoqu_xq(){
		  this.$http
		  	.post({
		  		url: '/mapi/consult/consultrefund',
		  		data:{
		  			consultid: this.item.consultid
		  		}
		  	})
		  	.then(res => {
		  		
		  		this.xq=res.data.consult_refund
		  
		  		
		  	});
	  },
		
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #f7f7f7;
}
page{
	background-color: #f2f2f2;
}
.tui_top{
	height: 256rpx;
	margin: 20rpx 0;
	background-color: #FFFFFF;
	text-align: center;
}
.tui_top image{
	width: 150rpx;
		height: 150rpx;
		border-radius: 100%;
		margin: 28rpx 0 10rpx;
}
.tui_center{
	background-color: #FFFFFF;
	padding: 0 30rpx;
}
.tui_list{
	height: 100rpx;
	line-height: 100rpx;
	border-bottom: 2rpx solid #f1f1f1;
}
.tui_list:last-child{
	border-bottom: none;
}
.tui_list text{
	margin-left: 37rpx;
}
.jindu{
	justify-content: space-between;
	background-color: #FFFFFF;
	height: 100rpx;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
}
.tui_jine{
	background-color: #FFFFFF;
	margin: 20rpx 0;
	padding: 0 30rpx;
}
.tuiyuanyin{
	padding: 30rpx 0;
	display: flex;
	align-items: center;
}
.tuiyuanyin text{
	margin-left: 37rpx;
	display: inline-block;
	width: 76%;
}
</style>
