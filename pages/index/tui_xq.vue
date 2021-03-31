<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">退款详情</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			
			<view class="tui_top hei_30" v-if="item.photourl">
				<image :src="img_url+item.photourl" mode=""></image>
				<view class="hei_30_bold">
					{{item.nickname}}律师
				</view>
			</view>
			<view class="tui_center">
				
			
			<view class="tui_list hei_26">
				类型/时长 <text class="hei_30">{{type==1?'在线咨询':type==2?'电话咨询':''}}/
				<text v-if="type==1" style="margin-left: 0;">{{item.zixunshicahng==24?'1天':item.zixunshicahng==72?'3天':item.zixunshicahng==720?'1个月':item.zixunshicahng+'小时'}}</text>
				<text v-if="type==2" style="margin-left: 0;">{{item.baojiamode=='zhineng_dianhua'?item.zixunshicahng+'分钟':item.baojiamode=='phoneprice'?'20分钟':item.baojiamode=='dianhua1'?'1天':item.baojiamode=='dianhua3'?'3天':item.baojiamode=='dianhua30'?'1月':''}}</text>	
				<!-- <text v-if="type==3" style="margin-left: 0;">1次</text> -->
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
				退款金额 <text class="hei_30">￥{{xq.refundmoney}}</text> <text class="qian_22 tui_xiugai">退款不可修改，最多￥{{xq.refundmoney}}</text>
			</view>
			<view class="tuiyuanyin hei_26">
				退款原因 <text class="hei_26">{{xq.refundreason}}</text>
			</view>
				</view>
				<view class=" hei_26 jindu">
					<text>退款进度</text> <text class="hei_30">{{xq.state==1?'退款中':xq.state==2?'同意退款':xq.state==3?'拒绝退款':'取消退款'}}</text>
				</view>
				<view class="tui_btn">
					<button type="" class="bai_30" @click="quxiao">取消退款</button>
					<view class="qian_24">
						退款审核通过后，资金将返回您的账户
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
			xq:'',
			item:'',
			fenlei:''
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
		this.huoqu_xq()
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
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
	  quxiao(){
		  this.$http
		  	.post({
		  		url: '/mapi/consult/cancel_refund',
		  		data:{
		  			refundid: this.xq.refundid
		  		}
		  	})
		  	.then(res => {
		  		
		  		if(res.code==0){
					uni.showToast({
						title: ''+res.message,
						duration: 2000,
						icon:'none'
					});
		  			setTimeout(function(){
		  			uni.navigateBack()
		  			},1000) 
		  		}
		  
		  		
		  	});
	  }
		
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
.tui_xiugai{
	margin-left: 58rpx;
}
.tui_btn{
	background-color: #FFFFFF;
	padding: 0 30rpx;
	height: 250rpx;
	margin-top: 100rpx;
	padding-top: 50rpx;
	box-sizing: border-box;
	text-align: center;
}
.tui_btn button{
		height: 88rpx;
		background-color: #0eb77e;
		border-radius: 44rpx;
		margin-bottom: 40rpx;
		line-height: 88rpx;
}
</style>
