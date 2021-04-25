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
	uni.closeSocket();
	// #endif
	},
	onShow() {
	var that=this
			this.$http
				.post({
					url: '/index/login/islogin'
				})
				.then(res => {
					if(res.data.user!=''){
						this.$refs.mainindex.huoqunum();
						// this.$refs.shouye.jianche_dingwei();	
						   const value = uni.getStorageSync('citys');
						   console.log(value,'地址')
                    
						  if(value){
							  const xuanze = uni.getStorageSync('xuanze');
							  		if(xuanze==2){
							               that.$refs.shouye.jianhcha_dingwei();
										
										}
						  }else{
							that.$refs.shouye.dingwei();
							  
						  }
						
						
						//#ifdef APP-PLUS
						      this.kaiqi();
						//#endif
					}else{
						
					}
				});	
		// this.$refs.shouye.shuxin_zujian();
	uni.removeStorageSync('user_chat_list');
	},
	onReady() {
		
	},
	//下拉刷新
	onPullDownRefresh: function() {
	   this.$refs.shouye.huoqu_index();	
	},
	methods: {
	kaiqi() {
			let that = this;
			var url = that.$http.WebSocket_url;
			
			uni.connectSocket({
			    url: 'wss://' + url + ':3348',
				success:(data)=>{
					console.log("websocket连接成功",data);
				},
				fail:(err)=> {
				},
			    complete: (res)=> {
				
				}
			});
			
			uni.onSocketOpen(function (res) {
			  console.log('WebSocket连接已打开！',res);
			 
			});
			
			uni.onSocketError(function (res) {
			  console.log('WebSocket连接打开失败，请检查！');
			  
			});
			
			uni.onSocketMessage(function (res) {
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
				
			  
			});
			
			uni.onSocketClose(function (res) {
			  console.log('uniapp 已关闭！');
			});
			
		},

	
	},

};	
</script>

<style>
</style>
