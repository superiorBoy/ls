<template>
	<view>
		<view class="" style="margin-top: 200px;">
			
		</view>
		{{url}}
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
export default {
	  data() {
		return {
			url:'ccc',
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
			 uni.closeSocket();
		},
		app_lianjie() {
			let that = this;
			that.WebSocket = '开始连接lalala';
			var url = that.$http.WebSocket_url;
			this.url='xhlvshi.com/'


			// uni.connectSocket({
			//   url: 'wss://' + url + ':3348',
			// });
			// console.log(url)
			this.socketTask = uni.connectSocket({
				url: 'wss://xhlvshi.com/:3348',
				// url: url,
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
				that.WebSocket = 'uniapp 已关闭:' + res.data;
			});

			that.WebSocket = 'zuihou' + url;
		}
	}
};
</script>

<style></style>
