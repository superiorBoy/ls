<template>
	<view class="">
		<view class="head">
			<view class="head_back"></view>
			<view class="head_center hei_38_bold">消息</view>
			<view class="head_right"></view>
		</view>
		<view class="zi_body">
			<view class="xiaoxi_top">
				<view class="xiaoxi_top_list">
					<view class="xiaoxi_top_list_left">
						<view class="xiaoxi_tx"><image src="@/static/img/fensi_icon.png" mode=""></image></view>
						<view class="xiaoxi_top_list_left_txt">
							<view class="hei_30_bold top_txt">粉丝</view>
							<view class="qian_26">花落谁家关注了你</view>
						</view>
					</view>
					<view class="top_shijian qian_20"><!-- 10-16 --></view>
				</view>
				<view class="xiaoxi_top_list" @click="go_gonggao">
					<view class="xiaoxi_top_list_left">
						<view class="xiaoxi_tx"><image src="../../static/lsimg/xiaoxi_tongzhi.png" mode=""></image></view>
						<view class="xiaoxi_top_list_left_txt">
							<view class="hei_30_bold top_txt">公告</view>
							<view class="qian_26">查看公告</view>
						</view>
					</view>
					<view class="top_shijian qian_20"><!-- 10-16 --></view>
				</view>
				<view class="xiaoxi_top_list">
					<view class="xiaoxi_top_list_left">
						<view class="xiaoxi_tx"><image src="../../static/lsimg/xiaoxi_kefu.png" mode=""></image></view>
						<view class="xiaoxi_top_list_left_txt" @click="go_kefu()">
							<view class="hei_30_bold top_txt">客服</view>
							<view class="qian_26">点击查看客服对话及售后通知</view>
						</view>
					</view>
					<view class="top_shijian qian_20">
						<!-- 10-16 -->
						<view class="" v-for="item in xiaoxi_list" v-if="item.user_to && item.user_to.userid == 7">
							<text class="ke_weidu" v-if="item.messagecount != 0">{{ item.messagecount }}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="xiaoxi_list">
				<view class="xiaoxi_item" v-for="item in xiaoxi_list" @click="go_chat(item.user_to.userid)" v-if="item.user_to && item.user_to.userid != 7">
					<view class="xiaoxi_item_left">
						<view class="xiaoxi_tx">
							<image :src="img_url + item.user_to.photourl" mode=""></image>
							<text class="xiaoxi_num bai_20" v-if="item.messagecount > 0">{{ item.messagecount }}</text>
						</view>
						<view class="xiaoxi_item_left_name">
							<view class="hei_30_bold xiaoxi_item_name">{{ item.user_to.mobile }}</view>
							<view class="qian_26 txt_over">
								<view class="xiaoxi_title" v-if="item.msgtype==1">
								<u-parse :content="replace_em(item.content)"></u-parse>	
									</view>
									<!-- <view class="" v-if="item.msgtype==2">
										[图片]
									</view> -->
									<view class="" v-if="item.msgtype!=1">
									{{item.msgtype==2?'[图片]':item.msgtype==3?'[电话咨询]':item.msgtype==4?'[在线咨询]':item.msgtype==5?'[欢迎]':item.msgtype==6?'[电话咨询付费]':item.msgtype==7?'[在线咨询付费]':item.msgtype==8?'[订购]':item.msgtype==9?'[咨询超时]':item.content}}
									</view>
								<!-- <view class="xiaoxi_title" v-if="item.msgtype == 1"><u-parse :content="replace_em(item.content)"></u-parse></view>
								<view class="" v-if="item.msgtype == 2">[图片]</view>
								<view class="" v-if="item.msgtype!=2&&item.msgtype!=1">
									{{item.content}}
								</view> -->
							</view>
						</view>
					</view>
					<view class="xiaoxi_item_right qian_20">{{ item.addtime | timeStamp }}</view>
				</view>
			</view>
		</view>
		<view class="padding_bottom"></view>
		<tabBar :currentPage="currentPage" ref="ls_mainindex"></tabBar>
	</view>
</template>

