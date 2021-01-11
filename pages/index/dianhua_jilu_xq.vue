<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">详情</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="pay_top">
				<view class="pay_list ">
					<text class="qian_30">服务项目</text>
					<view class="zhuangtai lv_20">
						{{ item.zixunstate == 1 ? '未付款' : item.zixunstate == 2 ? '已付款' : item.zixunstate == 3 ? '接单中' : '已完成' }}
					</view>
					<text class="hei_30">
						电话咨询
					</text>
				</view>
				<view class="pay_list height_auto dis_fir">
					<text class="qian_30">服务律师</text>
					<view class="ls_item">
						<view class="ls_item_top">
						<view class="ls_item_left">
							<image :src="img_url+lvshi.photourl" mode="" class="ls_item_left_tx"></image>
							<image src="@/static/img/renzheng2.png" mode="" class="ls_item_left_ren"></image>
						</view>
						<view class="ls_item_right">
							<view class="hui_24 ls_item_right_top">
								<text class="hei_28_bold">{{lvshi.nickname}}律师</text>
								<text class="ls_dianhua"><image src="@/static/img/dianhua_icon.png" mode="" class="dianhua_dizhi"></image>{{lvshi.mobile}}</text>
							</view>
							<view class="ls_dizhi hui_24">
								<image src="@/static/img/dianhua_dizhi.png" mode="" class="dianhua_dizhi"></image>{{lvshi.province}}-{{lvshi.city}}-{{lvshi.area}}
							</view>
						</view>
						</view>
						<view class="hui_26 techang">
							<view class="shanchang">擅长:</view>
							<view class="techang_list hui_20">
								
								<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise1].shanchangname">{{zhuanchang_arry[lvshi.expertise1].shanchangname}}</text>
								<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise2].shanchangname">{{zhuanchang_arry[lvshi.expertise2].shanchangname}}</text>
								<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise3].shanchangname">{{zhuanchang_arry[lvshi.expertise3].shanchangname}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="pay_list ">
					<text class="qian_30">咨询类型</text>
					<text class="hei_30" v-if="item.typeid && fenlei[item.typeid]">
						{{fenlei[item.typeid].typename}}
					</text>
				</view>
				<view class="pay_list wen_list">
					<view class="qian_30 wen_list_top">咨询内容</view>
					<view class=" wen_list_body" :class="['',item.zixunstate == 4 ? 'qian_30' : 'hei_30']">
						{{item.information}}
					</view>
				</view>
				<view class="pay_list_jine">
					<view class="pay_list_top">
						<text class="qian_30">支付金额</text>
						<text class="hei_30">
							实付款：
							<text class="hong_30">￥{{item.paymoney}}</text>
						</text>
					</view>
					<view class="hei_30 qian_26 yuanjia">
						原价：
						<text>99.00</text>
					</view>
				</view>
				<view class="pay_list ">
					<text class="qian_30">咨询时长</text>
					<text class="hong_30">
						20分钟
					</text>
				</view>
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
			type:'',
			item:'',
			fenlei:[]
		};
	},
	created() {
	},
	onLoad(option) {
		// 获取分类
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.fenlei = res.data.type;
			});
		
		if(option.item!=undefined){
			var item =JSON.parse(option.item)
			this.item=item
				this.time=item.starttime
				this.time2=item.endtime
				this.jigou=item.school
				this.zhiwu=item.zhuanye
				this.lawyerid=item.lawyerid
				console.log(item)
			}
		
		
		
		
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
	border-bottom: 2rpx solid #f7f7f7;
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
.wen_list_body{
	word-break: break-all;
}
.go_r{
		width: 13rpx;
		height: 24rpx;
		margin-left: 17rpx;
}
.ls_item{
	
	background-color: #f8f8f8;
	padding: 34rpx 14rpx 34rpx 46rpx;
	width: 560rpx;
	box-sizing: border-box;
}
.ls_item_top{
	display: flex;
	align-items: center;
}
.ls_item_left{
	margin-right: 15rpx;
	position: relative;
}
.ls_item_left_tx{
		width: 81rpx;
		height: 81rpx;
		border-radius: 100%;
}
.ls_item_left_ren{
	position: absolute;
	right: 8rpx;
	bottom: 6rpx;
		width: 15rpx;
		height: 16rpx;
		border: 2rpx solid #FFFFFF;
		background-color: #FFFFFF;
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
	margin-top: 20rpx;
}
.shanchang {
	width: 90rpx;
	height: 36rpx;
	background-color: #e7e7e7;
	margin-right:8rpx;
	text-align: center;
	
}
.techang_list{
	display: flex;
	flex-wrap: wrap;
	}
.techang_list text {
	line-height: 30rpx;
	margin-right:8rpx;
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
.ls_item_right{
	
}
.ls_item_right_top{
	margin-bottom: 20rpx;
}
.ls_dizhi{
	
}
.ls_dianhua{
	
	margin-left: 20rpx;
}
.ls_dianhua image{
		width: 23rpx;
		height: 24rpx;
		margin-right: 5rpx;
}
.dis_fir{
	align-items: flex-start;
}
.zhuangtai{
	background: url(../../static/img/dianhua_xq_bg.png) no-repeat;
		width: 120rpx;
		height: 120rpx;
		background-size: 100% 100%;
		text-align: center;
		line-height: 116rpx;
		transform:rotate(-30deg);
		-ms-transform:rotate(-30deg); 	
		-moz-transform:rotate(-30deg); 	
		-webkit-transform:rotate(-30deg); 
		-o-transform:rotate(-30deg);	
}
</style>
