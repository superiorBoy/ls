<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">智能匹配</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<!-- <view class="zhineng_pay_title qian_30">智能匹配服务</view> -->
			<view class="pay_top">
				<view class="pay_list wen_list">
					<view class="hei_30_bold wen_list_top">问题描述</view>
					<textarea
						value=""
						placeholder="请输入您想要咨询的问题..."
						class="hei_26 wen_neirong wen_neirong_textarea"
						v-model="neirong"
						maxlength="2000"
						@input="bianhua"
					/>
					<view class="yishuru qian_24">{{ yishu_num }}/2000</view>
				</view>
				<view class="pay_list">
					<picker :range="type_arry" @change="zhuanchang_change" :range-key="'typename'">
						<view class="pay_list_xuanze ">
							<image src="@/static/img/tiwen_lei.png" mode="" style="width: 26rpx;height: 26rpx;margin-right:12rpx ;"></image>
							<text :class="['xaunze', leixing == '' ? 'qian_24' : 'hei_24']">{{ leixing == '' ? '请选择咨询类型' : leixing }}</text>
						</view>
					</picker>
					<image src="@/static/lsimg/go_r.png" mode="" style="width: 12rpx;height: 21rpx;margin-left: 10rpx;vertical-align: middle;"></image>
				</view>
				<view class="pay_list ">
					<pickerAddress @change="change">
						<view class="pay_list_xuanze ">
							<image src="@/static/img/tiwen_dizhi.png" mode="" style="width:20rpx ;height: 26rpx;margin-right: 12rpx;"></image>
							<text :class="['xaunze', dizhi == '' ? 'qian_24' : 'hei_24']">{{ dizhi == '' ? '请选择咨询地址' : dizhi }}</text>
						</view>
					</pickerAddress>
					<image src="@/static/lsimg/go_r.png" mode="" style="width: 12rpx;height: 21rpx;margin-left: 10rpx;vertical-align: middle;" />
				</view>
				<view class="pay_list">
					<view class="pay_list_shouji">
						<image src="@/static/img/lv_shouji.png" mode="" style="width: 18rpx;height: 26rpx;margin-right:12rpx ;"></image>
						<input type="text" value="" v-model="phone" placeholder="请输入手机号码" class="hei_24" />
					</view>
				</view>

<!-- 				<view class="pay_list">
					<text class="qian_30">类型/时长</text>
					<text class="hei_30">{{ type == 1 ? '在线咨询' : '电话咨询' }}/{{ pay_money }}元/{{ type == 1 ? time + '小时' : time + '分钟' }}</text>
				</view> -->
				<view class="xuanze">
					<view class="xuanze_title hei_30_bold">选择服务</view>

					<view class="pay_fa_list" v-if="zhineng">
						<view  :class="['pay_fa_item',type==1?'xuan_item_active':'']" @click="qiehuan(1)">
							<view class="pay_fa_item_top hong_26">
								<view class="hei_30_bold pay_fa_item_top_lei">在线咨询</view>
								<view class="">
									{{zhineng.zaixianprice}}元/{{zhineng.zaixiantime}}小时
								</view>
								
							</view>
							<view class="pay_fa_item_bottom qian_20">
								<view class="pay_fa_txt">极速响应，3秒分配律师！</view>
								<view class="pay_fa_txt">不限次数解答，私密聊天！</view>
								<view class="pay_fa_txt">不限沟通，解决率达99%！</view>
							</view>
							<text class="tuijian_xuanze bai_20">推荐</text>
						</view>
						<view :class="['pay_fa_item',type==2?'xuan_item_active':'']"  @click="qiehuan(2)">
							<view class="pay_fa_item_top hong_26">
								<view class="hei_30_bold pay_fa_item_top_lei">电话咨询</view>
								<view class="">{{zhineng.dianhuaprice}}元/{{zhineng.dianhuatime}}分钟</view>
							</view>
							<view class="pay_fa_item_bottom qian_20">
								<view class="pay_fa_txt">极速响应，3秒分配律师！</view>
								<view class="pay_fa_txt">主动打律师电话，不满退款！</view>
								<view class="pay_fa_txt">高效解答率99%！</view>
							</view>
							<text class="tuijian_xuanze bai_20">效率高</text>
						</view>
					</view>
					<view class="xuanze_bottom">
					<view class="xuanze_bottom_title hei_20">
						<text class="hei_30_bold">以下律师正在等待接单！</text><text class="suoxiao">大数据会匹配最佳一位律师为您服务</text>
						
					</view>	
						<view class="xuanze_bottom_ls qian_20">
							<view class="xuanze_bottom_ls_left">
								<image :src="img_url+item.photourl" mode="" v-for="(item,index) in lvshi" v-if="index<5"></image>
						<text class="suoxiao suoxiao2">律师已通过小虎网认证，小虎等980+位律师等待解答中...</text>	
							</view>	
						</view>	
					</view>
				</view>
			</view>
			<!-- <view class="fangshi_txt qian_30">请选择支付方式</view> -->
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
			<view class="pay_btn"><button type="" class="tixian_btn bai_30" @click="save">支付并发起咨询</button></view>
		</view>
	</view>
