<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">悬赏</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="xuanshang_title qian_30">
				<image src="@/static/img/xuanshang_dd.png" mode="" style="width: 24rpx;height: 29rpx;"></image>
				订单信息
			</view>
			<view class="pay_top">
				<view class="pay_list">
					<text class="qian_30">咨询地区</text>
					<text class="hei_30">{{data.province}}-{{data.city}}-{{data.area}}</text>
				</view>
				<view class="pay_list" v-if="fenlei_arry.length>0">
					<text class="qian_30">咨询类型</text>
					<text class="hei_30">{{fenlei_arry[data.typeid].typename}}</text>
				</view>
				<!-- <view class="pay_list">
					<text class="qian_30">手机号码</text>
					<input type="text" value="" v-model="phone" placeholder="请输入" class="hei_30" />
				</view> -->
				<view class="pay_list wen_list">
					<view class="qian_30 wen_list_top">咨询内容</view>
					<view class="hei_30 wen_neirong "> {{data.information}}</view>
				</view>
			</view>
		</view>

		<view class="xuanshang_title qian_30">
			<image src="@/static/img/xuangshang_jin.png" mode="" style="width: 28rpx;height: 28rpx;"></image>
			请选择悬赏金额
		</view>

		<view class="jine_list qian_30">
			<view class="" v-for="(item, index) in jine_arry" :class="['jine_item', index == xuan_index ? 'xuan_active' : '']" @click="xuan(index)">
				<image src="@/static/img/qian_on.png" mode="" class="qian_on"></image>
				<image src="@/static/img/qian_no.png" mode="" class="qian_no"></image>
				{{ item }}元
			</view>
		</view>

		<view class="pay_btn">
			<button type="" class="xuanshang bai_30" @click="save">支付</button>
			<button type="" class="zanbu qian_30" @click="zanbu">暂不悬赏</button>
		</view>
		<view class="xuan_tishi qian_26">
			<view class="xuan_tishi_fir">悬赏提问，律师一分钟内优先解答！</view>
			<view class="">99%的问题都得到了优质解决方案！</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
			
			jine_arry: ['1.00', '3.00', '5.00', '10.00', '20.00'],
			xuan_index: 0,
			data:'',
			consultid:'',
			fenlei_arry:[]
		};
	},

	created() {},
	onLoad(option) {
	
		this.consultid=option.consultid
		// 获取分类
				this.$http.post({
					url: '/mapi/index/gettype',
				}).then(res => {
				  
				      var array = [];
				       for(var key in res.data.type){
				          array.push(res.data.type[key]);
				       }
					this.fenlei_arry=array		
					this.huoqu_xq()
				})
		
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		xuan(index) {
			this.xuan_index = index;
		},
		huoqu_xq(){
			this.$http.post({
				url: '/mapi/consult/zixun_xq',
				data:{
					consultid:this.consultid
				},
				
			}).then(res => {
				if(res.code==0){
					this.data=res.data.consult
				}
				console.log(res)
			
			})
		},
		save(){
			this.$http.post({
				url: '/mapi/consult/pay',
				data:{
					consultid:this.consultid,
					paymoney:this.jine_arry[this.xuan_index]
				},
				
			}).then(res => {
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
							 this.shuru_txt=''
							 setTimeout(function(){
							 				uni.navigateTo({
							 					url:'tiwen_list'
							 				})
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
			})
			
		},
		pay(consultid){
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
		},
		zanbu(){
			uni.navigateTo({
				url:'tiwen_list'
			})
		}
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

.jine {
	font-size: 60rpx;
	color: #ffffff;
	font-weight: bold;
}

.jine_shuru {
	display: flex;
	border-bottom: 2rpx solid #f7f7f7;
	padding-bottom: 8rpx;
}

.fangshi_list_pay {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100rpx;
	border-bottom: 2rpx solid #f7f7f7;
}

.pay_list,
.pay_list_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.pay_list input {
	text-align: right;
}
.xuanshang_title {
	display: flex;
	align-items: center;
	height: 98rpx;
	padding-left: 27rpx;
}
.xuanshang_title image {
	margin-right: 10rpx;
}
.pay_top {
	background-color: #ffffff;
	padding: 0 30rpx;
}

.pay_list {
	height: 100rpx;
	border-bottom: 2rpx solid #f7f7f7;
}

.pay_list_jine {
	height: 92rpx;
	box-sizing: border-box;
	padding: 27rpx 0;
}

.fangshi {
	background-color: #ffffff;
	padding: 0 30rpx;
}
.xuanshang {
	width: 335rpx;
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
}
.zanbu {
	width: 335rpx;
	height: 88rpx;
	background-color: #dcdcdc;
	border-radius: 44rpx;
	line-height: 88rpx;
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
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 70rpx;
}
.wen_list {
	display: block;
	padding-bottom: 30rpx;
	height: auto;
}
.wen_list_top {
	line-height: 80rpx;
}
.wen_neirong {
	width: 100%;
	padding: 0rpx 16rpx 10rpx 0;
	box-sizing: border-box;
}
.wen_neirong_txt {
	height: 100rpx;
	overflow: auto;
	word-break: break-all;
}
.wen_neirong_textarea {
	height: 264rpx;
}

.height_auto {
	height: auto;
	padding: 20rpx 0;
}

.dis_fir {
	align-items: flex-start;
}
.jine_list {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	background-color: #ffffff;
	padding: 46rpx 30rpx 10rpx 30rpx;
}
.jine_item {
	width: 210rpx;
	height: 90rpx;
	background-color: #efefef;
	border-radius: 3rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 30rpx 30rpx 0;
	box-sizing: border-box;
}
.jine_item:nth-child(3n) {
	margin-right: 0;
}
.jine_item image {
	width: 26rpx;
	height: 30rpx;
	margin-right: 9rpx;
}
.qian_on {
	display: none;
}
.xuan_active {
	border: 2rpx solid #0eb77e;
	color: #0eb77e;
	background-color: #ffffff;
	position: relative;
}
.xuan_active .qian_on {
	display: inline-block;
}
.xuan_active .qian_no {
	display: none;
}
.xuan_active::before {
	content: '';
	display: inline-block;
	width: 58rpx;
	height: 54rpx;
	position: absolute;
	bottom: 0;
	right: 0;
	background: url(../../static/img/xuanshang_xuan.png) no-repeat;
	background-size: 100% 100%;
}
.xuan_tishi {
	text-align: center;
	padding-bottom: 50rpx;
	margin-top: 30rpx;
}
.xuan_tishi_fir {
	margin-bottom: 10rpx;
}
</style>
