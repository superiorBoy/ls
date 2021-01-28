<template>
	<view class="" >
		<!-- <view class="head">  
			  <view class=""></view> 
			  <view class="head_center hei_38_bold">接单</view> 
			  <view class=""></view> 
			</view> -->
		<view class="my_top">
			<view class="my_top_left">
				<image :src="img_url + user.photourl" mode="" class="ls_tx" v-if="user"></image>
				<image src="@/static/lsimg/moren_tx.png" mode="" class="ls_tx" v-if="!user"></image>
				<view class="my_top_left_r" v-if="is_login">
					<view class="my_name hei_30_bold">
						{{ user?user.nickname:'' }}律师
						<view class="renzheng_xinxi" v-if="user">
							<image src="../../static/lsimg/yi_renzheng1.png" mode="" class="renzheng1" v-if="user.isreal == 1"></image>
							<image src="../../static/lsimg/yi_renzheng2.png" mode="" class="renzheng2" v-if="user.iszhiye == 1"></image>
							<image src="../../static/lsimg/yi_renzheng3.png" mode="" class="renzheng3" v-if="user.iszhiye == 1"></image>
						</view>
					</view>
					<view class="renzheng bai_20" v-if="user&&user.isreal == 1">认证律师</view>
				</view>
				<view class="my_top_weoienglu hei_26" v-if="!is_login">
					<navigator url="login" class="go_denglu">登录</navigator>
					<navigator url="../index/zhuce?state=2" class="go_denglu">注册</navigator>
				</view>
			</view>
			<view class="my_top_right hei_30_bold" @click="qiehuan" >切换到用户中心</view>
		</view>

		<view class="my_ziliao">
			<view  class="my_ziliao_item" @click="tiaozhuan('fensi')">
				<view class="my_ziliao_item_top hei_28">{{geshu.fensi}}</view>
				<view class="my_ziliao_item_bottom hei_22">粉丝</view>
			</view>
			<view  class="my_ziliao_item" @click="tiaozhuan('tiwen_guanli')">
				<view class="my_ziliao_item_top hei_28">{{geshu.tiwen}}</view>
				<view class="my_ziliao_item_bottom hei_22">提问</view>
			</view>
			
			<view  class="my_ziliao_item" @click="tiaozhuan('zixun_jilu')">
				<view class="my_ziliao_item_top hei_28">{{geshu.zaixian}}</view>
				<view class="my_ziliao_item_bottom hei_22">在线</view>
			</view>
			<view  class="my_ziliao_item" @click="tiaozhuan('dianhua_zixun')">
				<view class="my_ziliao_item_top hei_28">{{geshu.dianhua}}</view>
				<view class="my_ziliao_item_bottom hei_22">电话</view>
			</view>
		</view>

		<view class="my_bottom">
			<view class="my_guanli jiedan_guanli">
				<view class="my_title hei_30_bold jiedan_title">接单管理</view>

				<view class="my_list">
					<view  class="jiedan_item" @click="tiaozhuan('tiwen_guanli')">
						<view  class="jiedan_item_left">
							<image src="@/static/lsimg/jiedan1.png" mode="" class="jiedan_img" style="width: 42rpx;height: 42rpx;"></image>
							<image src="@/static/lsimg/new.png" mode="" class="new"></image>
						</view>	
						<view  class="jiedan_item_right">
							<view  class="jiedan_item_right_txt">
								<view  class="jiedan_item_right_txt_left">
								<view class="hei_24">
									优质咨询
								</view>
								<view class="qian_20 jiedan_item_txt">
									快速提交咨询问题，高效匹配专业律师，解答完成获得悬赏！
								</view>
								</view>	
								<text class="zixun_num" v-if="geshu.tiwen>0">+{{geshu.tiwen}}</text>
							</view>	
						</view>	
						
						
					</view>
					<view  class="jiedan_item" @click="tiaozhuan('zixun_jilu')">
						<view  class="jiedan_item_left">
							<image src="@/static/lsimg/jiedan2.png" mode="" class="jiedan_img" style="width: 42rpx;height: 42rpx;"></image>
							<image src="@/static/lsimg/new.png" mode="" class="new"></image>
						</view>	
						<view  class="jiedan_item_right">
							<view  class="jiedan_item_right_txt">
								<view  class="jiedan_item_right_txt_left">
								<view class="hei_24">
									咨询记录
								</view>
								<view class="qian_20 jiedan_item_txt">
									文字/语音/图片等多种沟通方式，适应不同问题的在线咨询！
								</view>
								</view>
								<text class="zixun_num" v-if="geshu.zaixian>0">+{{geshu.zaixian}}</text>
							</view>	
						</view>	
						
						
					</view>
					<view  class="jiedan_item" @click="tiaozhuan('dianhua_zixun')">
						<view  class="jiedan_item_left">
							<image src="@/static/lsimg/jiedan3.png" mode="" class="jiedan_img" style="width: 42rpx;height: 42rpx;"></image>
							<image src="@/static/lsimg/new.png" mode="" class="new"></image>
						</view>	
						<view  class="jiedan_item_right">
							<view  class="jiedan_item_right_txt">
								<view  class="jiedan_item_right_txt_left">
								<view class="hei_24">
									电话咨询
								</view>
								<view class="qian_20 jiedan_item_txt">
									律师给您电话针对性解答，能让您快速解决法律问题！
								</view>
								</view>	
								<text class="zixun_num" v-if="geshu.dianhua>0">+{{geshu.dianhua}}</text>
							</view>	
						</view>	
						
						
					</view>
					<view  class="jiedan_item" @click="tiaozhuan('qita_jilu')">
						<view  class="jiedan_item_left">
							<image src="@/static/lsimg/jiedan4.png" mode="" class="jiedan_img" style="width: 46rpx;height: 46rpx;"></image>
							<image src="@/static/lsimg/new.png" mode="" class="new"></image>
						</view>	
						<view  class="jiedan_item_right">
							<view  class="jiedan_item_right_txt">
								<view  class="jiedan_item_right_txt_left">
								<view class="hei_24">
									其他咨询
								</view>
								<view class="qian_20 jiedan_item_txt">
									了解真实案例，监督侦察工作，保障当事人合法权益！
								</view>
								</view>	
							<text class="zixun_num" v-if="geshu.other>0">+{{geshu.other}}</text>
							</view>	
						</view>	
						
						
					</view>
					<!-- <view  class="jiedan_item" @click="tiaozhuan('tiwen_jilu')">
						<image src="../../static/lsimg/my_jiedan2.png" mode=""></image>
						<view class="hui_24 ">提问记录</view>
					</view> -->
				<!-- 	<view  class="jiedan_item" @click="tiaozhuan('zaixian_list')">
						<image src="../../static/lsimg/my_jiedan3.png" mode=""></image>
						<view class="hui_24 ">在线咨询</view>
					</view> -->
					<!-- <view  class="jiedan_item" @click="tiaozhuan('zixun_jilu')">
						<image src="../../static/lsimg/my_jiedan4.png" mode=""></image>
						<view class="hui_24 ">咨询记录</view>
					</view>
					<view  class="jiedan_item" @click="tiaozhuan('dianhua_zixun')">
						<image src="../../static/lsimg/my_jiedan5.png" mode=""></image>
						<view class="hui_24 ">电话咨询</view>
					</view> -->
				</view>
			</view>

			<view class="my_guanli ls_guanli">
				<view class="my_title hei_30_bold">律师管理</view>
				<view class="my_list">
					<navigator url="shiming_renzheng" class="ls_item" >
						<image src="../../static/lsimg/my_ls1.png" mode=""></image>
						<view class="hui_24 ">实名认证</view>
					</navigator>
					<view  class="ls_item" @click="tiaozhuan('zhiye_renzheng')">
						<image src="../../static/lsimg/my_ls2.png" mode=""></image>
						<view class="hui_24 ">执业认证</view>
					</view>
					<view  class="ls_item" @click="tiaozhuan('ls_renzheng')">
						<image src="../../static/lsimg/my_ls3.png" mode="" style="width: 50rpx;height: 50rpx;"></image>
						<view class="hui_24 ">律师认证</view>
					</view>
					<view  class="ls_item" @click="tiaozhuan('anli')">
						<image src="../../static/lsimg/my_ls4.png" mode="" style="width: 48rpx;height: 50rpx;"></image>
						<view class="hui_24">成功案例</view>
					</view>
					<view  class="ls_item" @click="tiaozhuan('zixun_baojia')">
						<image src="../../static/lsimg/my_ls5.png" mode=""></image>
						<view class="hui_24 ">咨询报价</view>
					</view>
					<view  class="ls_item" @click="tiaozhuan('fuwu_baojia')">
						<image src="../../static/lsimg/my_ls6.png" mode=""></image>
						<view class="hui_24 ">服务报价</view>
					</view>
				</view>
			</view>

			<view class="my_guanli">
				<view class="my_title hei_30_bold">网站管理</view>
				<view class="my_list">
					<view  class="wangzhan_item" @click="tiaozhuan('kaitong')">
						<image src="../../static/lsimg/my_wangzhan1.png" mode=""></image>
						<view class="hui_24 ">开通站点</view>
					</view>
					<view  class="wangzhan_item" @click="tiaozhuan('peizhi')">
						<image src="../../static/lsimg/my_wangzhan2.png" mode=""></image>
						<view class="hui_24 ">网站配置</view>
					</view>
					<view  class="wangzhan_item" @click="tiaozhuan('shezhi')">
						<image src="../../static/lsimg/my_wangzhan3.png" mode=""></image>
						<view class="hui_24 ">信息设置</view>
					</view>
					<view class="wangzhan_item">
						<image src="../../static/lsimg/my_wangzhan4.png" mode=""></image>
						<view class="hui_24 ">选择设置</view>
					</view>
				</view>
			</view>
			<view class="my_guanli zhanghao_guanli">
				<view class="my_title hei_30_bold">账号管理</view>
				<view class="my_list">
					<navigator url="geren_xinxi" class="zhanghao_item">
						<image src="../../static/lsimg/my_zhanghao1.png" mode="" style="width: 40rpx;height: 32rpx;margin-bottom: 32rpx;"></image>
						<view class="hui_24 ">个人信息</view>
					</navigator>
					<view  class="zhanghao_item" @click="tiaozhuan('liushui?state=2')">
						<image src="../../static/lsimg/my_zhanghao2.png" mode="" style="width: 39rpx;height: 40rpx;"></image>
						<view class="hui_24 ">流水明细</view>
					</view>
					<view  class="zhanghao_item" @click="tiaozhuan('tixian')">
						<image src="../../static/lsimg/my_zhanghao3.png" mode="" style="width: 40rpx;height: 39rpx;"></image>
						<view class="hui_24 ">账号提现</view>
					</view>
					<view  class="zhanghao_item" @click="tiaozhuan('gaimima')">
						<image src="../../static/lsimg/my_zhanghao4.png" mode="" style="width: 40rpx;height:40rpx;"></image>
						<view class="hui_24 ">修改密码</view>
					</view>
				</view>
			</view>
		</view>

		<view class="padding_bottom"></view>
		<tabBar :currentPage="currentPage" :num='weidu'></tabBar>
	</view>
