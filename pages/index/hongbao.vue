<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/img/close.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">发红包</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="hongbao_body">
				
		
			<view class="hongbao_top">
				<view class="hongbao_tx" v-if="layer">
					<image :src="img_url+layer.photourl" mode="" class="tx"></image>
					<image src="../../static/img/renzheng2.png" mode="" class="ren"></image>
				</view>
				<view class="hongbao_top hei_30">
					{{layer.nickname}}律师
				</view>
			</view>
			
			<view class="jine">
				<text class="hei_34">发送金额</text>
				<view class="jine_right">
					<input type="number" value="" placeholder="0.00" class="hei_34" v-model="jine"/><text>元</text>
				</view>
			</view>
			
			<view class="neirong">
				<input type="text" value="" placeholder="输入您要发送红包的内容，最多10字以内" class="hei_34" v-model="beizhu"/>
			</view>
			<view class="zhifu">
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
							<text class="tuijian_txt hong_22">推荐</text>
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
				
			</view>
			
			
			<view class="shuru_num">
				￥<text>{{jine?jine:'0.00'}}</text>
			</view>
			
			
			<view class="hongbao_bottom">
				<button type="" class="bai_38" :class="jine>0?'hong_bg':''" @click="fasong">发红包</button>
				<view class="qian_28">
					红包未领取，将于24小时后自动退回
				</view>
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
			zhifu: '2',
			lawyerid:'',
			jine:'',
			beizhu:'',
			layer:''
		};
	},
	created() {},
	onLoad(option) {
		this.lawyerid=option.lawyerid
		this.huoqu_lawyer()
	},
	onShow() {
		
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		huoqu_lawyer(){
			this.$http
				.post({
					url: '/mapi/lawyer/lawyer',
					data:{
						lawyerid:this.lawyerid
					}
				})
				.then(res => {
					this.layer=res.data.lawyer
					
				});
		},
		
	  fasong(){
		  
		  if(this.zhifu==2){
			  console.log('zhifubao')
		  }else{
			  console.log('yue')
		  }
		  
	  },
			
		app_pay() {
	
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
page{
	background-color:#f5f5f5 ;
}
.head_back image{
		width: 41rpx;
		height: 40rpx;
}
.hongbao_body{
	padding: 0 30rpx;
}
.hongbao_tx{
		width: 130rpx;
		height: 130rpx;
		border-radius: 100%;
		position: relative;
		margin: 36rpx  auto 20rpx;
}
.hongbao_tx .tx{
	width: 100%;
	height: 100%;
	border-radius: 100%;
	vertical-align: middle;
}
.hongbao_tx .ren{
		width: 16rpx;
		height: 16rpx;
		background-color: #ffad2b;
		border: solid 2rpx #ffffff;
		position: absolute;
		bottom: 10rpx;
		right: 10rpx;
		border-radius: 100%;
}
.hongbao_top{
	text-align: center;
	
}
.jine{
	height: 110rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		margin: 30rpx 0 40rpx;
		justify-content: space-between;
		padding: 0 30rpx;
}
.jine_right{
	display: flex;
	align-items: center;
	
	}
.jine_right input{
	text-align: right;
	vertical-align: middle;
	margin-right: 18rpx;
	height:110rpx;
	line-height: 110rpx;
}	
.neirong{
		height: 110rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		padding: 30rpx 30rpx;
		box-sizing: border-box;
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
	padding: 0 40rpx 0 30rpx;
}
.tuijian_txt {
	width: 62rpx;
	height: 30rpx;
	background-color: #ffffff;
	border-radius: 2rpx;
	border: solid 1rpx #fd4358;
	display: inline-block;
	line-height: 30rpx;
	text-align: center;
	margin-left: 10rpx;
}
.kaitong_btn {
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin-top: 80rpx;
}
.zhifu {
	background-color: #FFFFFF;
	margin: 40rpx 0 0rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
}
.xuanzhong {
	border: solid 1rpx #f33c3c !important;
	position: relative;
}

.xuanzhong::before {
	content: '';
	display: inline-block;
	position: absolute;
	bottom: 0;
	right: 0;
	width: 58rpx;
	height: 54rpx;
	background: url(../../static/lsimg/vip_xuanzhong.png) no-repeat;
	background-size: 100% 100%;
}
.shuru_num{
		font-size: 66rpx;
		color: #333333;
		text-align: center;
		margin: 90rpx 0 190rpx;
}
.shuru_num text{
	font-size: 100rpx;
}
.hongbao_bottom{
	text-align: center;
	padding-bottom: 50rpx;
}
.hongbao_bottom button{
		height: 88rpx;
		background-color: #f48c99;
		border-radius: 44rpx;
		line-height: 88rpx;
		margin-bottom: 90rpx;
}
.hong_bg{
	background-color: #f43a51 !important;
}
</style>
