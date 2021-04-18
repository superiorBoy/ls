<template>
	<view>
		
		<view class="" style="margin-top: 200px;">
			
		</view>
		<view class="">
			WebSocket:{{WebSocket}}
		</view>
		<view class="">
			WebSocketerr:{{WebSocketerr}}
		</view>
		<button type="default" @click="go_cwshi1">跳转测试1页面</button>
		<button type="default" @click="app_lianjie">开启</button>
		<button type="default" @click="close">关闭</button>
	</view>
</template>
<script>
	import socket from 'plus-websocket';
export default {
	data() {
		return {
			socketTask:'1111',
			WebSocket:'WebSocket',
			WebSocketerr:'WebSocketerr'
		};
	},
	onLoad() {
		this.app_lianjie();
	},
	computed: {},
	methods: {
		go_cwshi1(){
			uni.navigateTo({
				url:'ceshi'
			})
		},
		close(){
			 socket.closeSocket();
		},
		app_lianjie() {
			let that = this;
			that.WebSocket = '开始连接lalala';
			var url = that.$http.WebSocket_url;
                 
			 socket.connectSocket({
							url: 'wss://' + url + ':3348',
							success(data) {
								console.log('websocket已连接', JSON.stringify(data));
								that.WebSocket=JSON.stringify(data)
							}
						});
						that.WebSocket='开始连接11sssss：'+url
						socket.onSocketOpen(function(res) {
							console.log('WebSocket连接已打开！');
							that.WebSocket='...err'+res
						});
						socket.onSocketError(function(res) {
							console.log('WebSocket连接打开失败，请检查！', JSON.stringify(res));
							that.WebSocketerr=JSON.stringify(res)+'失败'
							that.WebSocket_err=JSON.stringify(res)+'失败'
						});
						socket.onSocketMessage(function(res) {
							console.log('收到服务器内容s：' + res.data);
							
			            that.WebSocket=res.data+'收到服务器内容'
							var data = JSON.parse(res.data);
							console.log(data,'2222222')
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
									// that.huoqu_xiaoxilist();
									that.WebSocket=res.data+'收到服务器内容say'
									that.jieshou_xiaoxi(data)
									that.$refs.mainindex.huoqunum();
								}
							} else {
								console.log('else');
							}
							console.log(data);
						});
						socket.onSocketClose(function(res) {
							console.log('WebSocket 已关闭！');
							that.WebSocket='WebSocket 已关闭！'
						});
		}
	}
};
</script>

<style></style>
