<template>
	<view>
		<view class="" style="margin-top: 200px;">
			
		</view>
		url
		<view class="">
			WebSocket:{{WebSocket}}
		</view>
		<view class="">
			WebSocketerr:{{WebSocketerr}}
		</view>
		<button type="default" @click="go_cwshi2">跳转测试2页面</button>
		<button type="default" @click="go_cwshi3">测试三页面</button>
		<button type="default" @click="go_cwshi4">测试四页面</button>
		<button type="default" @click="go_cwshi5">测试五</button>
		<button type="default" @click="go_cwshi6">测试6</button>
		<button type="default" @click="app_lianjie">开启</button>
		<button :disabled="!isIos" @click="judgeIosPermission('location')">位置权限</button>
		<button :disabled="!isIos" @click="judgeIosPermission('camera')">摄像头权限</button>
		<button :disabled="!isIos" @click="judgeIosPermission('photoLibrary')">相册权限</button>
		<button :disabled="!isIos" @click="judgeIosPermission('record')">麦克风权限</button>
		<button :disabled="!isIos" @click="judgeIosPermission('push')">推送权限</button>
		<button :disabled="!isIos" @click="judgeIosPermission('contact')">通讯录权限</button>
		<button :disabled="!isIos" @click="judgeIosPermission('calendar')">日历权限</button>
		<button :disabled="!isIos" @click="judgeIosPermission('memo')">备忘录权限</button>
		<button type="default" @click="close">关闭</button>
	</view>
</template>
<script>
	import permision from '@/common/permission.js';
export default {
	  data() {
		return {
			url:'url',
			socketTask:'1111',
			WebSocket:'WebSocket',
			WebSocketerr:'WebSocketerr',
			isIos:''
		};
	  },
	onLoad() {
		this.app_lianjie();
		this.isIos = (plus.os.name == "iOS")
	},
	computed: {},
	methods: {
		judgeIosPermission: function(permisionID) {
			var result = permision.judgeIosPermission(permisionID)
			console.log(result);
			var strStatus = (result) ? "已" : "未"
			uni.showModal({
				content: permisionID + '权限' + strStatus + "获得授权",
				showCancel: false
			});
			
			
			
		},
		async requestAndroidPermission(permisionID) {
			var result = await permision.requestAndroidPermission(permisionID)
			var strStatus
			if (result == 1) {
				strStatus = "已获得授权"
			} else if (result == 0) {
				strStatus = "未获得授权"
			} else {
				strStatus = "被永久拒绝权限"
			}
			uni.showModal({
				content: permisionID + strStatus,
				showCancel: false
			});
		},
		go_cwshi2(){
		uni.navigateTo({
			url:'ceshi2'
		})
			
		},
		go_cwshi3(){
		uni.navigateTo({
			url:'ceshi3'
		})
			
		},
		go_cwshi4(){
		uni.navigateTo({
			url:'ceshi4'
		})
			
		},
		go_cwshi5(){
		uni.navigateTo({
			url:'ceshi5'
		})
			
		},
		go_cwshi6(){
		uni.navigateTo({
			url:'ceshi6'
		})
			
		},
		close(){
			 uni.closeSocket();
		},
		app_lianjie() {
			let that = this;
			that.WebSocket = '开始连接lalala';
			var url = that.$http.WebSocket_url;
that.url = that.$http.WebSocket_url+'----'+ 'wss://' + url + ':3348';
// var url = 'www.xhlvshi.com';
			// uni.connectSocket({
			//   url: 'wss://' + url + ':3348',
			// });
			console.log(that.url)
			this.socketTask = uni.connectSocket({
				url: 'wss://' + url + ':3348',
				success: data => {
					that.WebSocket = '接成功data' + data;
					console.log('websocket连接成功', data);
				},
				fail: err => {
					
					that.WebSocketerr =err;
					console.log(err,'连接失败')
				},
				complete: res => {
					that.WebSocket = 'complete';
                 console.log(res,'连接失败complete')
					that.WebSocket = 'complete' + res;
				}
			});
			that.WebSocket = '开始连接3348' + url;
			uni.onSocketOpen(function(res) {
				console.log('WebSocket连接已打开！', res);
				that.WebSocket = '开始连接uniapp打开:' + res;
			});
			that.WebSocket = '开始连接33333' + url;
			uni.onSocketError(function(res) {
				console.log('WebSocket连接打开失败，请检查！');
				that.WebSocket = '开始连接uniapp失败:' + res;
			});

			that.WebSocket = '开始连接444' + url;

			uni.onSocketMessage(function(res) {
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
				} else if (data.type == 'say') {
					console.log('say');

					if (data.state) {
						// that.huoqu_xiaoxilist();
						that.WebSocket = res.data + '收到服务器内容say';
						that.jieshou_xiaoxi(data);
						that.$refs.mainindex.huoqunum();
					}
				} else {
					console.log('else');
				}

				that.WebSocket = 'uniapp收到服务器内容:' + res.data;
			});
			that.WebSocket = '开始连接55555' + url;
			uni.onSocketClose(function(res) {
				console.log('uniapp 已关闭！');
				
				that.WebSocket = 'uniapp 已关闭:' +JSON.stringify(res) ;
			});

			that.WebSocket = 'zuihou' + url;
		}
	}
};
</script>

<style></style>
