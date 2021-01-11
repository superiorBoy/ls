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
					可提现金额
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
			zhifu: '2'
		};
	},
	created() {},
	onLoad(option) {
		
		this.huoqu_yue()
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
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


 	     this.$http
	      		.post({
	      			url: '/mapi/user/chongzhi',
					data:{
						paymoney:this.number
						}
	      		})
	      		.then(res => {
	      		
	      			// if(res.code==0){
					
						uni.requestPayment({
						       provider: 'alipay',
						       orderInfo:res,
						       success: function(res) {
						           console.log('success:' + JSON.stringify(res));
								   
								   this.number=''
								   this.huoqu_yue()
						       },
						       fail: function(err) {
						           console.log('fail:' + JSON.stringify(err));
						       }
						   });
					// }
					
					
					console.log(res)
					
	      		});




			console.log(this.number, this.zhifu);
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
