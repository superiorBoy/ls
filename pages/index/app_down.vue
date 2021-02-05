<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold"></view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
			<image src="@/static/img/app.png" mode="" class="app_top"></image>

			<view class="app_bottom">
				<view class="yaoqingma hei_24" v-if="yaoqing">
					{{ yaoqing }}
					<view class="copy bai_24 " @click="copy">复制</view>
				</view>
				<view class="hei_26"  v-if="yaoqing">
					请先
					<text class="hong_26">复制邀请码</text>
					,该邀请码用于
					<text class="hong_26">激活</text>
					软件使用资格
				</view>
				<view class="xiazai ">
					<button type="" class="bai_26" @click="down_ios">
						<image src="@/static/img/ios.png" mode="" style="width: 27rpx;height: 32rpx;"></image>
						iphone版本下载
					</button>
					<button type="" class="bai_26" @click="down_anzhuo">
						<image src="@/static/img/anzhuo.png" mode="" style="width: 33rpx;height: 32rpx;"></image>
						Android版本下载
					</button>
					<view class="tishi qian_26">
						<text class="hong_26">温馨提示：</text>
						如果点击按钮无法下载，可点击右上角的【...】 选择在浏览器中打开下载APP
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import clipboard from '@/common/copy.js';
export default {
	onShow() {
		// 获取下载
		this.$http
			.post({
				url: '/mapi/index/banben'
			})
			.then(res => {
				this.down = res.data.banben;
			});
		// 	this.$http
		// 		.post({
		// 			url: '/mapi/user/yaoqing'
		// 		})
		// 		.then(res => {
		// 			this.yaoqing = res.data.randcode1;
		// 		});
	},

	data() {
		return {
			yaoqing: '',
			down: ''
		};
	},
	created() {},
    onLoad(option) {
    	this.yaoqing=option.lianjie
    },
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		copy() {
			// #ifdef H5
			this.$copyText(this.yaoqing).then(res => {
				uni.showToast({
					title: '复制成功'
				});
			});
			// #endif
			// #ifdef APP-PLUS
			uni.setClipboardData({
				data: this.yaoqing,
				success: () => {
					uni.showToast({
						title: '复制成功'
					});
				}
			});
			// #endif
		},
		down_ios() {
			//#ifdef H5
			window.location.href = this.down.iosurl;
			// #endif
			//#ifdef APP-PLUS
			var urlStr = encodeURI(this.down.iosurl); //把字符串作为url进行编码
			plus.runtime.openURL(urlStr);
			// #endif

			// //#ifdef APP-PLUS
			// var that=this
			// uni.downloadFile({
			// 		url: that.down.iosurl,//下载地址接口返回
			// 		success: (data) => {
			// 			if (data.statusCode === 200) {
			// 				//文件保存到本地
			// 				uni.saveFile({
			// 					tempFilePath: data.tempFilePath, //临时路径
			// 					success: function(res) {
			// 						uni.showToast({
			// 							icon: 'none',
			// 							mask: true,
			// 							title: '文件已保存：' + res.savedFilePath, //保存路径
			// 							duration: 1000,
			// 						});
			// 						setTimeout(() => {
			// 							//打开文档查看
			// 							uni.openDocument({
			// 								filePath: res.savedFilePath,
			// 								success: function(res) {
			// 									console.log('打开文件成功');
			// 								}
			// 							});
			// 						}, 1000)
			// 					}
			// 				});
			// 			}
			// 		},
			// 		fail: (err) => {
			// 			console.log(err);
			// 			uni.showToast({
			// 				icon: 'none',
			// 				mask: true,
			// 				title: '失败请重新下载',
			// 			});
			// 		},
			// 	});
			// //#endif
		},
		down_anzhuo() {
			//#ifdef H5
			window.location.href = this.down.androidurl;
			// #endif

			//#ifdef APP-PLUS
			var urlStr = encodeURI(this.down.androidurl); //把字符串作为url进行编码
			plus.runtime.openURL(urlStr);
			// #endif
			// var that=this
			// uni.downloadFile({
			// 		url: that.down.iosurl,//下载地址接口返回
			// 		success: (data) => {
			// 			if (data.statusCode === 200) {
			// 				//文件保存到本地
			// 				uni.saveFile({
			// 					tempFilePath: data.tempFilePath, //临时路径
			// 					success: function(res) {
			// 						uni.showToast({
			// 							icon: 'none',
			// 							mask: true,
			// 							title: '文件已保存：' + res.savedFilePath, //保存路径
			// 							duration: 1000,
			// 						});
			// 						setTimeout(() => {
			// 							//打开文档查看
			// 							uni.openDocument({
			// 								filePath: res.savedFilePath,
			// 								success: function(res) {
			// 									console.log('打开文件成功');
			// 								}
			// 							});
			// 						}, 1000)
			// 					}
			// 				});
			// 			}
			// 		},
			// 		fail: (err) => {
			// 			console.log(err);
			// 			uni.showToast({
			// 				icon: 'none',
			// 				mask: true,
			// 				title: '失败请重新下载',
			// 			});
			// 		},
			// 	});
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #ade6d3;
	background-color: #ade6d3;
}
.head_right image {
	width: 50rpx;
	height: 10rpx;
}
.zi_body{
	padding-top: 102rpx;
}
/* #ifdef APP-PLUS */
.zi_body{
	padding-top: 146rpx;
}
 /* #endif */
.app_top {
	width: 100%;
	height: 720rpx;
}
.app_bottom {
	text-align: center;
}
.yaoqingma {
	width: 419rpx;
	height: 68rpx;
	background-color: #ffffff;
	border-radius: 34rpx;
	border: solid 1rpx #535353;
	display: flex;
	align-items: center;
	padding: 0 6rpx 0 32rpx;
	box-sizing: border-box;
	justify-content: space-between;
	margin: 47rpx auto 15rpx;
}
.copy {
	width: 109rpx;
	height: 58rpx;
	background-color: #0eb77e;
	border-radius: 29rpx;
	line-height: 58rpx;
}
.xiazai {
	padding: 0rpx 30rpx 35rpx;
	margin-top: 84rpx;
}
.xiazai button {
	height: 80rpx;
	background-color: #0eb77e;
	border-radius: 40rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 40rpx;
}
.tishi {
	text-align: left;
	margin-bottom: 40rpx;
	line-height: 40rpx;
}
</style>
