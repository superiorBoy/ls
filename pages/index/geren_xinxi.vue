<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">个人信息</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body shiming_body">
			<view class="xinxi">
			
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">头像</view>
				<view class="shiming_list_right"  @click="up_zheng">
					<image :src="touxiang" mode="" class="touxiang"></image>
					<image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
				</view>	
			</view>
			<view class="shiming_list hei_28"  @click="go_xiugai(1)">
				<view class="shiming_list_left">昵称</view>
				<view class="shiming_list_right" >
				<input type="text" value="" placeholder="" class="hei_26" v-model="name" disabled="true" />
			<image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
			</view>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">手机号码</view>
				
				<input type="text" value="" placeholder="" class="hei_26" v-model="shouji" disabled="true" />
			
			</view>
			<view class="shiming_list hei_28" @click="go_xiugai(2)">
				<view class="shiming_list_left">Q Q</view>
				<view class="shiming_list_right" >
				<input type="text" value="" placeholder="请输入qq" class="hei_26" v-model="qq" disabled="true"/>
			<image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
			</view>
			</view>

			<view class="shiming_list hei_28" @click="go_xiugai(3)">
				<view class="shiming_list_left">微信</view>
				<view class="shiming_list_right" >
				<input type="text" value="" placeholder="请输入微信" class="hei_26" v-model="weixin" disabled="true"/>
			<image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
			</view>
			</view>
			<view class="shiming_list hei_28" @click="go_xiugai(4)">
				<view class="shiming_list_left">电子邮箱</view>
				<view class="shiming_list_right" >
				<input type="text" value="" placeholder="请输入电子邮箱" class="hei_26" v-model="youxiang" disabled="true"/>
			<image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
			</view>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">客服电话</view>
				<text>0576-83885500</text>
			</view>
			<view class="shiming_list hei_28" @click="go_xiugai(5)">
				<view class="shiming_list_left">简介</view>
				<view class="shiming_list_right" >
				
			<image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
			</view>
			</view>
			<navigator url="xieyi" class="shiming_list hei_28">
				<view class="shiming_list_left">用户协议</view>
				<image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
			</navigator>
			<navigator url="yinsi" class="shiming_list hei_28">
				<view class="shiming_list_left">隐私政策</view>
				<image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
			</navigator>
			</view>
			<!-- <view class="youshi">
				<view class="youshi_top qian_28">简介</view>
				<textarea value="" placeholder="请输入" class="hei_26" v-model="youshi" maxlength="5000" />
			</view> -->
			<view class="tuichu hei_28" @click="tuichu">退出当前账号</view>
		</view>
	</view>
</template>

