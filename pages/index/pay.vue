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
						{{type==1?'在线咨询':type==2?'电话咨询':type==3?'合同事务':type==4?'诉讼委托':'见面咨询'}}({{time}})
					</text>
				</view>
			<!-- 	<view class="pay_list">
					<text class="qian_30">服务时长</text>
					<text class="hei_30">
						10分钟
					</text>
				</view> -->
				
			
				
			<!-- 	<view class="pay_list">
					<text class="qian_30">服务项目</text>
					<picker :range="xiangmu_arry" @change="paixu_change" >
						<text class="hei_30">{{xiamgmu==''?'选择项目':xiamgmu}}</text>
						<image src="@/static/img/shaixuan.png" mode="" style="width: 16rpx;height: 8rpx;margin-left: 6rpx;vertical-align: middle;"></image>
					</picker>
				</view> -->
				<!-- <view class="pay_list">
					<text class="qian_30">服务时长</text>
					<picker :range="shichang_arry" @change="shichang_change" >
						<text class="hei_30">{{shichang==''?'选择时长':shichang}}</text>
						<image src="@/static/img/shaixuan.png" mode="" style="width: 16rpx;height: 8rpx;margin-left: 6rpx;vertical-align: middle;"></image>
					</picker>
				</view> -->
				
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
							<text v-if="zhuanchang_arry[lvshi.expertise2] && zhuanchang_arry[lvshi.expertise2].shanchangname">{{zhuanchang_arry[lvshi.expertise2].shanchangname}}</text>
							<text v-if="zhuanchang_arry[lvshi.expertise3] && zhuanchang_arry[lvshi.expertise3].shanchangname">{{zhuanchang_arry[lvshi.expertise3].shanchangname}}</text>
						</view>
					</view>
					</view>
				</view>
				<view class="pay_list">
					<text class="qian_30">手机号码</text>
					<input type="text" value="" v-model="phone" placeholder="请输入手机号码" class="hei_30"/>
				</view>
		<!-- 		<view class="pay_list" v-if="typeid && fenlei[typeid]">
					<text class="qian_30">咨询类型</text>
					<text class="hei_30">
						{{ fenlei[typeid].typename }}
					</text>
				</view> -->
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
				<view class="pay_list">
					<text class="qian_30">支付金额</text>
					<text class="hong_30">
						￥{{pay_money}}
					</text>
				</view>
			<!-- 	<view class="pay_list_jine">
					<view class="pay_list_top">
						<text class="qian_30">支付金额</text>
						<text class="hei_30">
							实付款：
							<text class="hong_30">￥{{pay_money}}</text>
						</text>
					</view> -->
				<!-- 	<view class="hei_30 qian_26 yuanjia">
						原价：
						<text>99.00</text>
					</view> -->
				</view>
			<!-- 	<view class="pay_list">
					<text class="qian_30">咨询时长</text>
					<text class="hong_30">
						{{type==1?'1小时':'20分钟'}}
					</text>
				</view> -->
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
			zhifu: '2',
			lawyerid:'',
			img_url: uni.getStorageSync('img_url'),
			lvshi:'',
			neirong:'',
			zhuanchang_arry: [],
			type_arry:[],
			type:'',
			consultid:'',
			information:'',
			typeid:'',
			fenlei:[],
			phone:'',
			xiamgmu:'',
			shichang:'',
			leixing:'',
			zixun_xinxi:'',
			laiyuan:1,
			pay_money:0,
			time:'',
			apppaytype:''
			
		};
	},
	components: {
		pickerAddress2
	},
	created() {
	},
	onLoad(option) {
		this.lawyerid=option.lawyerid
			
		if(option.type){
			
		this.type=option.type
		}
		if(option.pay_money){
			this.pay_money=option.pay_money
		}
		if(option.time){
			this.time=option.time
		}
		if(option.consultid){
			this.laiyuan=2
			this.consultid=option.consultid
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
					this.diangdan_xinxi()
				});
		
				
			
		}else{
			this.laiyuan=1
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
		}
		
		
		this.$http
			.post({
				url: '/mapi/lawyer/getshanchang'
			})
			.then(res => {
				this.zhuanchang_arry = res.data.shanchang;
				this.huoqu_lvshi();
			});
		// 获取手机号	
	this.$http
		.post({
			url: '/mapi/user/user'
		})
		.then(res => {
			this.phone=res.data.user.mobile
		});		
		
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
		diangdan_xinxi(){
			this.$http
				.post({
					url: '/mapi/consult/consult_xq',
					data:{
						consultid:this.consultid
					}
				})
				.then(res => {
					this.zixun_xinxi=res.data.consult
					this.neirong=res.data.consult.information
					this.pay_money=res.data.consult.paymoney
					this.typeid=res.data.consult.typeid
					this.time=res.data.consult.zixunshicahng
					if(res.data.consult.zixunshicahng==1){
						this.time='20分钟'
						
					}else if(res.data.consult.zixunshicahng==24){
						this.time='1天'
					}else if(res.data.consult.zixunshicahng==72){
						this.time='3天'
					}else if(res.data.consult.zixunshicahng==720){
						this.time='1个月'
					}else{
						this.time=res.data.consult.zixunshicahng+'小时'
					}
					
					if(res.data.consult.baojiamode=='hetong_shenhe'){
						this.time='合同审核'
						this.type=3
					}
					if(res.data.consult.baojiamode=='hetong_daixie'){
						this.time='代写合同'
						this.type=3
					}
					if(res.data.consult.baojiamode=='hetong_wenshu'){
						this.time='代写文书'
						this.type=3
					}
					if(res.data.consult.baojiamode=='lvshi_huijian'){
						this.time='律师会见'
						this.type=4
					}

					if(res.data.consult.baojiamode=='lvshihan'){
						this.time='发律师函'
						this.type=4
					}
					if(res.data.consult.baojiamode=='anjianzhidao'){
						this.time='案件指导'
						this.type=4
					}
					if(res.data.consult.baojiamode=='jianmian'){
						this.time='1次'
						this.type=0
					}
					
					this.leixing = this.fenlei[res.data.consult.typeid].typename;
				});
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
			
			if(this.phone==''){
				uni.showToast({
					title: '请填写手机号码',
					duration: 2000,
					icon: 'none'
				});
				return false
			}
		
			if(this.neirong==''){
				uni.showToast({
					title: '请输入咨询内容',
					duration: 2000,
					icon: 'none'
				});
				return false
			}
			if(this.typeid==''){
				uni.showToast({
					title: '请选择咨询类别',
					duration: 2000,
					icon: 'none'
				});
				return false
			}
			
			
			if(this.type==0){
				var xiangmu='见面咨询'
			}else if(this.type==1){
				var xiangmu='在线咨询'
			}else if(this.type==2){
				var xiangmu='电话咨询'
			}else if(this.type==3){
				var xiangmu='合同文书'
			}else if(this.type==4){
				var xiangmu='诉讼委托'
			}
			
		console.log(this.type,this.neirong,this.phone,this.typeid,this.time)	
			
			
			if(this.laiyuan==1){
				var ls=this.lawyerid
			}else{
				var ls=''
			}

			this.$http
				.post({
					url: '/index/consult/addconsultpay',
					data: {
						information: this.neirong,
						typeid:this.typeid,
						phone:this.phone,
						shichang:this.time,
						xiangmu:xiangmu,
						lawyerid:ls,
						consultid:this.consultid
					}
				})
				.then(res => {
					if (res.code == 0) {
						if(this.zhifu==2){
							if(this.apppaytype==1){
								this.zfb_pay(res.data.consultid)
							}else{
								this.app_pay(res.data.consultid)
							}
							
						}else if(this.zhifu==3){
							this.yue_pay(res.data.consultid)
						}
						
					}
				});
			
			
			
			return false

			

			console.log(this.zhifu);
		},
		
		zfb_pay(consultid){
			var that=this
			this.$http
				.post({
					url: '/mapi/consult/payh5',
					data: {
						consultid:consultid
					}
				})
				.then(res => {
					if (res.code == 0) {
						
						// #ifdef H5
						  window.open(''+res.data.response);
						 // #endif
						 // #ifdef APP-PLUS
						 plus.runtime.openURL(''+res.data.response)
						 // #endif
						
						// uni.requestPayment({
						//        provider: 'alipay',
						//        orderInfo:res.data.response,
						//        success: function(res) {
						//            console.log('success:' + JSON.stringify(res));
						// 		   uni.showToast({
						// 		   	title: '支付成功',
						// 		   	duration: 2000
						// 		   });
								   
						// 		   setTimeout(function(){
						// 		   	if(that.type==1){
						// 		   		uni.navigateTo({
						// 		   			url:'zixun_jilu'
						// 		   		})
						// 		   	}else if(that.type==2){
						// 		   		uni.navigateTo({
						// 		   			url:'dianhua_jilu'
						// 		   		})
						// 		   	}else{
						// 		   		uni.navigateTo({
						// 		   			url:'qita_jilu'
						// 		   		})
						// 		   	}
								   	
						// 		   },2000) 
								
								   
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
				});
		},
		app_pay(consultid){
			
			var that=this
			this.$http
				.post({
					url: '/mapi/consult/pay',
					data: {
						consultid:consultid
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
								   	if(that.type==1){
								   		uni.navigateTo({
								   			url:'zixun_jilu'
								   		})
								   	}else if(that.type==2){
								   		uni.navigateTo({
								   			url:'dianhua_jilu'
								   		})
								   	}else{
								   		uni.navigateTo({
								   			url:'qita_jilu'
								   		})
								   	}
								   	
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
			var that=this
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
					setTimeout(function(){
						if(that.type==1){
							uni.navigateTo({
								url:'zixun_jilu'
							})
						}else if(that.type==2){
							uni.navigateTo({
								url:'dianhua_jilu'
							})
						}else{
							uni.navigateTo({
								url:'qita_jilu'
							})
						}
						
					},2000) 
						
					}
				});
		},
		// 项目选择
		paixu_change(e) {
			
			this.xiamgmu = this.xiangmu_arry[e.detail.value];
			console.log(this.xiamgmu)
		},
		// 时长选择
		shichang_change(e){
			
			this.shichang = this.shichang_arry[e.detail.value];
			console.log(this.shichang)
		},
		// 类型选择
		zhuanchang_change(e) {
			this.leixing = this.type_arry[e.detail.value].typename;
			this.typeid = this.type_arry[e.detail.value].typeid;
			console.log(this.typeid);
		},
		guoqu_zixun_xq(){
			this.$http
				.post({
					url: '/mapi/consult/zixun_xq',
					data: {
						consultid: this.consultid
					}
				})
				.then(res => {
					if (res.code == 0) {
						
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
.pay_list input{
	text-align: right;
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
	height: 92rpx;
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
.wen_neirong_txt{
	height:100rpx;
	overflow: auto;
	word-break: break-all;
}
.wen_neirong_textarea{
		height: 200rpx;
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
</style>