<script>
import uParse from '@/components/feng-parse/parse.vue';
import tabBar from '@/components/tabbar/tabbar.vue';
import socket from 'plus-websocket';
export default {
	components: {
		uParse,
		tabBar
	},
	created() {},
	onShow() {
		this.huoqu_xiaoxilist();
		this.huoqu_user()
		this.$http
			.post({
				url: '/lawyer/login/islogin'
			})
			.then(res => {
				if (res.data.user != '') {
				this.$refs.ls_mainindex.huoqunum();
				} else {
					this.is_login = false;
					
				}
			});
		
	},
	onLoad() {
		// #ifdef H5
		this.connectSocketInit();
		// #endif
		// #ifdef APP-PLUS
		this.app_lianjie();
		// #endif
		
	},
	data() {
		return {
			currentPage:'ls/xiaoxi',
			tabs: ['图文咨询', '电话咨询'],
			img_url: uni.getStorageSync('img_url'),
			active: '0',
			xiaoxi_list: [],
			weidu:0
		};
	},
	methods: {
		huoqu_user() {
			
			// 获取用户信息
			this.$http
				.post({
					url: '/mlawyerapi/user/getlawyer'
				})
				.then(res => {
					if(res.data.user.isreal==2){
						uni.navigateTo({
							url:'shiming_renzheng'
						})
					}else if(res.data.user.iszhiye==2){
						uni.navigateTo({
							url:'zhiye_renzheng'
						})
					}else{
						
						
					}
				});
		},
		app_lianjie() {
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

					// that.$http
					// 	.post({
					// 		url: '/push/gatewayworker/bind',
					// 		data: {
					// 			client_id: data.client_id
					// 		}
					// 	})
					// 	.then(res => {
					// 		console.log(res, 'bind');
					// 	});
				} else if (data.type == 'say') {
					console.log('say');
					that.huoqu_xiaoxilist();
					void plus.push.createMessage('律师端收到一条新消息');
					if (data.state) {
					
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
		xiaoxi_qiehuan(index) {
			this.active = index;
		},
		replace_em(str) {
			str = str.replace(/\</g, '&lt;');
			str = str.replace(/\>/g, '&gt;');
			str = str.replace(/\n/g, '<br/>');
			str = str.replace(/\[em_([0-9]*)\]/g, '<img src="../../static/bkhumor-emoji/$1.gif" border="0" style="width:40rpx"/>');
			return str;
		},
		go_chat(id) {
			uni.navigateTo({
				url: 'chat?userid=' + id
			});
		},
		go_gonggao() {
			uni.navigateTo({
				url: '../index/gonggao'
			});
		},
		go_kefu() {
			uni.navigateTo({
				url: 'chat?userid=7'
			});
		},
		huoqu_xiaoxilist() {
			
			this.$http
				.post({
					url: '/mlawyerapi/consult/messagelist'
				})
				.then(res => {
					this.xiaoxi_list = res.data.messagelist;
					// var num=0
					// for (var i in res.data.messagelist){
					// num+=res.data.messagelist[i].messagecount
					// }
					
					// this.weidu=num
					
				});
		},
		connectSocketInit() {
			let that = this;
			var url = window.location.host;
			var ws = new WebSocket('ws://' + url + ':3348');
			ws.onopen = function(evt) {
				console.log('Connection open ...');
				// ws.send("你好");
			};
			ws.onmessage = function(evt) {
				console.log('Received Message: ' + evt.data);
				// json数据转换成js对象
				var data = JSON.parse(evt.data);

				if (data.type == 'init') {
					console.log('init');
					console.log('client_id', data.client_id);

					that.$http
						.post({
							url: '/push/gatewayworker/bind',
							data: {
								client_id: data.client_id,
								type:1
							}
						})
						.then(res => {
							console.log(res, 'bind');
						});
				} else if (data.type == 'say') {
					console.log('say');
					that.huoqu_xiaoxilist();
					
					
				} else {
					console.log('else');
				}
			};
			ws.onclose = function(evt) {
				console.log('Connection closed.');
			};
			ws.onerror = function(evt) {
				console.log('WebSocketError!', evt);
			};
		}
	},
	filters: {
		timeStamp: function(value) {
			if (value == null) {
				return 'null';
			}
			var i = (value + '').length;
			while (i++ < 13) value = value + '0';
			value = Number(value);
			var date = new Date(value);
			//date.setTime(value);
			var month = date.getMonth() + 1;
			var hours = date.getHours();
			if (hours < 10) hours = '0' + hours;
			var minutes = date.getMinutes();
			if (minutes < 10) minutes = '0' + minutes;
			var time = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + hours + ':' + minutes;
			return time;
		}
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}
.xiaoxi_top {
	background-color: #ffffff;
	margin-bottom: 20rpx;
}
.xiaoxi_top_list {
	padding: 30rpx 30rpx;
	display: flex;
	justify-content: space-between;
	position: relative;
	align-items: center;
}

.xiaoxi_top_list::before {
	content: '';
	display: inline-block;
	position: absolute;
	bottom: 0;
	right: 0;
	width: 80%;
	height: 2rpx;
	background-color: #eeeeee;
}
.top_txt {
	margin-bottom: 10rpx;
}
.xiaoxi_top_list:last-child {
	margin-bottom: 0;
}
.xiaoxi_top_list:last-child::before {
	content: none;
}
.xiaoxi_top_list_left {
	display: flex;
}

.xiaoxi_top_list_left image {
	width: 84rpx;
	height: 84rpx;
	margin-right: 30rpx;
}
.xiaoxi_list {
	background-color: #ffffff;
}
.xiaoxi_item {
	padding: 30rpx 30rpx;
	display: flex;
	position: relative;
	justify-content: space-between;
}
.xiaoxi_item::before {
	content: '';
	display: inline-block;
	position: absolute;
	bottom: 0;
	right: 0;
	width: 80%;
	height: 2rpx;
	background-color: #eeeeee;
}
.xiaoxi_item:last-child::before {
	content: none;
}
.xiaoxi_item_left {
	display: flex;
}
.xiaoxi_tx {
	width: 84rpx;
	height: 84rpx;
	margin-right: 30rpx;
	position: relative;
}
.xiaoxi_num {
	position: absolute;
	right: 0;
	top: -10rpx;
	background-color: #ff5267;
	border-radius: 100%;
	width: 35rpx;
	height: 35rpx;
	padding: 2rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-align: center;
	line-height: 35rpx;
}
.xiaoxi_tx image {
	width: 84rpx;
	height: 84rpx;
	border-radius: 100%;
}
.xiaoxi_btn {
	width: 160rpx;
	height: 50rpx;
	background-color: #ffffff;
	border-radius: 25rpx;
	border: solid 1rpx #ff2b46;
	line-height: 50rpx;
	text-align: center;
	margin-top: 10rpx;
}
.xiaoxi_item_name {
	margin-bottom: 10rpx;
}
.txt_over {
	max-width: 450rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.ke_weidu {
	background-color: #ff5267;
	border-radius: 100%;
	width: 32rpx;
	height: 32rpx;
	display: inline-block;
	padding: 2rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-align: center;
	line-height: 32rpx;
}
.xiaoxi_title .wxParse{
	width: 340rpx;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	
}
</style>
