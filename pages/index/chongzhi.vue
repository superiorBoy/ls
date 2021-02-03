<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">账户充值</view>
			<view class=" head_right hei_30_bold"><navigator url="../ls/liushui">明细</navigator></view>
		</view>

		<view class="zi_body ">
			<view class="tixian_top">
				<view class="jine">{{ yue }}</view>
				<view class="jine_xtx bai_30_bold">
					<image src="@/static/lsimg/tixian_icon.png" mode=""></image>
					账号余额
				</view>
			</view>
			<view class="tixian_body">
				<view class="hei_30_bold chong_txt">充值金额（元）</view>
				<view class="jine_shuru hei_30">
					￥
					<input type="number" value="" placeholder="请输入充值金额" class="hei_28" v-model="number" />
				</view>

				<view class="fangshi_txt hei_30_bold">支付方式</view>
				<view class="fangshi">
					<!-- <view class="fangshi_list" @click="radio(1)">
						<view class="fangshi_left hei_28">
							<image src="@/static/img/weixin_pay.png" mode=""></image>
							微信支付
						</view>
						<label class="radio"><radio value="1" :checked="zhifu == 1" /></label>
					</view> -->
					<view class="fangshi_list" @click="radio(2)">
						<view class="fangshi_left hei_28">
							<image src="../../static/img/zhifubao_pay.png" mode=""></image>
							支付宝支付
						</view>
						<label class="radio"><radio value="2" :checked="zhifu == 2" /></label>
					</view>
				</view>
				<button type="" class="tixian_btn bai_30" @click="save">确认充值</button>
			</view>
		</view>
 
	</view>
</template>

<script>
	
export default {
	data() {
		return {
			number: '',
			yue: '0.00',
			zhifu: '2',
			apppaytype:''
			
		};
	},
	created() {},
	onLoad(option) {
		this.huoqu_pay_fs()
		
	     
	},
	onShow() {
		this.number=''
		this.huoqu_yue()
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
         huoqu_pay_fs(){
			this.$http
				.post({
					url: '/mapi/index/getapppaytype'
				})
				.then(res => {
					if (res.code == 0) {
						
						this.apppaytype=res.data.zhan.apppaytype
					}
				});
		},
		all() {
			this.jine = this.yue;
		},
		huoqu_yue(){
			// 获取用户信息
			this.$http
				.post({
					url: '/mapi/user/user'
				})
				.then(res => {
					this.yue = res.data.user.rmb;
					
				});
		},
		save() {
			if (this.number == '') {
				uni.showToast({
					title: '请填写充值金额',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			
if(this.apppaytype==1){
	this.$http
	 		.post({
	 			url: '/mapi/user/chongzhih5',
						data:{
							paymoney:this.number
							}
	 		})
	 		.then(res => {
	 		var that=this
	 			if(res.code==0){
						
						   // #ifdef H5
						     window.open(''+res.data.response);
						    // #endif
						    // #ifdef APP-PLUS
						    plus.runtime.openURL(''+res.data.response)
						    // #endif
						
						// const div = document.createElement('div');
						// div.innerHTML = res.data.response;
						// document.body.appendChild(div);
						// document.forms[0].submit();
								
							// uni.requestPayment({
							//        provider: 'alipay',
							//        orderInfo:res.data.response,
							//        success: function(res) {
							//            console.log('success:' + JSON.stringify(res));
							// 		   uni.showToast({
							// 		   	title: '支付成功',
							// 		   	duration: 2000
							// 		   });
							// 		   that.number=''
							// 		   that.huoqu_yue()
							//        },
							//        fail: function(err) {
							// 		   uni.showToast({
							// 		   	title: '支付失败',
							// 		   	duration: 2000,
							// 			icon: 'none'
							// 		   });
							//            console.log('fail:' + JSON.stringify(err));
							//        }
							//    });
							
							
						}
						
						
						console.log(res)
						
	 		});
}else{
	this.app_pay()
}
 	   


			console.log(this.number, this.zhifu);
		},
		
		app_pay(){
			this.$http
			 		.post({
			 			url: '/mapi/user/chongzhi',
								data:{
									paymoney:this.number
									}
			 		})
			 		.then(res => {
			 		var that=this
			 			if(res.code==0){
									uni.requestPayment({
									       provider: 'alipay',
									       orderInfo:res.data.response,
									       success: function(res) {
									           console.log('success:' + JSON.stringify(res));
											   uni.showToast({
											   	title: '支付成功',
											   	duration: 2000
											   });
											   that.number=''
											   that.huoqu_yue()
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
								
								
								console.log(res)
								
			 		});
		},
		radio(i) {
			this.zhifu = i;
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}

.tixian_body {
	padding: 0 30rpx;
}

.tixian_top {
	height: 237rpx;
	background: url(../../static/img/chongzhi_bg.png) no-repeat;
	background-size: 100% 100%;
	text-align: center;
	padding-top: 75rpx;
	box-sizing: border-box;
}

.tixian_top image {
	width: 30rpx;
	height: 28rpx;
	margin-right: 13rpx;
}

.jine {
	font-size: 60rpx;
	color: #ffffff;
	font-weight: bold;
}

.tixian_btn {
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin: 260rpx 0 50rpx;
}

.jine_shuru {
	display: flex;
	border-bottom: 2rpx solid #f7f7f7;
	padding-bottom: 8rpx;
}
.chong_txt {
	margin: 30rpx 0 36rpx;
}
.fangshi_txt {
	margin: 70rpx 0 56rpx;
}
.fangshi_left image {
	width: 41rpx;
	height: 41rpx;
	margin-right: 20rpx;
}
.fangshi_list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 42rpx;
}
</style>
