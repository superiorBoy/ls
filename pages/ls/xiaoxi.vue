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
						<view class="" v-for="item in xiaoxi_list" v-if="item.user.userid == 7">
							<text class="ke_weidu" v-if="item.lawyerreadnum != 0">{{ item.lawyerreadnum }}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="xiaoxi_list">
				<view class="xiaoxi_item" v-for="(item,index) in xiaoxi_list" @click="go_chat(item.user.userid)" v-if="item.user" :class="chumo_index==index?'chumo':''"   @touchstart='kaishi(index)'  @touchend='songkai(index)'>
					<view class="xiaoxi_item_left">
						<view class="xiaoxi_tx">
							<image :src="img_url + item.user.photourl" mode=""></image>
							<text class="xiaoxi_num bai_20" v-if="item.lawyerreadnum > 0">{{ item.lawyerreadnum }}</text>
						</view>
						<view class="xiaoxi_item_left_name">
							<view class="hei_30_bold xiaoxi_item_name">{{ item.user.mobile }}</view>
							<view class="qian_26 txt_over">
								<view class="xiaoxi_title" v-if="item.msgtype==1  && item.iswithdraw!=1">
								<u-parse :content="replace_em(item.content)" :key="theKey"></u-parse>	
									</view>
									<!-- <view class="" v-if="item.msgtype==2">
										[图片]
									</view> -->
									<view class="" v-if="item.msgtype!=1 && item.iswithdraw!=1">
									{{item.msgtype==2?'[图片]':item.msgtype==3?'[电话咨询]':item.msgtype==4?'[在线咨询]':item.msgtype==5?'[欢迎]':item.msgtype==6?'[电话咨询付费]':item.msgtype==7?'[在线咨询付费]':item.msgtype==8?'[订购]':item.msgtype==9?'[咨询超时]':item.msgtype==10?'[红包]':item.msgtype==11?'[服务收费]':item.msgtype==12?'[服务支付成功]':item.msgtype==13?'[语音消息]':item.content}}
									</view>
									<view class="" v-if="item.iswithdraw==1">
								[撤回了一条消息]
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
        var that=this
		var ls_chat_list = uni.getStorageSync('ls_chat_list') ;//读取缓存
		if(ls_chat_list){
			ls_chat_list=JSON.parse(ls_chat_list)
			// this.xiaoxi_list=[]	
			that.xiaoxi_list=ls_chat_list
			that.$forceUpdate();
			that.theKey++;	
		}else{
			
			this.page=0
			this.is_all=false
			this.xiaoxi_list=[]
			this.huoqu_xiaoxilist()
		}	
		
	var that=this
		this.$http
			.post({
				url: '/lawyer/login/islogin'
			})
			.then(res => {
				if (res.data.user != '') {
				that.$refs.ls_mainindex.huoqunum();
				this.$http
					.post({
						url: '/mlawyerapi/lawyer/lawyerclick'
					})
					.then(res => {
					});
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
	onHide() {
		// uni.removeStorageSync('ls_chat_list');
		console.log('关闭当前页面')
		// #ifdef APP-PLUS
		socket.closeSocket();
		// #endif
	},
	beforeDestroy() {
		uni.removeStorageSync('ls_chat_list');
		
		console.log('beforeDestroy')
		
		// #ifdef APP-PLUS
		socket.closeSocket();
		// #endif
		// uni.removeStorageSync('user_chat_list');
	
	},
	onLoad() {
		console.log('load')
		// this.huoqu_xiaoxilist();
		this.huoqu_user()
	// var ls_chat_list =uni.getStorageSync('ls_chat_list') ;//读取缓存
	
	// console.log(ls_chat_list)
	// if(ls_chat_list){
		
	// 	ls_chat_list=JSON.parse(ls_chat_list)
			
	// 	// this.xiaoxi_list=[]	
	// 	this.xiaoxi_list=ls_chat_list
	// 	this.$forceUpdate();
	// 	this.theKey++;	
	
	// }else{
	// 	console.log('loadlist')
	// 	this.page=0
	// 	this.is_all=false
	// 	this.xiaoxi_list=[]
	// 	this.huoqu_xiaoxilist()
	// }

		
	},
	data() {
		return {
			currentPage:'ls/xiaoxi',
			tabs: ['图文咨询', '电话咨询'],
			img_url: uni.getStorageSync('img_url'),
			active: '0',
			xiaoxi_list: [],
			weidu:0,
			theKey:0,
			is_all: false,
			page:0,
			chumo_index:-1
			// is_xianshi:false
		};
	},
	//下拉刷新
	onPullDownRefresh: function() {
		this.page=0
		this.is_all=false
		this.xiaoxi_list=[]
		this.huoqu_xiaoxilist()
		
	},
	methods: {
		//上拉加载
		onReachBottom() {
			console.log('jiazai');
			if(this.is_all){
				uni.showToast({
					title: '没有更多内容了',
					duration: 2000,
					icon: "none"
				});
				uni.stopPullDownRefresh();
				return false
			}else{
		
				this.page++
				this.huoqu_xiaoxilist()
			}
		},
		huoqu_user() {
			
			// 获取用户信息
			this.$http
				.post({
					url: '/mlawyerapi/user/getlawyer'
				})
				.then(res => {
					if(!res.data.user){
						uni.redirectTo({
							url:'shiming_renzheng'
						})
					}
					if(res.data.user.isreal==2 ||res.data.user.isreal==3||res.data.user.isreal==4){
						uni.redirectTo({
							url:'shiming_renzheng'
						})
					}else if(res.data.user.iszhiye==2 || res.data.user.iszhiye==3|| res.data.user.iszhiye==4){
						uni.redirectTo({
							url:'zhiye_renzheng'
						})
					}else{
						
						
					}
				});
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
			
					if (data.state) {
						that.jieshou_xiaoxi(data)
						that.$refs.ls_mainindex.huoqunum();
						
					// #ifdef APP-PLUS
					void plus.push.createMessage('律师端收到一条新消息');
					// #endif
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
			    uni.setStorageSync('ls_chat_list', JSON.stringify(this.xiaoxi_list));  //设置缓存
			var that=this
			     this.xiaoxi_list.forEach((item, index, array) => {
			     // 　　console.log(item);
				 if(item.user.userid==id){
					 item.lawyerreadnum=0
				 }
			     });
				 that.$refs.ls_mainindex.huoqunum();
				
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
			uni.setStorageSync('ls_chat_list', JSON.stringify(this.xiaoxi_list));  //设置缓存
				
				
			var that=this
			  //    this.xiaoxi_list.forEach((item, index, array) => {
			  //    　　console.log(item);
				 // if(item.user_to.userid==7){
					//  item.messagecount=0
				 // }
			  //    });
				 that.$refs.ls_mainindex.huoqunum();
			uni.navigateTo({
				url: 'chat?userid=7'
			});
		},
		huoqu_xiaoxilist() {
			// this.is_xianshi=false
			console.log('huoqu_xiaoxi')
			var that=this
			this.$http
				.post({

					url: '/mlawyerapi/consult/messagelist1',
					data:{
						page:this.page
					}
				})
				.then(res => {
					// this.is_xianshi=true
					// this.xiaoxi_list = res.data.messagelist;
					that.xiaoxi_list =that.xiaoxi_list.concat(res.data.messagelist) ;
					if(res.data.messagelist.length<20){
						that.is_all=true
					}

					// var i=0
					// that.xiaoxi_list.forEach((item, index, array) => {
					
					// if(item.user_to){
					// 		i++			
					// }
					// });
					
					// if(i<6&&res.data.messagelist.length>1){
					// 	that.page++
					// 	that.huoqu_xiaoxilist()
					// }
					// var num=0
					// for (var i in res.data.messagelist){
					// num+=res.data.messagelist[i].messagecount
					// }
					
					// this.weidu=num
					that.$forceUpdate()
					that.theKey++
					
					uni.setStorageSync('ls_chat_list', JSON.stringify(that.xiaoxi_list));  //设置缓存
					
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
							type:1
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
						that.jieshou_xiaoxi(data)
						that.$refs.ls_mainindex.huoqunum();
						
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
		},
		jieshou_xiaoxi(data){
			var that=this
			var list=this.xiaoxi_list
			var is_cuzai=1
			
		console.log(data,'收到消息')
			for (let i = 0; i < list.length; i++) {
			           if (JSON.stringify(list[i].user.userid).indexOf(JSON.stringify(data.userid_from)  ) > -1) {
						    is_cuzai=2
							var weifu=list[i].lawyerreadnum
							console.log(i,'存在联系人',weifu,list[i])
							list.splice(i, 1);//存在即删除
							
							var xinxi={
									 addtime:new Date().getTime(),
									 content: data.msg,
									 lawyerid: data.userid_from,
									 lawyerreadnum:weifu+1,
									 msgtype: data.state,
									 readnum: 1,
									 user: {
										 userid: data.userid_from, 
										 photourl: data.userid_from_pic,
										 nickname: data.userid_from_nickname,
										 mobile:data.userid_from_mobile
									 },
									 userid:data.userid_to 
							}
							
			                 list.unshift(xinxi)
							 that.xiaoxi_list=list
							 that.$refs.ls_mainindex.huoqunum();
							 that.$forceUpdate();
							 that.theKey++;	
			            }
						
					}	
					
					console.log('bucaunzai',is_cuzai)
				if(is_cuzai){
					console.log('bucaunzai')
					var xinxi={
							 addtime:new Date().getTime(),
							 content: data.msg,
							 lawyerid: data.userid_from,
							 lawyerreadnum:1,
							 msgtype: data.state,
							 readnum: 1,
							 user: {
								 userid: data.userid_from, 
								 photourl: data.userid_from_pic,
								 nickname: data.userid_from_nickname,
								 mobile:data.userid_from_mobile
							 },
							userid:data.userid_to 
					}
					list.unshift(xinxi)

                    that.xiaoxi_list=list
					that.$refs.ls_mainindex.huoqunum();
					that.$forceUpdate();
					that.theKey++;
				}		

                  	

		},
		kaishi(index){
			// console.log(index)
			this.chumo_index=index
		},
		songkai(){
			this.chumo_index=-1
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
	-webkit-touch-callout: none !important;
	-webkit-user-select: none !important;
	-khtml-user-select: none !important;
	-moz-user-select: none !important;
	-ms-user-select: none !important;
	user-select: none !important;
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
.chumo{
	background-color: rgba(0,0,0,0.1);
}
</style>
