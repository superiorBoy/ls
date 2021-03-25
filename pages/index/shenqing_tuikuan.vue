<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">申请退款</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			
			<view class="tui_top hei_30" v-if="item.photourl">
				<image :src="img_url+item.photourl" mode=""></iimage>
				<view class="hei_30_bold">
					{{item.nickname}}律师
				</view>
			</view>
			<view class="tui_center">
				
			
			<view class="tui_list hei_26">
				类型/时长 <text class="hei_30">{{type==1?'在线咨询':type==2?'电话咨询':'提问'}}/
			<text v-if="type==1" style="margin-left: 0;">{{item.zixunshicahng==24?'1天':item.zixunshicahng==72?'3天':item.zixunshicahng==720?'1个月':item.zixunshicahng+'小时'}}</text>	
			<text v-if="type==2" style="margin-left: 0;">{{item.baojiamode=='zhineng_dianhua'?item.zixunshicahng+'分钟':item.baojiamode=='phoneprice'?'20分钟':item.baojiamode=='dianhua1'?'1天':item.baojiamode=='dianhua3'?'3天':item.baojiamode=='dianhua30'?'1月':''}}</text>	
			<text v-if="type==3" style="margin-left: 0;">1次</text>
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
				退款金额 <text class="hei_30">￥{{item.paymoney}}</text> <text class="qian_22 tui_xiugai">退款不可修改，最多￥{{item.paymoney}}</text>
			</view>
			<view class="tuiyuanyin hei_26">
				退款原因 
			</view>
			<textarea value="" placeholder="请描述退款原因，例如律师忙、联系不到律师等。" class="yuanyin hei_26" v-model="shuru"/>
				</view>
				
				<view class="tui_btn">
					<button type="" class="bai_30" @click="tijiao">提交申请</button>
					<view class="qian_24">
						退款审核通过后，资金将原路返回到用户的支付账户
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
			shuru:'',
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
		this.type=option.type
		console.log(this.item)
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		tijiao(){
			if(this.shuru==''){
				uni.showToast({
					title: '请输入退款原因',
					duration: 2000,
					icon:'none'
				});
				return false
			}
			this.$http
				.post({
					url: '/mapi/consult/apply_refund',
					data:{
						consultid: this.item.consultid,
						reason:this.shuru
					}
				})
				.then(res => {
					uni.showToast({
						title: ''+res.message,
						duration: 2000,
						icon:'none'
					});
					if(res.code==0){
						setTimeout(function(){
										uni.navigateBack()
						},1000) 
					}
			
					
				});
		},


		
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #f7f7f7;
}

.tui_top{
	height: 256rpx;
	
	background-color: #FFFFFF;
	text-align: center;
	border-bottom: 20rpx solid #f2f2f2;
	border-top: 20rpx solid #f2f2f2;
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
	padding: 0 30rpx ;
}
.tui_jine{
	background-color: #FFFFFF;
	margin: 20rpx 0;
	padding: 0 30rpx 20rpx;
	
	border-top: 20rpx solid #f2f2f2;
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
	margin-top: 50rpx;
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
.yuanyin{
	width: 100%;
	height: 220rpx;
		background-color: #fafafa;
		border-radius: 5rpx;
		padding: 20rpx;
		box-sizing: border-box;
}
</style>
