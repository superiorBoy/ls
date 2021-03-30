<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">服务费</view>
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
				<view class="shuru_num">
					￥<text>{{xinxi.money}}</text>
				</view>
			</view>
			
		<view class="shuoming">
			<view class="qian_30 shuoming_txt">
				支付说明
			</view>
			<view class="hei_30">
				服务费-{{xinxi.information}}
			</view>
		</view>
		<view class="shijian qian_30">
			<text>创建时间</text>
			<text>2021-03-25 13:24:48</text>
		</view>	
			
			
			
			
			<view class="zhifu">
				<view class="zhifu_title hei_30">
					请选择支付方式
				</view>
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
			
			
		
			
			
			<view class="hongbao_bottom">
				<button type="" class="bai_30"  @click="fasong">立即付款</button>
				<view class="qian_28">
					付款后律师将为您提供更优质的服务
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
			layer:'',
			redid:'',
			xinxi:''
		};
	},
	created() {},
	onLoad(option) {
		this.lawyerid=option.lawyerid
		this.redid=option.redid
		this.huoqu_lawyer()
		this.huoqu_xq()
	},
	onShow() {
		
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		onInput(e) {
             this.jine = e.detail.value
		            },
					
		huoqu_xq(){
			this.$http
				.post({
					url: '/mapi/consult/red_envelope',
					data:{
						redid:this.redid,
						userid:this.lawyerid
					}
				})
				.then(res => {
					this.xinxi=res.data.red_envelope
					
				});
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
			  this.yue_pay()
		  }
		  
	  },
			
		app_pay() {
	
		},
		yue_pay(){
			this.$http
				.post({
					url: '/mapi/user/collectionaccount',
					data:{
						redid:this.redid
					}
				})
				.then(res => {
					
					if (res.code == 0) {
						uni.showToast({
							title: '' + res.message,
							duration: 2000,
							icon: 'none'
						});
						setTimeout(function(){
							uni.navigateBack();
						},1000)
					}
					
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
page{
	background-color: #F5F5F5;
}

.hongbao_body{
	
}
.hongbao_tx{
		width: 130rpx;
		height: 130rpx;
		border-radius: 100%;
		position: relative;
		margin: 0rpx  auto 20rpx;
		padding-top: 36rpx;
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
	background-color: #FFFFFF;
	padding: 0 30rpx;
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
	border-top: 2rpx solid #f7f7f7;
	/* padding: 0 40rpx 0 30rpx; */
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
		padding: 0 30rpx;
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
		color: #fd4259;
		text-align: center;
		margin: 60rpx 0 0rpx;
		padding-bottom: 110rpx;
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
			background-color: #0eb77e;
		border-radius: 44rpx;
		line-height: 88rpx;
		margin-bottom: 30rpx;
		margin-top: 60rpx;
}
.shuoming{
		height: 165rpx;
		border-top: 2rpx solid #ececec;
		border-bottom: 2rpx solid #ececec;
		background-color: #FFFFFF;
		padding: 0 30rpx;
}
.shuoming_txt{
	margin-bottom: 20rpx;
	margin-top: 30rpx;
}
.shijian{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 107rpx;
	background-color: #FFFFFF;
	padding: 0 30rpx;
}
.zhifu_title{
	line-height: 102rpx;
}
</style>