<script>
import socket from 'plus-websocket';
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			name: '',
			shouji: '',
			qq: '',
			weixin: '',
			youxiang: '',
			youshi: '',
			data: '',
			userid: '',
			touxiang:''
		};
	},
	created() {},
	onLoad(option) {
		// 获取用户信息
		
	},
	onShow() {
		this.$http
			.post({
				url: '/mapi/user/user'
			})
			.then(res => {
				this.data = res.data.user;
				this.name = res.data.user.nickname;
				this.shouji = res.data.user.mobile;
				this.qq = res.data.user.qq;
				this.weixin = res.data.user.weixin;
				this.youxiang = res.data.user.email;
				this.userid = res.data.user.userid;
				this.youshi = res.data.user.beizhu;
				this.touxiang=this.img_url+res.data.user.photourl
			});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		// save() {
		// 	// 修改用户信息
		// 	this.$http
		// 		.post({
		// 			url: '/mapi/user/upuser',
		// 			data: {
		// 				email: this.youxiang,
		// 				qq: this.qq,
		// 				weixin: this.weixin,
		// 				beizhu: this.youshi
		// 			}
		// 		})
		// 		.then(res => {
		// 			console.log(res);
		// 			if (res.code == 0) {
		// 				uni.showToast({
		// 					title: '修改成功',
		// 					duration: 2000
		// 				});
		// 			}
		// 		});
		// 	console.log(this.name, this.shouji, this.qq, this.weixin, this.youxiang, this.youshi);
		// },
		tuichu() {
			var that = this;
			// 修改用户信息
			this.$http
				.post({
					url: '/index/login/logout'
				})
				.then(res => {
					if (res.code == 0) {
						var url = that.$http.WebSocket_url;
						socket.closeSocket({
							url: 'wss://' + url + ':3348'
						});

						socket.onSocketClose(function(res) {
							console.log('WebSocket 已关闭！');
						});
						uni.switchTab({
							url: 'my'
						});
					}
				});
		},
		go_xiugai(state){
			uni.navigateTo({
				url:'geren_xinxi_xiugai?state='+state
			})
		},
		up_zheng() {
			let that = this;
			uni.chooseImage({
				success(res) {
					console.log(res);
					// that.zhiye_zhao = res.tempFilePaths[0];
					
					// that.urlTobase64(res.tempFilePaths[0])
					//#ifdef H5
					uni.request({
						url: res.tempFilePaths[0],
						method: 'GET',
						responseType: 'arraybuffer',
						success: ress => {
							let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64
							base64 = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示的哦
							// console.log(base64)
							that.touxiang = base64;
							// that.$http
							// 	.post({
							// 		url: '/mapi/user/upnickname',
							// 		data: {
							// 			nickname:that.data.nickname,
							// 			img:base64
							// 		}
							// 	})
							// 	.then(res => {
							// 		console.log(res.code);
							// 		if (res.code == 0) {
							// 			uni.showToast({
							// 				title: '修改成功',
							// 				duration: 2000,
							// 				icon: 'none'
							// 			});
							// 			that.touxiang = base64;
							// 		}
							// 	});

							
						}
					});
					//#endif
					//#ifdef APP-PLUS
					
					let path = that.getLocalFilePath(res.tempFilePaths[0]);
					plus.io.resolveLocalFileSystemURL(
						path,
						function(entry) {
							entry.file(
								function(file) {
									var fileReader = new plus.io.FileReader();
									fileReader.onload = function(data) {
										
										
										that.$http
											.post({
												url: '/mapi/user/upnickname',
												data: {
													nickname:that.data.nickname,
													img:data.target.result
												}
											})
											.then(res => {
												console.log(res.code);
												if (res.code == 0) {
													uni.showToast({
														title: '修改成功',
														duration: 2000,
														icon: 'none'
													});
													that.touxiang = data.target.result;	
												}
											});
										
										
										
										
									};
									fileReader.onerror = function(error) {
										console.log(error);
									};
									fileReader.readAsDataURL(file);
								},
								function(error) {
									console.log(error);
								}
							);
						},
						function(error) {
							console.log(error);
						}
					);
					
					//#endif
				}
			});
		},
		getLocalFilePath(path) {
			if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {
				return path;
			}
			if (path.indexOf('file://') === 0) {
				return path;
			}
			if (path.indexOf('/storage/emulated/0/') === 0) {
				return path;
			}
			if (path.indexOf('/') === 0) {
				var localFilePath = plus.io.convertAbsoluteFileSystem(path);
				if (localFilePath !== path) {
					return localFilePath;
				} else {
					path = path.substr(1);
				}
			}
			return '_www/' + path;
		},
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #f7f7f7;
}
page{
	background-color:#f9f9f9 ;
}
.xinxi{
padding: 0 30rpx;
background-color: #ffffff;
}
.shiming_list {
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid #f7f7f7;

	position: relative;
}

.youshi {
	padding-left: 30rpx;
	padding-right: 30rpx;
	height: 240rpx;
}
.youshi textarea {
	width: 100%;
	height: 100rpx;
	background-color: #fcfcfc;
	padding: 10rpx;
	box-sizing: border-box;
}

.youshi_top {
	line-height: 100rpx;
}

.shiming_list input {
	width: 500rpx;
	text-align: right;
}

.shiming_list_left {
	width: 170rpx;
}
.shiming_list_right {
	display: flex;
	align-items: center;
}

.tuichu {
	height: 130rpx;
	background-color: #FFFFFF;
	margin-top: 20rpx;
	line-height: 130rpx;
	padding-left: 30rpx;
}
.touxiang{
		width: 80rpx;
		height: 80rpx;
		border-radius: 100% 100%;
}
.go_r{
	width: 14rpx;
		height: 24rpx;
		margin-left: 12rpx;
}
.tuichu_btn{
	height: 130rpx;
	background-color: #FFFFFF;
	margin-top: 20rpx;
	line-height: 130rpx;
	padding-left: 30rpx;
}
</style>
