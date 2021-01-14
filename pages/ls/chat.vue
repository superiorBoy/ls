<template>
	<view class="">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">{{ title }}</view>
			<view class=" head_right hei_30_bold"></view>
		</view>
		<view class="zi_body">
			<view :class="['chat_body', bt_show ? 'chat_body_jia' : '']" @click="tan_hide">
				<view class="time qian_20" v-if="message != ''">{{ message[0].addtime | timeStamp }}</view>
				<view v-for="(item, index) in message">
					<view class="time qian_20" v-if="index > 1 && message[index].addtime - message[index - 1].addtime > 300">{{ message[index].addtime | timeStamp }}</view>
					<view class="chat_list chat_right" v-if="item.userid_from != userid">
						<view class="chat_right_txt hei_30">
							<!-- {{item.content}} -->
							<!-- <image :src="url+img"  mode="" v-if="item.msgtype==4" style="height: 40rpx;width: 40rpx;"></image> -->
							<image :src="img_url + item.content" mode="widthFix" v-if="item.msgtype == 2" style="max-width: 100rpx;"></image>
							<view v-if="item.msgtype == 1"><u-parse :content="replace_em(item.content)"></u-parse></view>

							<image :src="item.content" mode="widthFix" v-if="item.to != undefined" style="max-width: 100rpx;"></image>
						</view>
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>

					<view class="chat_list chat_left" v-if="item.userid_from == userid">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<text class="ls_name">{{ title }}</text>
							<image :src="img_url + item.content" mode="widthFix" v-if="item.msgtype == 2" style="max-width: 100rpx;"></image>
							<view v-if="item.msgtype == 1"><u-parse :content="replace_em(item.content)"></u-parse></view>
						</view>
					</view>
				</view>

				<!-- 	<view class="chat_list chat_left">
					<image src="@/static/lsimg/yh_tx.png" mode="" class="tx"></image>
					<view class="chat_left_txt hei_30">
						就是读书期间，在外面打架被判刑了可以保出来的?
					</view>
				</view>
				<view class="chat_list chat_right">
					<view class="chat_right_txt hei_30">
						就是读书期间，在外面打架被判刑了可以保出来的?
					</view>
					<image src="@/static/lsimg/yh_tx.png" mode="" class="tx"></image>
				</view> -->
			</view>

			<view class="zhanwei" v-if="isShowEmj"></view>
			<view class="chat_bottom">
				<view class="chat_bottom_top">
					<!-- <image src="@/static/lsimg/chat_yuyin.png" mode=""></image> -->
					<image src="@/static/lsimg/chat_biaoqing.png" mode="" @tap="showEmj"></image>
					<input type="text" value="" v-model="chat_txt" confirm-type="send" @confirm="send" class="hei_26" />

					<image src="@/static/lsimg/chat_jia.png" mode="" @click="jia"></image>
					<text class="fasong" @click="send()">发送</text>
				</view>
				<emotion @emotion="handleEmj" v-if="isShowEmj"></emotion>
				<view class="chat_bottom_bottom hui_26" v-if="bt_show">
					<view class="chat_bt_item" @click="call">
						<image src="@/static/lsimg/chat_dianhua.png" mode=""></image>
						<view>打电话给TA</view>
					</view>
					<view class="chat_bt_item" @click="up_img">
						<image src="@/static/lsimg/chat_tupian.png" mode=""></image>
						<view>发送图片</view>
					</view>
					<view class="chat_bt_item">
						<picker :range="changyong_arry" @change="changyong_change">
							<image src="@/static/lsimg/chat_changyong.png" mode=""></image>
							<view>常用语</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import emotion from '@/components/bkhumor-emoji/index.vue';