</template>

<script>
import tabBar from '@/components/tabbar/tabbar.vue';
import socket from 'plus-websocket';
export default {
	components: {
		tabBar
	},
	created() {},
	onShow() {
		this.huiqu_login();
	},
	onLoad(option) {
	
		//#ifdef APP-PLUS
	  	this.kaiqi();  
		//#endif
	},
	onHide() {
		// if(this.user){
			
		// 	 if(this.user.iszhiye==2){
		// 		uni.navigateTo({
		// 			url:'zhiye_renzheng'
		// 		})
		// 	}
			
		// }else{
		// 	uni.navigateTo({
		// 		url:'shiming_renzheng'
		// 	})
		// }
	},
	data() {
		return {
			currentPage: 'ls/my',
			user: '',
			img_url: uni.getStorageSync('img_url'),
			is_login: false,
			geshu:'',
		     weidu:0,
			 type:2
		};
	},
	methods: {
		qiehuan() {
			uni.switchTab({
				url: '/pages/index/my'
			});
		},
		huoqu_user() {
			// 获取用户信息
			this.$http
				.post({
					url: '/mlawyerapi/user/getlawyer'
				})
				.then(res => {
					this.user = res.data.user;
					
				});
		},
		huiqu_login() {
			this.$http
				.post({
					url: '/lawyer/login/islogin'
				})
				.then(res => {
					if (res.data.user != '') {
						this.is_login = true;
						this.huoqu_user();
				       this.huoqu_geshu()
						this.huoshu_weidu()
					} else {
						this.is_login = false;
						
					}
				});
		},
		huoshu_weidu(){
			this.$http
				.post({
					url: '/mlawyerapi/consult/messagecount'
				})
				.then(res => {
					this.weidu=res.data.messagecount
					
				});
		},
		huoqu_geshu(){
			this.$http
				.post({
					url: '/mlawyerapi/user/lawyercount'
				})
				.then(res => {
					
					this.geshu=res.data.count
				});
		},
       tiaozhuan(url){
		   
		   if(this.user!=null){
			   
			   if(this.user.isreal==2){
				   uni.navigateTo({
				   	url:'shiming_renzheng'
				   })
				   
			   }else if(this.user.iszhiye==2){
				   uni.navigateTo({
				   	url:'zhiye_renzheng'
				   })
			   }else{
				   uni.navigateTo({
				   	url:url
				   })
			   }

		   }else{
			   uni.navigateTo({
			   	url:'shiming_renzheng'
			   })
			   
		   }
		 
	   },
	   kaiqi() {
	   	let that = this;
	   	Object.assign(uni, socket);
	   	console.log(Object.assign(uni, socket));
	   	var url = that.$http.WebSocket_url;
	   	socket.connectSocket({
	   		url: 'ws://' + url + ':3348',
	   		success(data) {
	   			console.log('websocket已连接', JSON.stringify(data));
	   		}
	   	});
	   	socket.onSocketOpen(function(res) {
	   		console.log('WebSocket连接已打开！');
	   	});
	   	socket.onSocketError(function(res) {
	   		console.log('WebSocket连接打开失败，请检查！', JSON.stringify(res));
	   	});
	   	socket.onSocketMessage(function(res) {
	   		console.log('收到服务器内容：' + res.data);
	   		var data = JSON.parse(res.data);
	   
	   		if (data.type == 'init') {
	   			console.log('init');
	   			console.log('client_id', data.client_id);
	   			uni.request({
	   				url: that.$http.baseUrl + '/push/gatewayworker/bind',
	   				method: 'POST',
	   				data: {
	   					client_id: data.client_id,
	   					type:1
	   				},
	   
	   				success: function(resp) {
	   					console.log(resp, 'bind');
	   				},
	   				fail: function(resp) {}
	   			});
	   		} else if (data.type == 'say') {
	   			
	   			if (data.state) {
					console.log('say');
					that.huoshu_weidu()
	   				// void plus.push.createMessage('律师端收到一条新消息');
	   			}
	   		} else {
	   			console.log('else');
	   		}
	   		console.log(data);
	   	});
	   	socket.onSocketClose(function(res) {
	   		console.log('WebSocket 已关闭！');
	   	});
	   },
	},

};
</script>

