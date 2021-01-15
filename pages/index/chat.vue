<template>
	<view class="">
		<view class="head">
			<view class="head_back" style="width: 10%;"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center " style="width: 80%;">
				<view class="hei_38_bold top_title">{{ title }}</view>
				<view class="qian_20 chat_lvsuo">{{ ls_xinxi.lvsuo }}</view>
			</view>
			<view class=" head_right hei_30_bold" style="width: 10%;"></view>
		</view>

		<view class="zi_body">
			<view class="chat_jiage_wai">
				<view class="chat_jiage">
					<view class="chat_jiage_item chat_jiage_item1">
						<view class="bai_28">在线图文咨询</view>
						<view class="bai_20 chat_jiage_num">
							<text class="bai_30">{{ chat_xinxi.chatprice == 0 ? '未报价' : chat_xinxi.chatprice }}</text>
							<text v-if="chat_xinxi.chatprice != 0">元/小时</text>
						</view>
						<button type="" v-if="chat_xinxi.chatprice != 0" @click="fufei(1)">立即咨询</button>
						<button type="" v-if="chat_xinxi.chatprice == 0">未开启</button>
					</view>
					<view class="chat_jiage_item chat_jiage_item2">
						<view class="bai_28">付费电话咨询</view>
						<view class="bai_20 chat_jiage_num">
							<text class="bai_30">{{ chat_xinxi.phoneprice == 0 ? '未报价' : chat_xinxi.phoneprice }}</text>

							<text v-if="chat_xinxi.phoneprice != 0">元/20分钟</text>
						</view>
						<button type="" @click="go_zixun(2)" v-if="chat_xinxi.phoneprice != 0">付费咨询</button>
						<button type="" v-if="chat_xinxi.phoneprice == 0">未开启</button>
					</view>
					<view class="chat_jiage_item chat_jiage_item3">
						<view class="bai_28">免费拨打电话</view>
						<view class="bai_20 xianshi_dianhua">{{ dian_num }}</view>
						<button type="" @click="xianshi()">点击查看</button>
					</view>
				</view>
			</view>
			<view :class="['chat_body', bt_show ? 'chat_body_jia' : '']" @click="tan_hide()">
				<view class="time qian_20" v-if="message != ''">{{ message[0].addtime | timeStamp }}</view>
				<view v-for="(item, index) in message">
					<view class="time qian_20" v-if="index > 1 && message[index].addtime - message[index - 1].addtime > 300">{{ message[index].addtime | timeStamp }}</view>
					<view class="chat_list chat_left" v-if="item.userid_from == ls_id">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<text class="ls_name">{{ title }}</text>
							<image :src="img_url + item.content" mode="widthFix" v-if="item.msgtype == 2" style="max-width: 100rpx;"></image>
							<view v-if="item.msgtype == 1"><u-parse :content="replace_em(item.content)"></u-parse></view>
						</view>
					</view>

					<view class="chat_list chat_right" v-if="item.userid_from != ls_id">
						<view class="chat_right_txt hei_30">
							<!-- {{item.content}} -->
							<!-- <image :src="url+img"  mode="" v-if="item.msgtype==4" style="height: 40rpx;width: 40rpx;"></image> -->

							<image :src="img_url + item.content" mode="widthFix" v-if="item.msgtype == 2" style="max-width: 100rpx;"></image>
							<view v-if="item.msgtype == 1"><u-parse :content="replace_em(item.content)"></u-parse></view>
						</view>
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
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
				<view class="aaaaaa">
					
				</view>
			</view>

			<view class="zhanwei" v-if="isShowEmj"></view>
			<view class="chat_bottom">
				<view class="chat_bottom_top">
					<!-- <image src="@/static/lsimg/chat_yuyin.png" mode=""></image> -->
					<image src="@/static/lsimg/chat_biaoqing.png" mode="" @tap="showEmj"></image>
					<input type="text" value="" v-model="chat_txt" confirm-type="send" @confirm="send" class="hei_26" @focus="huojiao" />
					<image src="@/static/lsimg/chat_jia.png" mode="" @click="jia"></image>
					<text class="fasong" @click="send()">发送</text>
				</view>
				<emotion @emotion="handleEmj" v-if="isShowEmj"></emotion>
				<view class="chat_bottom_bottom hui_26" v-if="bt_show">
					<view class="chat_bt_item" @click="up_img">
						<image src="@/static/lsimg/chat_tupian.png" mode=""></image>
						<view>发送图片</view>
					</view>
					<view class="chat_bt_item" @click="call">
						<image src="@/static/lsimg/chat_dianhua.png" mode=""></image>
						<view>电话咨询</view>
					</view>
					<view class="chat_bt_item" @click="dianzan">
						<image src="@/static/img/chat_zan.png" mode=""></image>
						<view>点赞回复</view>
					</view>
					<view class="chat_bt_item" @click="pingjia">
						<image src="@/static/img/chat_pingjia.png" mode=""></image>
						<view>评价律师</view>
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
		this.ls_id = option.lsid;
		this.huoqu_xiaoxi_list();
		// 获取用户信息
		this.$http
			.post({
				url: '/mapi/user/user'
			})
			.then(res => {
				this.user = res.data.user;
			});

		this.huqu_ls_xinxi();
		// #ifdef H5
		this.connectSocketInit();
		// #endif
		// 进入这个页面的时候创建websocket连接【整个页面随时使用】
		// this.connectSocketInit();
		// #ifdef APP-PLUS

		this.app_lianjie();
		// #endif
	},
	onShow() {
		

	},
	onHide() {},
	onUnload() {
		console.log('onUnload');
		// #ifdef APP-PLUS
		// socket.closeSocket();
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
			id: '100004',
			img_url: uni.getStorageSync('img_url'),
			message: [],
			page: 0,
			is_all: false,
			ls_id: '',
			dianhua: '',
			chat_xinxi: '',
			dian_num: '点击显示号码',
			ls_xinxi: '',
			is_fa: false,
			socketTask: null,
			// 确保websocket是打开状态
			is_open_socket: false
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
					url: '/mapi/consult/chatdeatils',
					data: {
						page: this.page,
						userid: this.ls_id
					}
				})
				.then(res => {
					this.message = res.data.message;
					this.title = res.data.user_to.nickname;
					this.dianhua = res.data.user_to.mobile;
					this.chat_xinxi = res.data.user_to;
					setTimeout(() => {
					   uni.pageScrollTo({scrollTop: 99999, duration: 0});
					}, 100)
				});
				
				
		},
		huojiao(){
			setTimeout(() => {
			   uni.pageScrollTo({scrollTop: 99999, duration: 0});
			}, 100)
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
							client_id: data.client_id
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
						setTimeout(() => {
						   uni.pageScrollTo({scrollTop: 99999, duration: 0});
						}, 100)
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

		dianzan() {
			uni.showToast({
				title: '点赞成功',
				duration: 2000
			});
		},
		huqu_ls_xinxi() {
			this.$http
				.post({
					url: '/mapi/lawyer/lawyer',
					data: {
						lawyerid: this.ls_id
					}
				})
				.then(res => {
					this.ls_xinxi = res.data.lawyer;
				});
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
		// input_change(){
		// 	if(this.chat_txt==''){
		// 		this.is_fa=false
		// 	}else{
		// 		this.is_fa=true
		// 	}

		// },
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
					url: '/push/gatewayworker/sendmessage.html',
					data: {
						userid_to: this.ls_id,
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
						setTimeout(() => {
						   uni.pageScrollTo({scrollTop: 99999, duration: 0});
						}, 100)
					}
				});
		},
		send() {
			console.log(this.chat_txt);
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
					url: '/push/gatewayworker/sendmessage.html',
					data: {
						userid_to: this.ls_id,
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
						setTimeout(() => {
						   uni.pageScrollTo({scrollTop: 99999, duration: 0});
						}, 100)
					}
				});

			// this.chat_txt=''
		},
		call() {
			uni.makePhoneCall({
				phoneNumber: this.dianhua + '',
				success: res => {
					console.log('调用成功!');
				},
				fail: res => {
					console.log(res);
					console.log('调用失败!');
				}
			});
		},

		changyong_change(data) {
			this.changyong = this.changyong_arry[data.detail.value];
			console.log(this.changyong);
		},
		pingjia() {
			uni.navigateTo({
				url: 'pingjia?lsid=' + this.chat_xinxi.userid
			});
		},
		tan_hide() {
			this.isShowEmj = false;
			this.bt_show = false;
		},
		// 显示电话号码
		xianshi() {
			this.dian_num = this.dianhua;
		},
		// 去付费
		fufei(type) {
			uni.navigateTo({
				url: 'pay?lawyerid=' + this.ls_id + '&type=' + type 
			});
		},
		go_zixun(type) {
			uni.navigateTo({
				url: 'pay?lawyerid=' + this.ls_id + '&type=' + type 
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
						setTimeout(() => {
						   uni.pageScrollTo({scrollTop: 99999, duration: 0});
						}, 100)
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
	margin: 24rpx auto 40rpx;
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
	word-break: break-all;
	padding: 10rpx 20rpx;
	border-radius: 10rpx;
	background-color: #f6f6f6;
	position: relative;
	top: 20rpx;
}
.ls_name {
	position: absolute;
	top: -38rpx;
	display: inline-block;
	width: 400rpx;
	font-size: 20rpx;
	left: 0;
}
.chat_right_txt {
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
	background: url(../../static/img/index_chat_l.png) no-repeat;
	background-size: 100% 100%;
}
.chat_right_txt image,
.chat_left_txt image {
	max-width: 100%;
	max-height: 400rpx;
}

.chat_right_txt::before {
	content: '';
	display: inline-block;
	position: absolute;
	top: 24rpx;
	right: -10rpx;
	width: 10rpx;
	height: 16rpx;
	background: url(../../static/img/index_chat_r.png) no-repeat;
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
.chat_jiage_item {
	width: 217rpx;
	height: 210rpx;
	border-radius: 10rpx;
	text-align: center;
	padding: 24rpx 0;
	box-sizing: border-box;
}
.chat_jiage_item button {
	width: 157rpx;
	height: 50rpx;
	background-color: #ffffff;
	border-radius: 5rpx;
	font-size: 28rpx;
	line-height: 50rpx;
}
.chat_jiage_item1 {
	background: url(../../static/img/jia1.png) no-repeat;
	background-size: 100% 100%;
}
.chat_jiage_item2 {
	background: url(../../static/img/jia2.png) no-repeat;
	background-size: 100% 100%;
}
.chat_jiage_item3 {
	background: url(../../static/img/jia3.png) no-repeat;
	background-size: 100% 100%;
}
.chat_jiage_item1 button {
	color: #0eb77e;
}
.chat_jiage_item2 button {
	color: #bcb198;
}
.chat_jiage_item3 button {
	color: #ef995f;
}
button {
	padding: 0;
}
.chat_jiage {
	padding: 30rpx 30rpx;
	display: flex;
	align-content: center;
	justify-content: space-between;
	position: fixed;
	top: 100rpx;
	width: 100%;
	background-color: #ffffff;
	box-sizing: border-box;
	max-width: 750px;
}
.chat_jiage_num {
	margin: 18rpx 0 15rpx;
}
.xianshi_dianhua {
	margin: 20rpx 0 20rpx;
}
.chat_jiage_wai {
	height: 260rpx;
	position: relative;
	z-index: 99;
}
.chat_lvsuo {
}
.top_title {
	margin-top: -4rpx;
}
.fasong {
	background-color: #07c160;
	color: #ffffff;
	border-radius: 10rpx;
	font-size: 30rpx;
	width: 98rpx;
	height: 74rpx;
	line-height: 74rpx;
	text-align: center;
	display: inline-block;
}
</style>