import uParse from '@/components/feng-parse/parse.vue';
import socket from 'plus-websocket';
export default {
	created() {},
	components: {
		emotion,
		uParse
	},
	onLoad(option) {
		this.userid = option.userid;
		this.huoqu_xiaoxi_list();
		// 获取用户信息
		this.$http
			.post({
				url: '/mlawyerapi/user/getlawyer'
			})
			.then(res => {
				this.user = res.data.user;
			});

		// #ifdef H5
		this.connectSocketInit();
		// #endif
		// 进入这个页面的时候创建websocket连接【整个页面随时使用】
		// this.connectSocketInit();
		// #ifdef APP-PLUS
		this.app_lianjie();
		// #endif
	},
	onShow() {},
	onUnload() {
		console.log('onUnload');
		// #ifdef APP-PLUS
		socket.closeSocket();
		// #endif
	},
	data() {
		return {
			title: '',
			user: '',
			bt_show: false,
			url: '../../static/bkhumor-emoji/',
			img: '11.gif',
			chat_txt: '',
			changyong: '',
			changyong_arry: ['你好,有什么可以帮助到您？', '客服的上班时间是早晨八点到晚上八点', '好的，有什么事情可以找客服帮您疑难解答'],
			isShowEmj: false,
			img_url: uni.getStorageSync('img_url'),
			message: [],
			page: 0,
			is_all: false,
			userid: '',
			dianhua: '',
			is_fa: false
		};
	},
	//下拉刷新
	onPullDownRefresh: function() {
		// this.getList();

		setTimeout(function() {
			uni.showToast({
				title: '没有更多内容了',
				duration: 2000,
				icon: 'none'
			});
			uni.stopPullDownRefresh();
		}, 1000);
	},
	// stopPullDownRefresh:function(){

	// },
	methods: {
		//上拉加载
		onReachBottom() {
			// uni.showToast({
			// 	title: '没有更多内容了',
			// 	duration: 2000,
			// 	icon: "none"
			// });
		},
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_xiaoxi_list() {
			this.$http
				.post({
					url: '/mlawyerapi/consult/chatdeatils',
					data: {
						page: this.page,
						userid: this.userid
					}
				})
				.then(res => {
					this.message = res.data.message;
					this.title = res.data.user_to.nickname;
					this.dianhua = res.data.user_to.mobile;
				});
		},
		app_lianjie() {
			let that = this;
			Object.assign(uni, socket);
			console.log(Object.assign(uni, socket));
			var url = that.$http.WebSocket_url
			
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
							  method:'POST',
							  data: {
								client_id: data.client_id
							  },

							  success: function(resp) {
								
							console.log(resp, 'bind');
							
							  },
							  fail: function(resp) {
							  
							  }
							})
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
					if (data.state) {
						var xiaoxi = {
							photourl_form: data.userid_from_pic,
							userid_to: data.userid_to,
							photourl_to: data.userid_to_pic,
							content: data.msg,
							msgtype: data.state,
							userid_from: that.ls_id
						};
						that.message.push(xiaoxi);
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

		handleEmj(i) {
			console.log(i);
			if (i == '[em_98]') {
				//匹配最后一个表情符号并删除。
				this.chat_txt = this.chat_txt.replace(/(\[[^\]]+\]|[\s\S])$/, '');
			} else {
				this.chat_txt += i;
			}
		},
		replace_em(str) {
			str = str.replace(/\</g, '&lt;');
			str = str.replace(/\>/g, '&gt;');
			str = str.replace(/\n/g, '<br/>');
			str = str.replace(/\[em_([0-9]*)\]/g, '<img src="../../static/bkhumor-emoji/$1.gif" border="0" style="width:40rpx"/>');
			return str;
		},
		handleEmj(i) {
			console.log(i);
			if (i == '[em_98]') {
				//匹配最后一个表情符号并删除。
				this.chat_txt = this.chat_txt.replace(/(\[[^\]]+\]|[\s\S])$/, '');
			} else {
				this.chat_txt += i;
			}
		},
		showEmj() {
			let bool = !this.isShowEmj;
			if (bool) {
				this.emojiIcon = 'cuIcon-keyboard';
				this.bt_show = false;
			} else {
				this.emojiIcon = 'cuIcon-emoji';
			}

			this.isShowEmj = bool;
			this.$emit('show');
		},
		jia() {
			this.bt_show = !this.bt_show;
			this.isShowEmj = false;
		},
		input_change() {
			if (this.chat_txt == '') {
				this.is_fa = false;
			} else {
				this.is_fa = true;
			}
		},
		send() {
			console.log(this.chat_txt);

			var data = {
				content: '' + this.chat_txt,
				userid_from: '' + this.id
			};

			var txt = this.replace_em(this.chat_txt);

			if (txt == '') {
				uni.showToast({
					title: '请输入内容',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			this.$http
				.post({
					url: '/push/gatewayworker/sendmessage1.html',
					data: {
						userid_to: this.userid,
						msg: this.chat_txt,
						type: 1
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.chat_txt = '';
						var data = {
							content: txt,
							msgtype: 1,
							photourl_form: this.user.photourl
						};
						this.message.push(data);
					}
				});
		},
		call() {
			uni.makePhoneCall({
				// 手机号
				phoneNumber: this.dianhua + '',
				// 成功回调
				success: res => {
					console.log('调用成功!');
				},
				// 失败回调
				fail: res => {
					console.log('调用失败!');
				}
			});
		},
		up_img() {
			let that = this;
			uni.chooseImage({
				success(res) {
					console.log(res);
					// that.zhiye_zhao = res.tempFilePaths[0];

					// that.urlTobase64(res.tempFilePaths[0])
					uni.request({
						url: res.tempFilePaths[0],
						method: 'GET',
						responseType: 'arraybuffer',
						success: ress => {
							let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64
							base64 = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示的哦
							console.log(base64);

							that.$http
								.post({
									url: '/index/zixun/uploadimgmessage',
									data: {
										img: base64
									}
								})
								.then(res => {
									if (res.code == 0) {
										that.send_img(res.data.img);
									}
								});
						}
					});
				}
			});
		},
		send_img(img) {
			this.$http
				.post({
					url: '/push/gatewayworker/sendmessage1.html',
					data: {
						userid_to: this.userid,
						msg: img,
						type: 2
					}
				})
				.then(res => {
					if (res.code == 0) {
						var data = {
							content: img,
							msgtype: 2,
							photourl_form: this.user.photourl
						};
						this.message.push(data);
					}
				});
		},
		changyong_change(data) {
			this.changyong = this.changyong_arry[data.detail.value];
			this.chat_txt = this.changyong_arry[data.detail.value];
			console.log(this.changyong);
		},
		tan_hide() {
			this.isShowEmj = false;
			this.bt_show = false;
		},
		connectSocketInit() {
			var url = window.location.host;
			console.log(url);
			var ws = new WebSocket('ws://' + url + ':3348');
			ws.onopen = function(evt) {
				console.log('Connection open ...');
				// ws.send("你好");
			};
			ws.onmessage = function(evt) {
				var that = this;
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
								client_id: data.client_id
							}
						})
						.then(res => {
							console.log(res, 'bind');
						});
				} else if (data.type == 'say') {
					console.log('say');
					if (data.state) {
						var xiaoxi = {
							photourl_form: data.userid_from_pic,
							userid_to: data.userid_to,
							photourl_to: data.userid_to_pic,
							content: data.msg,
							msgtype: data.state,
							userid_from: that.ls_id
						};
						that.message.push(xiaoxi);
					}
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
.head {
	border-bottom: 2rpx solid #e8e8e8;
}

.time {
	margin: 24rpx auto;
	text-align: center;
	width: 300rpx;
	height: 28rpx;
	background-color: #f6f6f6;
	border-radius: 14rpx;
	text-align: center;
	line-height: 28rpx;
}

.chat_list {
	display: flex;
	align-items: flex-start;
	margin-bottom: 30rpx;
}

.chat_list .tx {
	width: 94rpx;
	height: 94rpx;
	border-radius: 100%;
}

.chat_left .tx {
	margin-right: 20rpx;
}

.chat_body {
	padding: 0 30rpx 100rpx;
	overflow: auto;
}

.chat_body_jia {
	padding-bottom: 354rpx;
}

.chat_left_txt {
	max-width: 470rpx;
	border: solid 2rpx #d9d9d9;
	position: relative;
	padding: 10rpx 20rpx;
	border-radius: 10rpx;
	top: 20rpx;
	word-break: break-all;
}

.chat_left_txt::before {
	content: '';
	display: inline-block;
	position: absolute;
	top: 24rpx;
	left: -10rpx;
	width: 10rpx;
	height: 16rpx;
	background: url(../../static/lsimg/chat_left.png) no-repeat;
	background-size: 100% 100%;
}
.chat_right_txt image,
.chat_left_txt image {
	max-width: 100%;
	max-height: 400rpx;
}
.chat_right_txt {
	max-width: 470rpx;
	background-color: #f6f6f6;
	position: relative;
	padding: 10rpx 20rpx;
	border-radius: 10rpx;
	top: 20rpx;
	word-break: break-all;
}

.chat_right_txt::before {
	content: '';
	display: inline-block;
	position: absolute;
	top: 24rpx;
	right: -10rpx;
	width: 10rpx;
	height: 16rpx;
	background: url(../../static/lsimg/chat_r.png) no-repeat;
	background-size: 100% 100%;
}

.chat_right {
	justify-content: flex-end;
	display: flex;
}

.chat_right .tx {
	margin-left: 20rpx;
}

.chat_bottom_top image {
	width: 56rpx;
	height: 56rpx;
}

.chat_bottom_top {
	display: flex;
	align-items: center;
	height: 101rpx;
	background-color: #f7f7f7;
	border: solid 1rpx #d9d9d9;
	padding: 0 30rpx;
	justify-content: space-between;
}

.chat_bottom_top input {
	width: 438rpx;
	height: 76rpx;
	background-color: #ffffff;
	border-radius: 8rpx;
	border: solid 2rpx #d9d9d9 !important;
	padding-left: 10rpx;
	box-sizing: border-box;
}

.chat_bottom_bottom {
	background-color: #fafafa;
	display: flex;
	justify-content: space-between;
	padding: 40rpx 0;
}

.chat_bt_item {
	text-align: center;
	width: 33.33%;
}

.chat_bt_item image {
	width: 126rpx;
	height: 126rpx;
	background-color: #ffffff;
	border-radius: 30rpx;
}

.chat_bottom {
	position: fixed;
	bottom: 0;
	width: 100%;
}
.slider {
	width: 375;
	height: 128;
}
.slider-emoji {
	width: 375;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
}
.slider-emoji-icon {
	width: 53%;
	text-align: center;
	padding: 10.5 0;
}
/* <!-- 设置最后一列左靠齐 --> */
.lastbox {
	justify-content: flex-start;
}
.zhanwei {
	height: 360rpx;
}
.ls_name {
	position: absolute;
	top: -38rpx;
	display: inline-block;
	width: 400rpx;
	font-size: 20rpx;
	left: 0;
}
.fasong {
	background-color: #07c160;
	color: #ffffff;
	font-size: 30rpx;
	width: 98rpx;
	height: 74rpx;
	line-height: 74rpx;
	text-align: center;
	display: inline-block;
	border-radius: 10rpx;
}
</style>