<style>
page {
	background-color: #f7f7f7;
}

.ls_tx {
	width: 110rpx;
	height: 110rpx;
	border: 10rpx solid #d7e7e1;
	border-radius: 100%;
	margin-right: 32rpx;
}

.my_top_left {
	display: flex;
}

.my_top {
	display: flex;
	justify-content: space-between;
	padding: 30rpx;
	background-color: #ffffff;
}

.renzheng {
	width: 120rpx;
	text-align: center;
	line-height: 30rpx;
	height: 30rpx;
	background-color: #f43a51;
	border-radius: 15rpx;
	margin-top: 20rpx;
}

.my_top_left_r {
	padding-top: 20rpx;
}

.my_name {
	display: flex;
}

.renzheng1 {
	margin-left: 10rpx;
}

.renzheng1,
.renzheng2 {
	width: 17rpx;
	height: 17rpx;
	margin-right: 10rpx;
}

.renzheng3 {
	width: 18rpx;
	height: 14rpx;
}

.my_top_right {
	margin-top: 5rpx;
}

.my_ziliao_item {
	text-align: center;
	width: 25%;
}

.my_ziliao {
	display: flex;
	justify-content: space-between;
	background-color: #ffffff;
	padding-bottom: 30rpx;
}

.my_title {
	height: 100rpx;
	line-height: 100rpx;
	border-bottom: solid 2rpx #e2e2e2;
	margin-bottom: 30rpx;
}

