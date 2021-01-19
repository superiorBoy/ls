<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">支付</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="zhineng_pay_title qian_30">
				智能匹配服务
			</view>
			<view class="pay_top">
				
				<view class="pay_list">
					<text class="qian_30">服务项目</text>
					<text class="hei_30">{{type==1?'在线咨询':'电话咨询'}}</text>
				</view>
			   <view class="pay_list">
			   	<text class="qian_30">服务时长</text>
			   	<text class="hei_30">{{type==1?'1小时':'20分钟'}}</text>
			   </view>
	            <view class="pay_list">
	            	<text class="qian_30">支付金额</text>
	            	<text class="hong_30">￥29.00</text>
	            </view>
			</view>

			<view class="fangshi_txt qian_30">请选择支付方式</view>
			<view class="fangshi">
				<!-- <view class="fangshi_list_pay" @click="radio(1)">
					<view class="fangshi_left hei_28">
						<image src="@/static/img/pay_weixin.png" mode="" style="width:36rpx ;height: 31rpx;"></image>
						微信支付
						<text class="tuijian hong_22">推荐</text>
					</view>
					<label class="radio"><radio value="1" :checked="zhifu == 1" /></label>
				</view> -->
				<view class="fangshi_list_pay" @click="radio(2)">
					<view class="fangshi_left hei_28">
						<image src="@/static/img/pay_zhifubao.png" mode="" style="width: 39rpx;height: 39rpx;"></image>
						支付宝支付
					</view>
					<label class="radio"><radio value="2" :checked="zhifu == 2" /></label>
				</view>
				<view class="fangshi_list_pay" @click="radio(3)">
					<view class="fangshi_left hei_28">
						<image src="@/static/img/yue_pay.png" mode="" style="width:36rpx ;height: 31rpx;"></image>
						余额支付
					</view>
					<label class="radio"><radio value="3" :checked="zhifu == 3" /></label>
				</view>
			</view>
			<view class="pay_btn">
				<button type="" class="tixian_btn bai_30" @click="save">支付</button>
			</view>
		</view>
	</view>
</template>

<script>
	
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			type:1
		};
	},

	created() {
	},
	onLoad(option) {
	 this.type=option.type
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},


		radio(i) {
			this.zhifu = i;
		},
		zfb_pay(consultid){
			this.$http
				.post({
					url: '/mapi/consult/pay',
					data: {
						consultid:consultid,
						type:this.type,
						lawyerid:this.lawyerid,
						information:this.neirong
					}
				})
				.then(res => {
					if (res.code == 0) {
						uni.requestPayment({
						       provider: 'alipay',
						       orderInfo:res.data.response,
						       success: function(res) {
						           console.log('success:' + JSON.stringify(res));
								   uni.showToast({
								   	title: '支付成功',
								   	duration: 2000
								   });
								   
								  setTimeout(function(){
								  				uni.navigateBack()
								  },2000) 
								   
						       },
						       fail: function(err) {
								   uni.showToast({
								   	title: '支付失败',
								   	duration: 2000,
									icon: 'none'
								   });
						           console.log('fail:' + JSON.stringify(err));
						       }
						   });
					}
				});
		},
		yue_pay(consultid){
			this.$http
				.post({
					url: '/index/consult/accountpay',
					data: {
						consultid:consultid,
		
					}
				})
				.then(res => {
					if (res.code == 0) {
					uni.showToast({
						title: '支付成功',
						duration: 2000
											
					});
						
					}
				});
		},
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}

.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.tixian_btn {
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin: 125rpx 0 50rpx;
}

.fangshi_txt {
	height: 103rpx;
	line-height: 103rpx;
	padding: 0 30rpx;
}

.fangshi_left {
	display: flex;
	align-items: center;
}

.fangshi_left image {
	margin-right: 20rpx;
}

.fangshi_list_pay {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100rpx;
	border-bottom: 2rpx solid #f7f7f7;
}
.zhineng_pay_title{
	line-height: 98rpx;
	padding-left: 30rpx;
}
.pay_list{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100rpx;
	border-bottom: 2rpx solid #f7f7f7;
	background-color: #FFFFFF;
	padding: 0 30rpx;
}



.fangshi {
	background-color: #ffffff;
	padding: 0 30rpx;
}

.tuijian {
	border: 2rpx solid #fd4358;
	width: 62rpx;
	height: 30rpx;
	display: inline-block;
	line-height: 30rpx;
	text-align: center;
	margin-left: 7rpx;
}
.pay_btn {
	padding: 0 30rpx;
}



</style>
