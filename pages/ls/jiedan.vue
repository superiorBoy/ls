<template>
	<view>
		<view class="head">
			<view class="head_back"></view>
			<view class="head_center hei_38_bold">接单管理</view>
			<view class="head_right"></view>
		</view>
		<view class="zi_body">
			<view class="jiedan_list">
				<navigator url="tiwen_guanli" class="jiedan_item">
					<view class="jiedan_item_l">
						<view class="jiedan_item_left">
							<image src="@/static/lsimg/jiedan_bendi.png" mode="" class="jiedan_img" style="width: 60rpx;height: 60rpx;"></image>
							<image src="@/static/lsimg/new.png" mode="" class="new" v-if="geshu.tiwen > 0"></image>
						</view>
						<view class="jiedan_item_right">
							<view class="hei_28 jiedan_item_title">本地咨询</view>
							<view class="qian_24">提交咨询问题，匹配专业律师，解答完成获得悬赏！</view>
						</view>
					</view>
					<view class="geshu">
						<text class="zixun_num" v-if="geshu.tiwen > 0">+{{ geshu.tiwen }}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</navigator>
				<navigator url="zixun_jilu" class="jiedan_item">
					<view class="jiedan_item_l">
						<view class="jiedan_item_left">
							<image src="@/static/lsimg/jiedan_zaixian.png" mode="" class="jiedan_img" style="width: 60rpx;height: 60rpx;"></image>
							<image src="@/static/lsimg/new.png" mode="" class="new" v-if="geshu.zaixian > 0"></image>
						</view>
						<view class="jiedan_item_right">
							<view class="hei_28 jiedan_item_title">在线咨询</view>
							<view class="qian_24">文字/语音/图片等多种沟通，不同问题的在线咨询！</view>
						</view>
					</view>
					<view class="geshu">
						<text class="zixun_num" v-if="geshu.zaixian > 0">+{{ geshu.zaixian }}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</navigator>
				<navigator url="dianhua_zixun" class="jiedan_item">
					<!-- <view class="jiedan_item"> -->
					<view class="jiedan_item_l">
						<view class="jiedan_item_left">
							<image src="@/static/lsimg/jiedan3.png" mode="" class="jiedan_img" style="width: 56rpx;height: 56rpx;"></image>
							<image src="@/static/lsimg/new.png" mode="" class="new" v-if="geshu.dianhua > 0"></image>
						</view>
						<view class="jiedan_item_right">
							<view class="hei_28 jiedan_item_title">电话咨询</view>
							<view class="qian_24">律师给您电话针对性解答，能快速解决法律问题！</view>
						</view>
					</view>
					<view class="geshu">
						<text class="zixun_num " v-if="geshu.dianhua > 0">+{{ geshu.dianhua }}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
					<!-- </view> -->
				</navigator>
				<navigator url="qita_jilu" class="jiedan_item">
					<view class="jiedan_item_l">
						<view class="jiedan_item_left">
							<image src="@/static/lsimg/jiedan_qita.png" mode="" class="jiedan_img" style="width: 60rpx;height: 60rpx;"></image>
							<image src="@/static/lsimg/new.png" mode="" class="new" v-if="geshu.other > 0"></image>
						</view>
						<view class="jiedan_item_right">
							<view class="hei_28 jiedan_item_title">其他咨询</view>
							<view class="qian_24">了解真实案例，监督工作，保障当事人合法权益！</view>
						</view>
					</view>
					<view class="geshu">
						<text class="zixun_num" v-if="geshu.other > 0">+{{ geshu.other }}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</navigator>
				<navigator url="index" class="jiedan_item">
					<view class="jiedan_item_l">
						<view class="jiedan_item_left">
							<image src="@/static/lsimg/jiedan1.png" mode="" class="jiedan_img" style="width: 60rpx;height: 60rpx;"></image>
							<!-- <image src="@/static/lsimg/new.png" mode="" class="new"></image> -->
						</view>
						<view class="jiedan_item_rig ht">
							<view class="hei_28 jiedan_item_title">接单大厅</view>
							<view class="qian_24">咨询类型繁多，选择擅长领域快速抢单回答问题！</view>
						</view>
					</view>
					<view class="geshu">
						<!-- <text class="zixun_num" >+5</text> -->
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</navigator>

				<navigator url="anjian_weituo" class="jiedan_item">
					<view class="jiedan_item_l">
						<view class="jiedan_item_left">
							<image src="../../static/lsimg/jiedan_weituo.png" mode="" class="jiedan_img" style="width: 68rpx;height: 61rpx;"></image>
							<image src="@/static/lsimg/new.png" mode="" class="new" v-if="geshu.entrust > 0"></image>
						</view>
						<view class="jiedan_item_rig ht">
							<view class="hei_28 jiedan_item_title">案件委托</view>
							<view class="qian_24">遇到法律纠纷和亟待解决的法律问题需委托律师！</view>
						</view>
					</view>
					<view class="geshu">
						<text class="zixun_num"v-if="geshu.entrust > 0" >+{{geshu.entrust}}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</navigator>
			</view>
		</view>
		<view class="padding_bottom"></view>
		<tabBar :currentPage="currentPage" ref="ls_mainindex"></tabBar>
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
	onHide() {
		// #ifdef APP-PLUS
		socket.closeSocket();
		// #endif
	},
	onLoad() {
		(this.list = []), this.huoqu_user();
	},
	onShow() {
		this.$http
			.post({
				url: '/lawyer/login/islogin'
			})
			.then(res => {
				if (res.data.user != '') {
					this.$refs.ls_mainindex.huoqunum();
					this.huoqu_diqu();
					// #ifdef H5
					this.connectSocketInit();
					// #endif
					// #ifdef APP-PLUS
					this.app_lianjie();
					// #endif
				} else {
					this.is_login = false;
				}
			});
	},
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			currentPage: 'ls/jiedan',
			is_all: false,
			geshu: '',
			province: '',
			city: '',
			area: ''
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
					if (!res.data.user) {
						uni.redirectTo({
							url: 'shiming_renzheng'
						});
					}
					if (res.data.user.isreal == 2 || res.data.user.isreal == 3 || res.data.user.isreal == 4) {
						uni.redirectTo({
							url: 'shiming_renzheng'
						});
					} else if (res.data.user.iszhiye == 2 || res.data.user.iszhiye == 3 || res.data.user.iszhiye == 4) {
						uni.redirectTo({
							url: 'zhiye_renzheng'
						});
					} else {
					}
				});
		},
		huoqu_diqu() {
			this.$http
				.post({
					url: '/mlawyerapi/lawyer/auth',
					data: {
						type: 2
					}
				})
				.then(res => {
					this.province = res.data.lawyerauth.province;
					this.city = res.data.lawyerauth.city;

					this.jiedan_shujv();
				});
		},
		jiedan_shujv() {
			this.$http
				.post({
					url: '/mlawyerapi/user/lawyercount',
					data: {
						province: this.province,
						city: this.city
					}
				})
				.then(res => {
					this.geshu = res.data.count;
				});
		},
		connectSocketInit() {
			let that = this;
			var url = window.location.host;
			var ws = new WebSocket('wss://' + url + ':3348');
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

					uni.request({
						url: that.$http.baseUrl + '/push/gatewayworker/bind',
						method: 'POST',
						data: {
							client_id: data.client_id,
							type: 1
						},

						success: function(resp) {
							console.log(resp, 'bind');
						},
						fail: function(resp) {}
					});
				} else if (data.type == 'say') {
					console.log('say');

					this.$refs.ls_mainindex.huoqunum();
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
		},
		app_lianjie() {
			let that = this;
			Object.assign(uni, socket);
			// console.log(Object.assign(uni, socket));
			var url = that.$http.WebSocket_url;

			socket.connectSocket({
				url: 'wss://' + url + ':3348',
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
							type: 1
						},

						success: function(resp) {
							console.log(resp, 'bind');
						},
						fail: function(resp) {}
					});
				} else if (data.type == 'say') {
					console.log('say');

					that.$refs.ls_mainindex.huoqunum();
					// #ifdef APP-PLUS
					void plus.push.createMessage('律师端收到一条新消息');
					// #endif

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
	background-color: #f6f6f6;
}
.jiedan_item {
	display: flex;
	align-items: center;
	background-color: #ffffff;
	margin-top: 20rpx;
	padding: 38rpx 30rpx;
	box-sizing: border-box;
	justify-content: space-between;
	position: relative;
}
.jiedan_item_l {
	display: flex;
	align-items: center;
}
.jiedan_item_left {
	position: relative;
	margin-right: 18rpx;
	display: flex;
	align-items: center;
}
.new {
	width: 26rpx;
	height: 26rpx;
	position: absolute;
	top: -12rpx;
	right: -12rpx;
}
/* .jiedan_item_right{
	position: relative;
} */
.geshu {
	position: absolute;
	right: 30rpx;
	top: 40rpx;
}
.geshu image {
	width: 12rpx;
	height: 22rpx;
}
.zixun_num {
	background-color: #f43a51;
	border-radius: 20rpx;
	color: #ffffff;
	font-size: 20rpx;
	padding: 2rpx 6rpx;
	margin-right: 4rpx;
}
.jiedan_item_title {
	margin: 0rpx 0 4rpx;
}
</style>
