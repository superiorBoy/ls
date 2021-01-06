<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">支付</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="pay_top">
				<view class="pay_list">
					<text class="qian_30">服务项目</text>
					<text class="hei_30">
						{{type==1?'在线咨询':'电话咨询'}}
						<image src="@/static/lsimg/go_r.png" mode="" class="go_r"></image>
					</text>
				</view>
				<view class="pay_list height_auto">
					<text class="qian_30">服务律师</text>
					<view class="ls_item">
						<view class="ls_item_left">
							<image :src="img_url+lvshi.photourl" mode=""></image>
						</view>
						<view class="ls_item_right">
							<view class="hui_24 ls_item_right_top">
								<text class="hei_28_bold">{{lvshi.nickname}}律师</text>
								<text class="ls_dizhi"><image src="@/static/img/dianhua_dizhi.png" mode="" class="dianhua_dizhi"></image>{{lvshi.province}}-{{lvshi.city}}-{{lvshi.area}}</text>
							</view>
							<view class="hui_26 techang">
								<view class="shanchang">擅长：</view>
								<view class="techang_list hui_20">
									
									<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise1].shanchangname">{{zhuanchang_arry[lvshi.expertise1].shanchangname}}</text>
									<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise2].shanchangname">{{zhuanchang_arry[lvshi.expertise2].shanchangname}}</text>
									<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise3].shanchangname">{{zhuanchang_arry[lvshi.expertise3].shanchangname}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="pay_list wen_list">
					<view class="qian_30 wen_list_top">咨询内容</view>
					<textarea value="" placeholder="" class="hei_30 wen_neirong" v-model="neirong"/>
					
				</view>
				<view class="pay_list_jine">
					<view class="pay_list_top">
						<text class="qian_30">支付金额</text>
						<text class="hei_30">
							实付款：
							<text class="hong_30">￥{{type==1?lvshi.chatprice:lvshi.phoneprice  }}</text>
						</text>
					</view>
					<view class="hei_30 qian_26 yuanjia">
						原价：
						<text>99.00</text>
					</view>
				</view>
			</view>

			<view class="fangshi_txt hei_30_bold">支付方式</view>
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
			</view>
			<view class="pay_btn">
				<button type="" class="tixian_btn bai_30" @click="save">去支付（{{ type==1?lvshi.chatprice:lvshi.phoneprice }}）</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			zhifu: '2',
			lawyerid:'',
			img_url: uni.getStorageSync('img_url'),
			lvshi:'',
			neirong:'',
			zhuanchang_arry:[],
			type:''
		};
	},
	created() {
	},
	onLoad(option) {
		this.lawyerid=option.lawyerid
		this.type=option.type
		this.$http
			.post({
				url: '/mapi/lawyer/getshanchang'
			})
			.then(res => {
				this.zhuanchang_arry = res.data.shanchang;
				this.huoqu_lvshi();
			});
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
// 律师信息
		huoqu_lvshi() {
			this.$http
				.post({
					url: '/mapi/lawyer/lawyer',
					data: {
						lawyerid: this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.lvshi = res.data.lawyer;
					}
				});
		},
		save() {
			

			

			console.log(this.zhifu);
		},
		radio(i) {
			this.zhifu = i;
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
	margin: 125rpx 0 50rpx;
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

.pay_list,
.pay_list_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.pay_top {
	background-color: #ffffff;
	padding: 0 30rpx;
	margin-top: 20rpx;
}

.pay_list {
	height: 100rpx;
	border-bottom: 2rpx solid #f7f7f7;
}

.pay_list_jine {
	height: 153rpx;
	box-sizing: border-box;
	padding: 27rpx 0;
}

.yuanjia {
	text-align: right;
	margin-top: 20rpx;
}

.yuanjia text {
	text-decoration: line-through;
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
.go_r{
		width: 13rpx;
		height: 24rpx;
		margin-left: 17rpx;
}
.ls_item{
	display: flex;
	align-items: center;
	background-color: #f8f8f8;
	padding: 34rpx 14rpx;
	max-width: 530rpx;
}
.ls_item_left{
	margin-right: 15rpx;
}
.ls_item_left image{
		width: 81rpx;
		height: 81rpx;
		border-radius: 100%;
}
.dianhua_dizhi{
		width: 20rpx;
		height: 24rpx;
		margin-right: 17rpx;
}
.techang {
	
	display: flex;
	align-items: center;
}
.shanchang {
	width: 90rpx;
	height: 36rpx;
	background-color: #e7e7e7;
	margin-right: 0rpx;
	text-align: center;
	
}
.techang_list{
	display: flex;
	flex-wrap: wrap;
	}
.techang_list text {
	line-height: 30rpx;
	margin-right: -2rpx;
	padding: 2rpx 10rpx;
	color: #ffffff;
	
}
.techang_list text:nth-child(1) {
	background-color: #01af63;
}
.techang_list text:nth-child(2) {
	background-color: #39bf84;
}
.techang_list text:nth-child(3) {
	background-color: #7acea4;
	margin-right: 0;
}
.height_auto{
	height: auto;
	padding:20rpx 0 ;
}
.ls_item_right_top{
	margin-bottom: 20rpx;
}
.ls_dizhi{
	margin-left: 20rpx;
}
</style>