</template>

<script>
import pickerAddress2 from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			type: 1,
			zhifu: 2,
			type_arry: [],
			zhuanchang_arry: [],
			leixing: '',
			neirong: '',
			phone: '',
			typeid: '',
			zhineng: '',
			consultid: '',
			pay_money: '',
			zixun_xq: '',
			time: '',
			dizhi: '',
			yishu_num: 0,
			lvshi:[],
			apppaytype:'',
			is_click:true
		};
	},
	components: {
		pickerAddress2
	},
	created() {},
	onLoad(option) {
		this.type = option.type;
		if (option.consultid) {
			this.consultid = option.consultid;
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
					this.$http
						.post({
							url: '/mapi/consult/consult_xq',
							data: {
								consultid: option.consultid
							}
						})
						.then(res => {
							this.time = res.data.consult.zixunshicahng;
							this.pay_money = res.data.consult.paymoney;
							this.phone = res.data.consult.phone;
							this.leixing = this.fenlei[res.data.consult.typeid].typename;
							this.neirong = res.data.consult.information;
							this.yishu_num=res.data.consult.information.length
							this.typeid = res.data.consult.typeid;
							if (res.data.consult.province) {
								this.dizhi = res.data.consult.province + '-' + res.data.consult.city + '-' + res.data.consult.area;
							}
							if (res.data.consult.ispay == 2) {
								uni.navigateTo({
									url: 'pipei?consultid=' + res.data.consult.consultid
								});
							}
						});
				});
			// 获取分类
		} else {
			
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
					if (option.information) {
						this.neirong = option.information;
						this.dizhi = option.province + '-' + option.city + '-' + option.area;
						this.leixing = this.fenlei[option.typeid].typename;
						this.typeid = option.typeid;
					}
				});

			this.$http
				.post({
					url: '/mapi/user/user'
				})
				.then(res => {
					this.phone = res.data.user.mobile;
				});
			

			var cun_dizhi = uni.getStorageSync('dizhi');
			if (cun_dizhi.sheng!=undefined) {
				this.dizhi = cun_dizhi.sheng + '-' + cun_dizhi.shi + '-' + cun_dizhi.qu;
			}
		}
		// 查看只能服务报价
		this.$http
			.post({
				url: '/mapi/index/getzixun'
			})
			.then(res => {
				this.zhineng = res.data.zhan;
				if (this.type == 1) {
					this.pay_money = res.data.zhan.zaixianprice;
					this.time = res.data.zhan.zaixiantime;
				} else {
					this.pay_money = res.data.zhan.dianhuaprice;
					this.time = res.data.zhan.dianhuatime;
				}
			});
		this.huoqu_lvshi()
		this.huoqu_pay_fs()
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
		huoqu_lvshi(){
			
			this.$http.post({
				url: '/mapi/lawyer/lvshilist',
				data:{
					type:1,
					page:0
				}
			
			}).then(res => {
				if(res.code==0){
					this.lvshi=res.data.lawyer
				}
				console.log(res)
			})
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
		// 地址确定
		change(data) {
			console.log(data);
			this.dizhi = data.data[0] + '-' + data.data[1] + '-' + data.data[2];
			this.zhuan_show = false;
		},
		bianhua() {
			this.yishu_num = this.neirong.length;
		},
		qiehuan(i){
			this.type=i
		},
		save() {
			if (this.phone == '') {
				uni.showToast({
					title: '请填写手机号',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			if (this.neirong == '') {
				uni.showToast({
					title: '请填写咨询内容',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			if (this.typeid == '') {
				uni.showToast({
					title: '请填写咨询类型',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			if (this.dizhi == '') {
				uni.showToast({
					title: '请选择地址',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}

			var di = this.dizhi.split('-');

			this.$http
				.post({
					url: '/index/consult/addzhinengpay',
					data: {
						type: this.type,
						information: this.neirong,
						typeid: this.typeid,
						phone: this.phone,
						consultid: this.consultid,
						province: di[0],
						city: di[1],
						area: di[2]
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.consultid = res.data.consultid;

						if (this.zhifu == 2) {
							
							if(this.apppaytype==1){
								this.zfb_pay(res.data.consultid);
							}else{
								// #ifdef H5
								   this.zfb_pay(res.data.consultid);
								// #endif
								// #ifdef APP-PLUS
								this.app_pay(res.data.consultid)
								// #endif
							}
						} else if (this.zhifu == 3) {
							this.yue_pay(res.data.consultid);
						}
					}
				});
		},

		zfb_pay(consultid) {
			
			var that=this
			if(this.is_click){
					   that.is_click=false
					   setTimeout(function(){
					   	that.is_click=true
					   },3000)
			
			this.$http
				.post({
					url: '/mapi/consult/zhinengpayh5',
					data: {
						consultid: consultid
					}
				})
				.then(res => {
					if (res.code == 0) {
						// #ifdef H5
	                   that.$http.jspost(res.data.response)
						// #endif
						// #ifdef APP-PLUS
						plus.runtime.openURL('' + res.data.response);
						// #endif

					}
				});
				
		}else{
			uni.showToast({
				title: '稍后操作',
				duration: 2000,
						icon:'none'
			});
		}		
				
				
				
		},
app_pay(consultid){
	this.$http
		.post({
			url: '/mapi/consult/zhinengpay',
			data: {
				consultid: consultid
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
	
						  setTimeout(function() {
						  	uni.navigateTo({
						  		url: 'pipei?consultid=' + consultid
						  	});
						  }, 1000);
	
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
		yue_pay(consultid) {
			this.$http
				.post({
					url: '/index/consult/zhinengaccountpay',
					data: {
						consultid: consultid
					}
				})
				.then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: '支付成功',
							duration: 2000
						});
						setTimeout(function() {
							uni.navigateTo({
								url: 'pipei?consultid=' + consultid
							});
						}, 1000);
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
	line-height: 88rpx;
	margin: 50rpx 0 50rpx;
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
.zhineng_pay_title {
	line-height: 98rpx;
	padding-left: 30rpx;
}
.pay_list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 66rpx;
	border-bottom: 2rpx solid #f7f7f7;
	background-color: #ffffff;
	padding: 0 30rpx;
}
.pay_list input {
	/* text-align: right; */
}
.pay_list_shouji {
	display: flex;
	align-items: center;
	text-align: left;
}
.fangshi {
	background-color: #ffffff;
	padding: 0 30rpx 200rpx;
	margin-top: 20rpx;
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
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #FFFFFF;
	border-top: 2rpx solid #EEEEEE;
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
	background-color: #f8f8f8;
	width: 100%;
	padding: 15rpx 16rpx;
	box-sizing: border-box;
}
.wen_neirong_txt {
	height: 100rpx;
	overflow: auto;
	word-break: break-all;
}
.wen_neirong_textarea {
	height: 160rpx;
}
.go_r {
	width: 13rpx;
	height: 24rpx;
	margin-left: 17rpx;
}
.jiedan_ls {
	height: 420rpx;
	background-color: #ffffff;
	padding-left: 30rpx;
}
.jiedan_ls_title {
	line-height: 84rpx;
}
.jiedan_ls_list {
	display: flex;
	overflow-x: auto;
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none; /* IE 10+ */
}
.jiedan_ls_list::-webkit-scrollbar {
	display: none; /* Chrome Safari */
}
.jiedan_ls_item {
	text-align: center;
	width: 150rpx;
	margin-right: 50rpx;
}
.jiedan_ls_item image {
	width: 150rpx;
	height: 150rpx;
	border-radius: 100%;
	vertical-align: bottom;
}
.jiedan_ls_name {
	margin: 10rpx 0 6rpx;
}
.jiedan_bottom {
	height: 78rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 2rpx solid #dcdcdc;
	margin-top: 20rpx;
	padding-right: 30rpx;
}
.jiedan_bottom image {
	width: 20rpx;
	height: 20rpx;
	margin-right: 4rpx;
}
.jiedan_bottom text {
}
.pay_list_xuanze {
	width: 650rpx;
}
.yishuru {
	text-align: right;
	padding-right: 10rpx;
	padding-bottom: 10rpx;
	background-color: #f8f8f8;
}
.pay_fa_list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding:0 30rpx;
}
.pay_fa_item {
	height: 276rpx;
	width: 334rpx;
	background: url(../../static/img/no_fs.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
	padding: 0 0rpx 0 20rpx;
	box-sizing: border-box;
}
.pay_fa_item_top{
	
	height: 124rpx;
	
	}
		
	.pay_fa_item_top_lei{
		margin: 20rpx 0 10rpx;
	}
	.pay_fa_item_top text{
		margin-right: 18rpx;
	}
	.pay_fa_item_bottom{
		
		
	}
	.pay_fa_txt{
		margin-bottom: 10rpx;
		-webkit-transform: scale(0.9);
	}
.tuijian_xuanze{
	position: absolute;
		padding: 0 8rpx;
		height: 30rpx;
		background-color: #dbdbdb;
		border-radius: 5rpx;
		top: -15rpx;
		right: 20rpx;
		text-align: center;
		line-height: 30rpx;
}
.xuanze {
	background-color: #ffffff;
	padding-bottom: 40rpx;
	margin-top: 20rpx;
}
.xuanze_title {
	line-height: 88rpx;
	padding-left: 30rpx;
}
.xuanze_bottom_ls{
	display: flex;
	align-items: center;
	
}
.xuanze_bottom_ls_left{
	display: flex;
	align-items: center;
	padding-left: 10rpx;
	position: relative;
	left: 30rpx;
	margin-right: 10rpx;
}
.xuanze_bottom_ls_left image{
	width: 45rpx;
		height: 46rpx;
		border-radius: 100%;
		margin-left: -10rpx;
		
}
.xuanze_bottom_title{
	margin: 30rpx 0;
	display: flex;
	align-items: center;
	padding-left: 30rpx;
}
.xuanze_bottom_title text{
	
}
.xuan_item_active{
	background: url(../../static/img/on_fs.png) no-repeat;
	background-size: 100% 100%;
}
.xuan_item_active .tuijian_xuanze{
	background-color: #f43a51 ;
}
.suoxiao{
	  -webkit-transform: scale(0.9);
}
.suoxiao2{
	/* -webkit-transform: scale(0.8); */
	position: relative;
	left: -15rpx;
	}
</style>
