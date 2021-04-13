<template>
	<view class="" >
<!-- 	首页首页首页首页首页首页首页首页首页首页首页首页
	首页首页首页首页首页首页首页首页首页首页首页首页
	首页首页首页首页首页首页首页首页首页首页首页首页
	首页首页首页首页首页首页首页首页首页首页首页首页 -->
		<index v-if="muban==1" ref="shouye"></index> 
		<xiaohua v-if="muban==2" ref="shouye"></xiaohua>	
		<lvyi v-if="muban==3" ref="shouye"></lvyi>
	 
	
	<tabBar :currentPage="currentPage" ref="mainindex"></tabBar>
	</view>
</template>

<script>
	import index from '@/components/index/index.vue';
	import xiaohua from '@/components/xiaohua/index.vue';
	import lvyi from '@/components/lvyi/index.vue';
	import socket from 'plus-websocket';
	import tabBar from '@/components/y_tabbar/tabbar.vue';
	
export default {
	data() {
		return {
			muban:'0',
			currentPage:'index/index',
			
		};
	},
	components: {
		index,
		xiaohua,
		lvyi,
		tabBar
	},
	created() {
	this.$http
		.post({
			url: '/mapi/index/getzhantemplate'
		})
		.then(res => {
			this.muban=res.data.template
		});
	},
	onLoad() {
	
	},
	onHide() {

	// #ifdef APP-PLUS
	socket.closeSocket();
	// #endif
	},
	onShow() {
	
			this.$http
				.post({
					url: '/index/login/islogin'
				})
				.then(res => {
					if(res.data.user!=''){
						this.$refs.mainindex.huoqunum();
						//#ifdef APP-PLUS
						      this.kaiqi();
						//#endif
					}else{
						
					}
				});	
		// this.$refs.shouye.shuxin_zujian();
	
	},
	onReady() {
		
	},
	methods: {
	kaiqi() {
			let that = this;
			// that.$refs.mainindex.huoqunum();
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
						// #ifdef APP-PLUS
						void plus.push.createMessage('用户端收到一条新消息');
						// #endif
						// that.huoqu_weidu();
						 that.$refs.mainindex.huoqunum();

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
</style>
