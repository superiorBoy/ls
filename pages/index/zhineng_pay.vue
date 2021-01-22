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
			   	<text class="hei_30">{{type==1?zhineng.zaixiantime+'小时':zhineng.dianhuatime+'分钟'}}</text>
			   </view>
	            <view class="pay_list">
	            	<text class="qian_30">支付金额</text>
	            	<text class="hong_30">￥{{type==1?zhineng.zaixianprice:zhineng.dianhuaprice}}</text>
	            </view>
				<view class="pay_list">
					<text class="qian_30">手机号码</text>
					<input type="text" value="" v-model="phone"/>
				</view>
				<view class="pay_list">
					<text class="qian_30">咨询类型</text>
					<picker :range="type_arry" @change="zhuanchang_change" :range-key="'typename'">
						<text class="hei_30">{{leixing==''?'选择咨询类型':leixing}}</text>
						<image src="@/static/lsimg/go_r.png" mode="" style="width: 12rpx;height: 21rpx;margin-left: 6rpx;vertical-align: middle;"></image>
					</picker>
				</view>
				<view class="pay_list wen_list">
					<view class="qian_30 wen_list_top">咨询内容</view>
					<textarea value=""   placeholder="" class="hei_30 wen_neirong wen_neirong_textarea" v-model="neirong" maxlength="5000"/>
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
	import pickerAddress2 from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			type:1,
			zhifu:2,
			type_arry:[],
			zhuanchang_arry: [],
			leixing:'',
			neirong:'',
			phone:'13122223333',
			typeid:'',
			zhineng:''
			
		};
	},
	components: {
		pickerAddress2
	},
	created() {
	},
	onLoad(option) {
	 this.type=option.type
		// 获取分类
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.fenlei = res.data.type;
				var array = [];
				for (var key in res.data.type) {
					array.push(res.data.type[key]);
				}
				this.type_arry = array;
			});
		this.$http
			.post({
				url: '/mapi/lawyer/getshanchang'
			})
			.then(res => {
				this.zhuanchang_arry = res.data.shanchang;
			});
			
		// 查看只能服务报价
		this.$http
			.post({
				url: '/mapi/index/getzixun'
			})
			.then(res => {
		
				this.zhineng = res.data.zhan;
			});	
			
			
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		// 类型选择
		zhuanchang_change(e) {
			this.leixing = this.type_arry[e.detail.value].typename;
			this.typeid = this.type_arry[e.detail.value].typeid;
			console.log(this.typeid);
		},

		radio(i) {
			this.zhifu = i;
		},
		save(){
			console.log(this.neirong,this.typeid)
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
.pay_list input{
	text-align: right;
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
.wen_list{
	display: block;
	padding-bottom: 30rpx;
	height: auto;
	
}
.wen_list_top{
	line-height: 80rpx;
}
.wen_neirong{
		background-color: #f8f8f8;
		width: 100%;
		padding: 10rpx 16rpx;
		box-sizing: border-box;
		
}
.wen_neirong_txt{
	height:100rpx;
	overflow: auto;
	word-break: break-all;
}
.wen_neirong_textarea{
		height: 264rpx;
}
.go_r{
		width: 13rpx;
		height: 24rpx;
		margin-left: 17rpx;
}

</style>