.my_guanli {
	background-color: #ffffff;
	margin-top: 20rpx;
	padding: 0 18rpx 40rpx;
}
.jiedan_guanli{
	padding-bottom: 0;
}
.jiedan_item {
	align-items: center;
	display: flex;
	height: 140rpx;
	border-bottom: 2rpx dashed #e2e2e2;
	width: 100%;
}
.jiedan_item:last-child{
	border: none;
}
.jiedan_item_left{
	position: relative;
}
.jiedan_title{
	margin-bottom: 0;
}
.new{
	width: 26rpx;
	height: 26rpx;
	position: absolute;
	top: -12rpx;
	right: -12rpx;
}
.jiedan_item_right{
	margin-left: 30rpx;
	padding-right: 20rpx;
	position: relative;
	width: 100%;
}
.jiedan_item_txt{
	margin-top: 2rpx;
}
.jiedan_item_right::before{
	content: '';
	display: inline-block;
	 width: 12rpx;
		height: 22rpx;
		background: url(../../static/lsimg/go_r.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		right: 2rpx;
		top: 50%;
		transform: translate(0,-50%);
}
.my_list {
	display: flex;
	/* justify-content: space-between; */
	flex-wrap: wrap;
}
.my_bottom {
	padding: 0 30rpx;
}
.ls_item {
	text-align: center;
	width: 33.33%;
	margin-bottom: 60rpx;
}

.ls_item image {
	width: 51rpx;
	height: 51rpx;
	margin-bottom: 30rpx;
}

.ls_guanli {
	padding-bottom: 0rpx;
}

.wangzhan_item {
	width: 25%;
	text-align: center;
}

.wangzhan_item image {
	width: 74rpx;
	height: 74rpx;
	margin-bottom: 10rpx;
}

.zhanghao_guanli {
	margin-bottom: 30rpx;
}

.zhanghao_item {
	width: 25%;
	text-align: center;
}

.zhanghao_item image {
	width: 40rpx;
	height: 39rpx;
	margin-bottom: 25rpx;
}
.my_top_weoienglu {
	display: flex;
	align-items: center;
}

.go_denglu {
	margin-right: 20rpx;
	border: 2rpx solid #eeeeee;
	border-radius: 6rpx;
	width: 120rpx;
	height: 50rpx;
	line-height: 50rpx;
	text-align: center;
}
.go_zhuce {
	border-radius: 6rpx;
	width: 120rpx;
	height: 50rpx;
	line-height: 50rpx;
	border: 2rpx solid #eeeeee;
	text-align: center;
}
.jiedan_item_right_txt{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.jiedan_item_right_txt_left{
	width: 89%;
}
.zixun_num{
	background-color: #f43a51;
	border-radius: 20rpx;
	color: #FFFFFF;
	font-size: 22rpx;
	padding: 2rpx 6rpx;
}
</style>
